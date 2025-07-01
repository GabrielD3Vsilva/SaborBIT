(function(){const M=document.createElement("link").relList;if(M&&M.supports&&M.supports("modulepreload"))return;for(const R of document.querySelectorAll('link[rel="modulepreload"]'))g(R);new MutationObserver(R=>{for(const G of R)if(G.type==="childList")for(const K of G.addedNodes)K.tagName==="LINK"&&K.rel==="modulepreload"&&g(K)}).observe(document,{childList:!0,subtree:!0});function U(R){const G={};return R.integrity&&(G.integrity=R.integrity),R.referrerPolicy&&(G.referrerPolicy=R.referrerPolicy),R.crossOrigin==="use-credentials"?G.credentials="include":R.crossOrigin==="anonymous"?G.credentials="omit":G.credentials="same-origin",G}function g(R){if(R.ep)return;R.ep=!0;const G=U(R);fetch(R.href,G)}})();var ar={exports:{}},An={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ld;function R0(){if(ld)return An;ld=1;var E=Symbol.for("react.transitional.element"),M=Symbol.for("react.fragment");function U(g,R,G){var K=null;if(G!==void 0&&(K=""+G),R.key!==void 0&&(K=""+R.key),"key"in R){G={};for(var k in R)k!=="key"&&(G[k]=R[k])}else G=R;return R=G.ref,{$$typeof:E,type:g,key:K,ref:R!==void 0?R:null,props:G}}return An.Fragment=M,An.jsx=U,An.jsxs=U,An}var nd;function U0(){return nd||(nd=1,ar.exports=R0()),ar.exports}var r=U0(),lr={exports:{}},W={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ud;function q0(){if(ud)return W;ud=1;var E=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),K=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),Z=Symbol.iterator;function J(s){return s===null||typeof s!="object"?null:(s=Z&&s[Z]||s["@@iterator"],typeof s=="function"?s:null)}var ie={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},se=Object.assign,le={};function _e(s,z,_){this.props=s,this.context=z,this.refs=le,this.updater=_||ie}_e.prototype.isReactComponent={},_e.prototype.setState=function(s,z){if(typeof s!="object"&&typeof s!="function"&&s!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,s,z,"setState")},_e.prototype.forceUpdate=function(s){this.updater.enqueueForceUpdate(this,s,"forceUpdate")};function at(){}at.prototype=_e.prototype;function Ke(s,z,_){this.props=s,this.context=z,this.refs=le,this.updater=_||ie}var Te=Ke.prototype=new at;Te.constructor=Ke,se(Te,_e.prototype),Te.isPureReactComponent=!0;var Ae=Array.isArray,$={H:null,A:null,T:null,S:null,V:null},Je=Object.prototype.hasOwnProperty;function Me(s,z,_,O,Y,ne){return _=ne.ref,{$$typeof:E,type:s,key:z,ref:_!==void 0?_:null,props:ne}}function Ge(s,z){return Me(s.type,z,void 0,void 0,void 0,s.props)}function Qe(s){return typeof s=="object"&&s!==null&&s.$$typeof===E}function Dt(s){var z={"=":"=0",":":"=2"};return"$"+s.replace(/[=:]/g,function(_){return z[_]})}var C=/\/+/g;function H(s,z){return typeof s=="object"&&s!==null&&s.key!=null?Dt(""+s.key):z.toString(36)}function Re(){}function ce(s){switch(s.status){case"fulfilled":return s.value;case"rejected":throw s.reason;default:switch(typeof s.status=="string"?s.then(Re,Re):(s.status="pending",s.then(function(z){s.status==="pending"&&(s.status="fulfilled",s.value=z)},function(z){s.status==="pending"&&(s.status="rejected",s.reason=z)})),s.status){case"fulfilled":return s.value;case"rejected":throw s.reason}}throw s}function Se(s,z,_,O,Y){var ne=typeof s;(ne==="undefined"||ne==="boolean")&&(s=null);var V=!1;if(s===null)V=!0;else switch(ne){case"bigint":case"string":case"number":V=!0;break;case"object":switch(s.$$typeof){case E:case M:V=!0;break;case D:return V=s._init,Se(V(s._payload),z,_,O,Y)}}if(V)return Y=Y(s),V=O===""?"."+H(s,0):O,Ae(Y)?(_="",V!=null&&(_=V.replace(C,"$&/")+"/"),Se(Y,z,_,"",function(_t){return _t})):Y!=null&&(Qe(Y)&&(Y=Ge(Y,_+(Y.key==null||s&&s.key===Y.key?"":(""+Y.key).replace(C,"$&/")+"/")+V)),z.push(Y)),1;V=0;var Fe=O===""?".":O+":";if(Ae(s))for(var be=0;be<s.length;be++)O=s[be],ne=Fe+H(O,be),V+=Se(O,z,_,ne,Y);else if(be=J(s),typeof be=="function")for(s=be.call(s),be=0;!(O=s.next()).done;)O=O.value,ne=Fe+H(O,be++),V+=Se(O,z,_,ne,Y);else if(ne==="object"){if(typeof s.then=="function")return Se(ce(s),z,_,O,Y);throw z=String(s),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return V}function b(s,z,_){if(s==null)return s;var O=[],Y=0;return Se(s,O,"","",function(ne){return z.call(_,ne,Y++)}),O}function A(s){if(s._status===-1){var z=s._result;z=z(),z.then(function(_){(s._status===0||s._status===-1)&&(s._status=1,s._result=_)},function(_){(s._status===0||s._status===-1)&&(s._status=2,s._result=_)}),s._status===-1&&(s._status=0,s._result=z)}if(s._status===1)return s._result.default;throw s._result}var B=typeof reportError=="function"?reportError:function(s){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof s=="object"&&s!==null&&typeof s.message=="string"?String(s.message):String(s),error:s});if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",s);return}console.error(s)};function oe(){}return W.Children={map:b,forEach:function(s,z,_){b(s,function(){z.apply(this,arguments)},_)},count:function(s){var z=0;return b(s,function(){z++}),z},toArray:function(s){return b(s,function(z){return z})||[]},only:function(s){if(!Qe(s))throw Error("React.Children.only expected to receive a single React element child.");return s}},W.Component=_e,W.Fragment=U,W.Profiler=R,W.PureComponent=Ke,W.StrictMode=g,W.Suspense=j,W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,W.__COMPILER_RUNTIME={__proto__:null,c:function(s){return $.H.useMemoCache(s)}},W.cache=function(s){return function(){return s.apply(null,arguments)}},W.cloneElement=function(s,z,_){if(s==null)throw Error("The argument must be a React element, but you passed "+s+".");var O=se({},s.props),Y=s.key,ne=void 0;if(z!=null)for(V in z.ref!==void 0&&(ne=void 0),z.key!==void 0&&(Y=""+z.key),z)!Je.call(z,V)||V==="key"||V==="__self"||V==="__source"||V==="ref"&&z.ref===void 0||(O[V]=z[V]);var V=arguments.length-2;if(V===1)O.children=_;else if(1<V){for(var Fe=Array(V),be=0;be<V;be++)Fe[be]=arguments[be+2];O.children=Fe}return Me(s.type,Y,void 0,void 0,ne,O)},W.createContext=function(s){return s={$$typeof:K,_currentValue:s,_currentValue2:s,_threadCount:0,Provider:null,Consumer:null},s.Provider=s,s.Consumer={$$typeof:G,_context:s},s},W.createElement=function(s,z,_){var O,Y={},ne=null;if(z!=null)for(O in z.key!==void 0&&(ne=""+z.key),z)Je.call(z,O)&&O!=="key"&&O!=="__self"&&O!=="__source"&&(Y[O]=z[O]);var V=arguments.length-2;if(V===1)Y.children=_;else if(1<V){for(var Fe=Array(V),be=0;be<V;be++)Fe[be]=arguments[be+2];Y.children=Fe}if(s&&s.defaultProps)for(O in V=s.defaultProps,V)Y[O]===void 0&&(Y[O]=V[O]);return Me(s,ne,void 0,void 0,null,Y)},W.createRef=function(){return{current:null}},W.forwardRef=function(s){return{$$typeof:k,render:s}},W.isValidElement=Qe,W.lazy=function(s){return{$$typeof:D,_payload:{_status:-1,_result:s},_init:A}},W.memo=function(s,z){return{$$typeof:x,type:s,compare:z===void 0?null:z}},W.startTransition=function(s){var z=$.T,_={};$.T=_;try{var O=s(),Y=$.S;Y!==null&&Y(_,O),typeof O=="object"&&O!==null&&typeof O.then=="function"&&O.then(oe,B)}catch(ne){B(ne)}finally{$.T=z}},W.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},W.use=function(s){return $.H.use(s)},W.useActionState=function(s,z,_){return $.H.useActionState(s,z,_)},W.useCallback=function(s,z){return $.H.useCallback(s,z)},W.useContext=function(s){return $.H.useContext(s)},W.useDebugValue=function(){},W.useDeferredValue=function(s,z){return $.H.useDeferredValue(s,z)},W.useEffect=function(s,z,_){var O=$.H;if(typeof _=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return O.useEffect(s,z)},W.useId=function(){return $.H.useId()},W.useImperativeHandle=function(s,z,_){return $.H.useImperativeHandle(s,z,_)},W.useInsertionEffect=function(s,z){return $.H.useInsertionEffect(s,z)},W.useLayoutEffect=function(s,z){return $.H.useLayoutEffect(s,z)},W.useMemo=function(s,z){return $.H.useMemo(s,z)},W.useOptimistic=function(s,z){return $.H.useOptimistic(s,z)},W.useReducer=function(s,z,_){return $.H.useReducer(s,z,_)},W.useRef=function(s){return $.H.useRef(s)},W.useState=function(s){return $.H.useState(s)},W.useSyncExternalStore=function(s,z,_){return $.H.useSyncExternalStore(s,z,_)},W.useTransition=function(){return $.H.useTransition()},W.version="19.1.0",W}var id;function rr(){return id||(id=1,lr.exports=q0()),lr.exports}var F=rr(),nr={exports:{}},On={},ur={exports:{}},ir={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cd;function w0(){return cd||(cd=1,function(E){function M(b,A){var B=b.length;b.push(A);e:for(;0<B;){var oe=B-1>>>1,s=b[oe];if(0<R(s,A))b[oe]=A,b[B]=s,B=oe;else break e}}function U(b){return b.length===0?null:b[0]}function g(b){if(b.length===0)return null;var A=b[0],B=b.pop();if(B!==A){b[0]=B;e:for(var oe=0,s=b.length,z=s>>>1;oe<z;){var _=2*(oe+1)-1,O=b[_],Y=_+1,ne=b[Y];if(0>R(O,B))Y<s&&0>R(ne,O)?(b[oe]=ne,b[Y]=B,oe=Y):(b[oe]=O,b[_]=B,oe=_);else if(Y<s&&0>R(ne,B))b[oe]=ne,b[Y]=B,oe=Y;else break e}}return A}function R(b,A){var B=b.sortIndex-A.sortIndex;return B!==0?B:b.id-A.id}if(E.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var G=performance;E.unstable_now=function(){return G.now()}}else{var K=Date,k=K.now();E.unstable_now=function(){return K.now()-k}}var j=[],x=[],D=1,Z=null,J=3,ie=!1,se=!1,le=!1,_e=!1,at=typeof setTimeout=="function"?setTimeout:null,Ke=typeof clearTimeout=="function"?clearTimeout:null,Te=typeof setImmediate<"u"?setImmediate:null;function Ae(b){for(var A=U(x);A!==null;){if(A.callback===null)g(x);else if(A.startTime<=b)g(x),A.sortIndex=A.expirationTime,M(j,A);else break;A=U(x)}}function $(b){if(le=!1,Ae(b),!se)if(U(j)!==null)se=!0,Je||(Je=!0,H());else{var A=U(x);A!==null&&Se($,A.startTime-b)}}var Je=!1,Me=-1,Ge=5,Qe=-1;function Dt(){return _e?!0:!(E.unstable_now()-Qe<Ge)}function C(){if(_e=!1,Je){var b=E.unstable_now();Qe=b;var A=!0;try{e:{se=!1,le&&(le=!1,Ke(Me),Me=-1),ie=!0;var B=J;try{t:{for(Ae(b),Z=U(j);Z!==null&&!(Z.expirationTime>b&&Dt());){var oe=Z.callback;if(typeof oe=="function"){Z.callback=null,J=Z.priorityLevel;var s=oe(Z.expirationTime<=b);if(b=E.unstable_now(),typeof s=="function"){Z.callback=s,Ae(b),A=!0;break t}Z===U(j)&&g(j),Ae(b)}else g(j);Z=U(j)}if(Z!==null)A=!0;else{var z=U(x);z!==null&&Se($,z.startTime-b),A=!1}}break e}finally{Z=null,J=B,ie=!1}A=void 0}}finally{A?H():Je=!1}}}var H;if(typeof Te=="function")H=function(){Te(C)};else if(typeof MessageChannel<"u"){var Re=new MessageChannel,ce=Re.port2;Re.port1.onmessage=C,H=function(){ce.postMessage(null)}}else H=function(){at(C,0)};function Se(b,A){Me=at(function(){b(E.unstable_now())},A)}E.unstable_IdlePriority=5,E.unstable_ImmediatePriority=1,E.unstable_LowPriority=4,E.unstable_NormalPriority=3,E.unstable_Profiling=null,E.unstable_UserBlockingPriority=2,E.unstable_cancelCallback=function(b){b.callback=null},E.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ge=0<b?Math.floor(1e3/b):5},E.unstable_getCurrentPriorityLevel=function(){return J},E.unstable_next=function(b){switch(J){case 1:case 2:case 3:var A=3;break;default:A=J}var B=J;J=A;try{return b()}finally{J=B}},E.unstable_requestPaint=function(){_e=!0},E.unstable_runWithPriority=function(b,A){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var B=J;J=b;try{return A()}finally{J=B}},E.unstable_scheduleCallback=function(b,A,B){var oe=E.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?oe+B:oe):B=oe,b){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=B+s,b={id:D++,callback:A,priorityLevel:b,startTime:B,expirationTime:s,sortIndex:-1},B>oe?(b.sortIndex=B,M(x,b),U(j)===null&&b===U(x)&&(le?(Ke(Me),Me=-1):le=!0,Se($,B-oe))):(b.sortIndex=s,M(j,b),se||ie||(se=!0,Je||(Je=!0,H()))),b},E.unstable_shouldYield=Dt,E.unstable_wrapCallback=function(b){var A=J;return function(){var B=J;J=A;try{return b.apply(this,arguments)}finally{J=B}}}}(ir)),ir}var rd;function C0(){return rd||(rd=1,ur.exports=w0()),ur.exports}var cr={exports:{}},et={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fd;function H0(){if(fd)return et;fd=1;var E=rr();function M(j){var x="https://react.dev/errors/"+j;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var D=2;D<arguments.length;D++)x+="&args[]="+encodeURIComponent(arguments[D])}return"Minified React error #"+j+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function U(){}var g={d:{f:U,r:function(){throw Error(M(522))},D:U,C:U,L:U,m:U,X:U,S:U,M:U},p:0,findDOMNode:null},R=Symbol.for("react.portal");function G(j,x,D){var Z=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:R,key:Z==null?null:""+Z,children:j,containerInfo:x,implementation:D}}var K=E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function k(j,x){if(j==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return et.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=g,et.createPortal=function(j,x){var D=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(M(299));return G(j,x,null,D)},et.flushSync=function(j){var x=K.T,D=g.p;try{if(K.T=null,g.p=2,j)return j()}finally{K.T=x,g.p=D,g.d.f()}},et.preconnect=function(j,x){typeof j=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,g.d.C(j,x))},et.prefetchDNS=function(j){typeof j=="string"&&g.d.D(j)},et.preinit=function(j,x){if(typeof j=="string"&&x&&typeof x.as=="string"){var D=x.as,Z=k(D,x.crossOrigin),J=typeof x.integrity=="string"?x.integrity:void 0,ie=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;D==="style"?g.d.S(j,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:Z,integrity:J,fetchPriority:ie}):D==="script"&&g.d.X(j,{crossOrigin:Z,integrity:J,fetchPriority:ie,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},et.preinitModule=function(j,x){if(typeof j=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var D=k(x.as,x.crossOrigin);g.d.M(j,{crossOrigin:D,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&g.d.M(j)},et.preload=function(j,x){if(typeof j=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var D=x.as,Z=k(D,x.crossOrigin);g.d.L(j,D,{crossOrigin:Z,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},et.preloadModule=function(j,x){if(typeof j=="string")if(x){var D=k(x.as,x.crossOrigin);g.d.m(j,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:D,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else g.d.m(j)},et.requestFormReset=function(j){g.d.r(j)},et.unstable_batchedUpdates=function(j,x){return j(x)},et.useFormState=function(j,x,D){return K.H.useFormState(j,x,D)},et.useFormStatus=function(){return K.H.useHostTransitionStatus()},et.version="19.1.0",et}var sd;function B0(){if(sd)return cr.exports;sd=1;function E(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E)}catch(M){console.error(M)}}return E(),cr.exports=H0(),cr.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var od;function Y0(){if(od)return On;od=1;var E=C0(),M=rr(),U=B0();function g(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function R(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function G(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function K(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function k(e){if(G(e)!==e)throw Error(g(188))}function j(e){var t=e.alternate;if(!t){if(t=G(e),t===null)throw Error(g(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var u=n.alternate;if(u===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===u.child){for(u=n.child;u;){if(u===a)return k(n),e;if(u===l)return k(n),t;u=u.sibling}throw Error(g(188))}if(a.return!==l.return)a=n,l=u;else{for(var i=!1,c=n.child;c;){if(c===a){i=!0,a=n,l=u;break}if(c===l){i=!0,l=n,a=u;break}c=c.sibling}if(!i){for(c=u.child;c;){if(c===a){i=!0,a=u,l=n;break}if(c===l){i=!0,l=u,a=n;break}c=c.sibling}if(!i)throw Error(g(189))}}if(a.alternate!==l)throw Error(g(190))}if(a.tag!==3)throw Error(g(188));return a.stateNode.current===a?e:t}function x(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=x(e),t!==null)return t;e=e.sibling}return null}var D=Object.assign,Z=Symbol.for("react.element"),J=Symbol.for("react.transitional.element"),ie=Symbol.for("react.portal"),se=Symbol.for("react.fragment"),le=Symbol.for("react.strict_mode"),_e=Symbol.for("react.profiler"),at=Symbol.for("react.provider"),Ke=Symbol.for("react.consumer"),Te=Symbol.for("react.context"),Ae=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),Je=Symbol.for("react.suspense_list"),Me=Symbol.for("react.memo"),Ge=Symbol.for("react.lazy"),Qe=Symbol.for("react.activity"),Dt=Symbol.for("react.memo_cache_sentinel"),C=Symbol.iterator;function H(e){return e===null||typeof e!="object"?null:(e=C&&e[C]||e["@@iterator"],typeof e=="function"?e:null)}var Re=Symbol.for("react.client.reference");function ce(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Re?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case se:return"Fragment";case _e:return"Profiler";case le:return"StrictMode";case $:return"Suspense";case Je:return"SuspenseList";case Qe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ie:return"Portal";case Te:return(e.displayName||"Context")+".Provider";case Ke:return(e._context.displayName||"Context")+".Consumer";case Ae:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Me:return t=e.displayName||null,t!==null?t:ce(e.type)||"Memo";case Ge:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}var Se=Array.isArray,b=M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=U.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B={pending:!1,data:null,method:null,action:null},oe=[],s=-1;function z(e){return{current:e}}function _(e){0>s||(e.current=oe[s],oe[s]=null,s--)}function O(e,t){s++,oe[s]=e.current,e.current=t}var Y=z(null),ne=z(null),V=z(null),Fe=z(null);function be(e,t){switch(O(V,t),O(ne,e),O(Y,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Mo(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Mo(t),e=Ro(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}_(Y),O(Y,e)}function _t(){_(Y),_(ne),_(V)}function Ol(e){e.memoizedState!==null&&O(Fe,e);var t=Y.current,a=Ro(t,e.type);t!==a&&(O(ne,e),O(Y,a))}function Na(e){ne.current===e&&(_(Y),_(ne)),Fe.current===e&&(_(Fe),Nn._currentValue=B)}var Ct=Object.prototype.hasOwnProperty,Qa=E.unstable_scheduleCallback,T=E.unstable_cancelCallback,ae=E.unstable_shouldYield,he=E.unstable_requestPaint,we=E.unstable_now,Xa=E.unstable_getCurrentPriorityLevel,fr=E.unstable_ImmediatePriority,sr=E.unstable_UserBlockingPriority,_n=E.unstable_NormalPriority,md=E.unstable_LowPriority,or=E.unstable_IdlePriority,hd=E.log,gd=E.unstable_setDisableYieldValue,Dl=null,rt=null;function Pt(e){if(typeof hd=="function"&&gd(e),rt&&typeof rt.setStrictMode=="function")try{rt.setStrictMode(Dl,e)}catch{}}var ft=Math.clz32?Math.clz32:bd,pd=Math.log,vd=Math.LN2;function bd(e){return e>>>=0,e===0?32:31-(pd(e)/vd|0)|0}var Mn=256,Rn=4194304;function za(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Un(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,u=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var c=l&134217727;return c!==0?(l=c&~u,l!==0?n=za(l):(i&=c,i!==0?n=za(i):a||(a=c&~e,a!==0&&(n=za(a))))):(c=l&~u,c!==0?n=za(c):i!==0?n=za(i):a||(a=l&~e,a!==0&&(n=za(a)))),n===0?0:t!==0&&t!==n&&(t&u)===0&&(u=n&-n,a=t&-t,u>=a||u===32&&(a&4194048)!==0)?t:n}function _l(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function yd(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dr(){var e=Mn;return Mn<<=1,(Mn&4194048)===0&&(Mn=256),e}function mr(){var e=Rn;return Rn<<=1,(Rn&62914560)===0&&(Rn=4194304),e}function Vu(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Ml(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function xd(e,t,a,l,n,u){var i=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var c=e.entanglements,f=e.expirationTimes,h=e.hiddenUpdates;for(a=i&~a;0<a;){var y=31-ft(a),N=1<<y;c[y]=0,f[y]=-1;var p=h[y];if(p!==null)for(h[y]=null,y=0;y<p.length;y++){var v=p[y];v!==null&&(v.lane&=-536870913)}a&=~N}l!==0&&hr(e,l,0),u!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=u&~(i&~t))}function hr(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-ft(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function gr(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-ft(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function Ku(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ju(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function pr(){var e=A.p;return e!==0?e:(e=window.event,e===void 0?32:Fo(e.type))}function Sd(e,t){var a=A.p;try{return A.p=e,t()}finally{A.p=a}}var It=Math.random().toString(36).slice(2),Pe="__reactFiber$"+It,lt="__reactProps$"+It,Za="__reactContainer$"+It,ku="__reactEvents$"+It,Nd="__reactListeners$"+It,zd="__reactHandles$"+It,vr="__reactResources$"+It,Rl="__reactMarker$"+It;function $u(e){delete e[Pe],delete e[lt],delete e[ku],delete e[Nd],delete e[zd]}function La(e){var t=e[Pe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Za]||a[Pe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Co(e);e!==null;){if(a=e[Pe])return a;e=Co(e)}return t}e=a,a=e.parentNode}return null}function Va(e){if(e=e[Pe]||e[Za]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Ul(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(g(33))}function Ka(e){var t=e[vr];return t||(t=e[vr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Xe(e){e[Rl]=!0}var br=new Set,yr={};function Ea(e,t){Ja(e,t),Ja(e+"Capture",t)}function Ja(e,t){for(yr[e]=t,e=0;e<t.length;e++)br.add(t[e])}var Ed=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),xr={},Sr={};function jd(e){return Ct.call(Sr,e)?!0:Ct.call(xr,e)?!1:Ed.test(e)?Sr[e]=!0:(xr[e]=!0,!1)}function qn(e,t,a){if(jd(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function wn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Ht(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}var Wu,Nr;function ka(e){if(Wu===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Wu=t&&t[1]||"",Nr=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Wu+e+Nr}var Fu=!1;function Pu(e,t){if(!e||Fu)return"";Fu=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var N=function(){throw Error()};if(Object.defineProperty(N.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(N,[])}catch(v){var p=v}Reflect.construct(e,[],N)}else{try{N.call()}catch(v){p=v}e.call(N.prototype)}}else{try{throw Error()}catch(v){p=v}(N=e())&&typeof N.catch=="function"&&N.catch(function(){})}}catch(v){if(v&&p&&typeof v.stack=="string")return[v.stack,p.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=l.DetermineComponentFrameRoot(),i=u[0],c=u[1];if(i&&c){var f=i.split(`
`),h=c.split(`
`);for(n=l=0;l<f.length&&!f[l].includes("DetermineComponentFrameRoot");)l++;for(;n<h.length&&!h[n].includes("DetermineComponentFrameRoot");)n++;if(l===f.length||n===h.length)for(l=f.length-1,n=h.length-1;1<=l&&0<=n&&f[l]!==h[n];)n--;for(;1<=l&&0<=n;l--,n--)if(f[l]!==h[n]){if(l!==1||n!==1)do if(l--,n--,0>n||f[l]!==h[n]){var y=`
`+f[l].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),y}while(1<=l&&0<=n);break}}}finally{Fu=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ka(a):""}function Td(e){switch(e.tag){case 26:case 27:case 5:return ka(e.type);case 16:return ka("Lazy");case 13:return ka("Suspense");case 19:return ka("SuspenseList");case 0:case 15:return Pu(e.type,!1);case 11:return Pu(e.type.render,!1);case 1:return Pu(e.type,!0);case 31:return ka("Activity");default:return""}}function zr(e){try{var t="";do t+=Td(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Er(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ad(e){var t=Er(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,u=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(i){l=""+i,u.call(this,i)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(i){l=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Cn(e){e._valueTracker||(e._valueTracker=Ad(e))}function jr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Er(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Hn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Od=/[\n"\\]/g;function bt(e){return e.replace(Od,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Iu(e,t,a,l,n,u,i,c){e.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.type=i:e.removeAttribute("type"),t!=null?i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+vt(t)):e.value!==""+vt(t)&&(e.value=""+vt(t)):i!=="submit"&&i!=="reset"||e.removeAttribute("value"),t!=null?ei(e,i,vt(t)):a!=null?ei(e,i,vt(a)):l!=null&&e.removeAttribute("value"),n==null&&u!=null&&(e.defaultChecked=!!u),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+vt(c):e.removeAttribute("name")}function Tr(e,t,a,l,n,u,i,c){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||t!=null))return;a=a!=null?""+vt(a):"",t=t!=null?""+vt(t):a,c||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=c?e.checked:!!l,e.defaultChecked=!!l,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.name=i)}function ei(e,t,a){t==="number"&&Hn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function $a(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+vt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Ar(e,t,a){if(t!=null&&(t=""+vt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+vt(a):""}function Or(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(g(92));if(Se(l)){if(1<l.length)throw Error(g(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=vt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function Wa(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Dd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Dr(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Dd.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function _r(e,t,a){if(t!=null&&typeof t!="object")throw Error(g(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&Dr(e,n,l)}else for(var u in t)t.hasOwnProperty(u)&&Dr(e,u,t[u])}function ti(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _d=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Md=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Bn(e){return Md.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var ai=null;function li(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fa=null,Pa=null;function Mr(e){var t=Va(e);if(t&&(e=t.stateNode)){var a=e[lt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Iu(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+bt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[lt]||null;if(!n)throw Error(g(90));Iu(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&jr(l)}break e;case"textarea":Ar(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&$a(e,!!a.multiple,t,!1)}}}var ni=!1;function Rr(e,t,a){if(ni)return e(t,a);ni=!0;try{var l=e(t);return l}finally{if(ni=!1,(Fa!==null||Pa!==null)&&(zu(),Fa&&(t=Fa,e=Pa,Pa=Fa=null,Mr(t),e)))for(t=0;t<e.length;t++)Mr(e[t])}}function ql(e,t){var a=e.stateNode;if(a===null)return null;var l=a[lt]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(g(231,t,typeof a));return a}var Bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ui=!1;if(Bt)try{var wl={};Object.defineProperty(wl,"passive",{get:function(){ui=!0}}),window.addEventListener("test",wl,wl),window.removeEventListener("test",wl,wl)}catch{ui=!1}var ea=null,ii=null,Yn=null;function Ur(){if(Yn)return Yn;var e,t=ii,a=t.length,l,n="value"in ea?ea.value:ea.textContent,u=n.length;for(e=0;e<a&&t[e]===n[e];e++);var i=a-e;for(l=1;l<=i&&t[a-l]===n[u-l];l++);return Yn=n.slice(e,1<l?1-l:void 0)}function Gn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Qn(){return!0}function qr(){return!1}function nt(e){function t(a,l,n,u,i){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(a=e[c],this[c]=a?a(u):u[c]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Qn:qr,this.isPropagationStopped=qr,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Qn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Qn)},persist:function(){},isPersistent:Qn}),t}var ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xn=nt(ja),Cl=D({},ja,{view:0,detail:0}),Rd=nt(Cl),ci,ri,Hl,Zn=D({},Cl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:si,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hl&&(Hl&&e.type==="mousemove"?(ci=e.screenX-Hl.screenX,ri=e.screenY-Hl.screenY):ri=ci=0,Hl=e),ci)},movementY:function(e){return"movementY"in e?e.movementY:ri}}),wr=nt(Zn),Ud=D({},Zn,{dataTransfer:0}),qd=nt(Ud),wd=D({},Cl,{relatedTarget:0}),fi=nt(wd),Cd=D({},ja,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=nt(Cd),Bd=D({},ja,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yd=nt(Bd),Gd=D({},ja,{data:0}),Cr=nt(Gd),Qd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ld(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zd[e])?!!t[e]:!1}function si(){return Ld}var Vd=D({},Cl,{key:function(e){if(e.key){var t=Qd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Gn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:si,charCode:function(e){return e.type==="keypress"?Gn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Gn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Kd=nt(Vd),Jd=D({},Zn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hr=nt(Jd),kd=D({},Cl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:si}),$d=nt(kd),Wd=D({},ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fd=nt(Wd),Pd=D({},Zn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Id=nt(Pd),em=D({},ja,{newState:0,oldState:0}),tm=nt(em),am=[9,13,27,32],oi=Bt&&"CompositionEvent"in window,Bl=null;Bt&&"documentMode"in document&&(Bl=document.documentMode);var lm=Bt&&"TextEvent"in window&&!Bl,Br=Bt&&(!oi||Bl&&8<Bl&&11>=Bl),Yr=" ",Gr=!1;function Qr(e,t){switch(e){case"keyup":return am.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xr(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ia=!1;function nm(e,t){switch(e){case"compositionend":return Xr(t);case"keypress":return t.which!==32?null:(Gr=!0,Yr);case"textInput":return e=t.data,e===Yr&&Gr?null:e;default:return null}}function um(e,t){if(Ia)return e==="compositionend"||!oi&&Qr(e,t)?(e=Ur(),Yn=ii=ea=null,Ia=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Br&&t.locale!=="ko"?null:t.data;default:return null}}var im={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!im[e.type]:t==="textarea"}function Lr(e,t,a,l){Fa?Pa?Pa.push(l):Pa=[l]:Fa=l,t=Du(t,"onChange"),0<t.length&&(a=new Xn("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Yl=null,Gl=null;function cm(e){To(e,0)}function Ln(e){var t=Ul(e);if(jr(t))return e}function Vr(e,t){if(e==="change")return t}var Kr=!1;if(Bt){var di;if(Bt){var mi="oninput"in document;if(!mi){var Jr=document.createElement("div");Jr.setAttribute("oninput","return;"),mi=typeof Jr.oninput=="function"}di=mi}else di=!1;Kr=di&&(!document.documentMode||9<document.documentMode)}function kr(){Yl&&(Yl.detachEvent("onpropertychange",$r),Gl=Yl=null)}function $r(e){if(e.propertyName==="value"&&Ln(Gl)){var t=[];Lr(t,Gl,e,li(e)),Rr(cm,t)}}function rm(e,t,a){e==="focusin"?(kr(),Yl=t,Gl=a,Yl.attachEvent("onpropertychange",$r)):e==="focusout"&&kr()}function fm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ln(Gl)}function sm(e,t){if(e==="click")return Ln(t)}function om(e,t){if(e==="input"||e==="change")return Ln(t)}function dm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var st=typeof Object.is=="function"?Object.is:dm;function Ql(e,t){if(st(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Ct.call(t,n)||!st(e[n],t[n]))return!1}return!0}function Wr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fr(e,t){var a=Wr(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Wr(a)}}function Pr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pr(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ir(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Hn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Hn(e.document)}return t}function hi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var mm=Bt&&"documentMode"in document&&11>=document.documentMode,el=null,gi=null,Xl=null,pi=!1;function ef(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;pi||el==null||el!==Hn(l)||(l=el,"selectionStart"in l&&hi(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Xl&&Ql(Xl,l)||(Xl=l,l=Du(gi,"onSelect"),0<l.length&&(t=new Xn("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=el)))}function Ta(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var tl={animationend:Ta("Animation","AnimationEnd"),animationiteration:Ta("Animation","AnimationIteration"),animationstart:Ta("Animation","AnimationStart"),transitionrun:Ta("Transition","TransitionRun"),transitionstart:Ta("Transition","TransitionStart"),transitioncancel:Ta("Transition","TransitionCancel"),transitionend:Ta("Transition","TransitionEnd")},vi={},tf={};Bt&&(tf=document.createElement("div").style,"AnimationEvent"in window||(delete tl.animationend.animation,delete tl.animationiteration.animation,delete tl.animationstart.animation),"TransitionEvent"in window||delete tl.transitionend.transition);function Aa(e){if(vi[e])return vi[e];if(!tl[e])return e;var t=tl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in tf)return vi[e]=t[a];return e}var af=Aa("animationend"),lf=Aa("animationiteration"),nf=Aa("animationstart"),hm=Aa("transitionrun"),gm=Aa("transitionstart"),pm=Aa("transitioncancel"),uf=Aa("transitionend"),cf=new Map,bi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bi.push("scrollEnd");function Tt(e,t){cf.set(e,t),Ea(t,[e])}var rf=new WeakMap;function yt(e,t){if(typeof e=="object"&&e!==null){var a=rf.get(e);return a!==void 0?a:(t={value:e,source:t,stack:zr(t)},rf.set(e,t),t)}return{value:e,source:t,stack:zr(t)}}var xt=[],al=0,yi=0;function Vn(){for(var e=al,t=yi=al=0;t<e;){var a=xt[t];xt[t++]=null;var l=xt[t];xt[t++]=null;var n=xt[t];xt[t++]=null;var u=xt[t];if(xt[t++]=null,l!==null&&n!==null){var i=l.pending;i===null?n.next=n:(n.next=i.next,i.next=n),l.pending=n}u!==0&&ff(a,n,u)}}function Kn(e,t,a,l){xt[al++]=e,xt[al++]=t,xt[al++]=a,xt[al++]=l,yi|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function xi(e,t,a,l){return Kn(e,t,a,l),Jn(e)}function ll(e,t){return Kn(e,null,null,t),Jn(e)}function ff(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,u=e.return;u!==null;)u.childLanes|=a,l=u.alternate,l!==null&&(l.childLanes|=a),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(n=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,n&&t!==null&&(n=31-ft(a),e=u.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),u):null}function Jn(e){if(50<hn)throw hn=0,Tc=null,Error(g(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var nl={};function vm(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(e,t,a,l){return new vm(e,t,a,l)}function Si(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yt(e,t){var a=e.alternate;return a===null?(a=ot(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function sf(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function kn(e,t,a,l,n,u){var i=0;if(l=e,typeof e=="function")Si(e)&&(i=1);else if(typeof e=="string")i=y0(e,a,Y.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Qe:return e=ot(31,a,t,n),e.elementType=Qe,e.lanes=u,e;case se:return Oa(a.children,n,u,t);case le:i=8,n|=24;break;case _e:return e=ot(12,a,t,n|2),e.elementType=_e,e.lanes=u,e;case $:return e=ot(13,a,t,n),e.elementType=$,e.lanes=u,e;case Je:return e=ot(19,a,t,n),e.elementType=Je,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case at:case Te:i=10;break e;case Ke:i=9;break e;case Ae:i=11;break e;case Me:i=14;break e;case Ge:i=16,l=null;break e}i=29,a=Error(g(130,e===null?"null":typeof e,"")),l=null}return t=ot(i,a,t,n),t.elementType=e,t.type=l,t.lanes=u,t}function Oa(e,t,a,l){return e=ot(7,e,l,t),e.lanes=a,e}function Ni(e,t,a){return e=ot(6,e,null,t),e.lanes=a,e}function zi(e,t,a){return t=ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ul=[],il=0,$n=null,Wn=0,St=[],Nt=0,Da=null,Gt=1,Qt="";function _a(e,t){ul[il++]=Wn,ul[il++]=$n,$n=e,Wn=t}function of(e,t,a){St[Nt++]=Gt,St[Nt++]=Qt,St[Nt++]=Da,Da=e;var l=Gt;e=Qt;var n=32-ft(l)-1;l&=~(1<<n),a+=1;var u=32-ft(t)+n;if(30<u){var i=n-n%5;u=(l&(1<<i)-1).toString(32),l>>=i,n-=i,Gt=1<<32-ft(t)+n|a<<n|l,Qt=u+e}else Gt=1<<u|a<<n|l,Qt=e}function Ei(e){e.return!==null&&(_a(e,1),of(e,1,0))}function ji(e){for(;e===$n;)$n=ul[--il],ul[il]=null,Wn=ul[--il],ul[il]=null;for(;e===Da;)Da=St[--Nt],St[Nt]=null,Qt=St[--Nt],St[Nt]=null,Gt=St[--Nt],St[Nt]=null}var tt=null,Oe=null,fe=!1,Ma=null,Mt=!1,Ti=Error(g(519));function Ra(e){var t=Error(g(418,""));throw Vl(yt(t,e)),Ti}function df(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Pe]=e,t[lt]=l,a){case"dialog":te("cancel",t),te("close",t);break;case"iframe":case"object":case"embed":te("load",t);break;case"video":case"audio":for(a=0;a<pn.length;a++)te(pn[a],t);break;case"source":te("error",t);break;case"img":case"image":case"link":te("error",t),te("load",t);break;case"details":te("toggle",t);break;case"input":te("invalid",t),Tr(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Cn(t);break;case"select":te("invalid",t);break;case"textarea":te("invalid",t),Or(t,l.value,l.defaultValue,l.children),Cn(t)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||_o(t.textContent,a)?(l.popover!=null&&(te("beforetoggle",t),te("toggle",t)),l.onScroll!=null&&te("scroll",t),l.onScrollEnd!=null&&te("scrollend",t),l.onClick!=null&&(t.onclick=_u),t=!0):t=!1,t||Ra(e)}function mf(e){for(tt=e.return;tt;)switch(tt.tag){case 5:case 13:Mt=!1;return;case 27:case 3:Mt=!0;return;default:tt=tt.return}}function Zl(e){if(e!==tt)return!1;if(!fe)return mf(e),fe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Xc(e.type,e.memoizedProps)),a=!a),a&&Oe&&Ra(e),mf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){Oe=Ot(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}Oe=null}}else t===27?(t=Oe,pa(e.type)?(e=Kc,Kc=null,Oe=e):Oe=t):Oe=tt?Ot(e.stateNode.nextSibling):null;return!0}function Ll(){Oe=tt=null,fe=!1}function hf(){var e=Ma;return e!==null&&(ct===null?ct=e:ct.push.apply(ct,e),Ma=null),e}function Vl(e){Ma===null?Ma=[e]:Ma.push(e)}var Ai=z(null),Ua=null,Xt=null;function ta(e,t,a){O(Ai,t._currentValue),t._currentValue=a}function Zt(e){e._currentValue=Ai.current,_(Ai)}function Oi(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Di(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var u=n.dependencies;if(u!==null){var i=n.child;u=u.firstContext;e:for(;u!==null;){var c=u;u=n;for(var f=0;f<t.length;f++)if(c.context===t[f]){u.lanes|=a,c=u.alternate,c!==null&&(c.lanes|=a),Oi(u.return,a,e),l||(i=null);break e}u=c.next}}else if(n.tag===18){if(i=n.return,i===null)throw Error(g(341));i.lanes|=a,u=i.alternate,u!==null&&(u.lanes|=a),Oi(i,a,e),i=null}else i=n.child;if(i!==null)i.return=n;else for(i=n;i!==null;){if(i===e){i=null;break}if(n=i.sibling,n!==null){n.return=i.return,i=n;break}i=i.return}n=i}}function Kl(e,t,a,l){e=null;for(var n=t,u=!1;n!==null;){if(!u){if((n.flags&524288)!==0)u=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var i=n.alternate;if(i===null)throw Error(g(387));if(i=i.memoizedProps,i!==null){var c=n.type;st(n.pendingProps.value,i.value)||(e!==null?e.push(c):e=[c])}}else if(n===Fe.current){if(i=n.alternate,i===null)throw Error(g(387));i.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Nn):e=[Nn])}n=n.return}e!==null&&Di(t,e,a,l),t.flags|=262144}function Fn(e){for(e=e.firstContext;e!==null;){if(!st(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function qa(e){Ua=e,Xt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ie(e){return gf(Ua,e)}function Pn(e,t){return Ua===null&&qa(e),gf(e,t)}function gf(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Xt===null){if(e===null)throw Error(g(308));Xt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Xt=Xt.next=t;return a}var bm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},ym=E.unstable_scheduleCallback,xm=E.unstable_NormalPriority,Be={$$typeof:Te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _i(){return{controller:new bm,data:new Map,refCount:0}}function Jl(e){e.refCount--,e.refCount===0&&ym(xm,function(){e.controller.abort()})}var kl=null,Mi=0,cl=0,rl=null;function Sm(e,t){if(kl===null){var a=kl=[];Mi=0,cl=Uc(),rl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Mi++,t.then(pf,pf),t}function pf(){if(--Mi===0&&kl!==null){rl!==null&&(rl.status="fulfilled");var e=kl;kl=null,cl=0,rl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Nm(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var vf=b.S;b.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Sm(e,t),vf!==null&&vf(e,t)};var wa=z(null);function Ri(){var e=wa.current;return e!==null?e:xe.pooledCache}function In(e,t){t===null?O(wa,wa.current):O(wa,t.pool)}function bf(){var e=Ri();return e===null?null:{parent:Be._currentValue,pool:e}}var $l=Error(g(460)),yf=Error(g(474)),eu=Error(g(542)),Ui={then:function(){}};function xf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function tu(){}function Sf(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(tu,tu),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,zf(e),e;default:if(typeof t.status=="string")t.then(tu,tu);else{if(e=xe,e!==null&&100<e.shellSuspendCounter)throw Error(g(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,zf(e),e}throw Wl=t,$l}}var Wl=null;function Nf(){if(Wl===null)throw Error(g(459));var e=Wl;return Wl=null,e}function zf(e){if(e===$l||e===eu)throw Error(g(483))}var aa=!1;function qi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wi(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function la(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function na(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(de&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=Jn(e),ff(e,null,a),t}return Kn(e,l,t,a),Jn(e)}function Fl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,gr(e,a)}}function Ci(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var i={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?n=u=i:u=u.next=i,a=a.next}while(a!==null);u===null?n=u=t:u=u.next=t}else n=u=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:u,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Hi=!1;function Pl(){if(Hi){var e=rl;if(e!==null)throw e}}function Il(e,t,a,l){Hi=!1;var n=e.updateQueue;aa=!1;var u=n.firstBaseUpdate,i=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var f=c,h=f.next;f.next=null,i===null?u=h:i.next=h,i=f;var y=e.alternate;y!==null&&(y=y.updateQueue,c=y.lastBaseUpdate,c!==i&&(c===null?y.firstBaseUpdate=h:c.next=h,y.lastBaseUpdate=f))}if(u!==null){var N=n.baseState;i=0,y=h=f=null,c=u;do{var p=c.lane&-536870913,v=p!==c.lane;if(v?(ue&p)===p:(l&p)===p){p!==0&&p===cl&&(Hi=!0),y!==null&&(y=y.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var L=e,Q=c;p=t;var ve=a;switch(Q.tag){case 1:if(L=Q.payload,typeof L=="function"){N=L.call(ve,N,p);break e}N=L;break e;case 3:L.flags=L.flags&-65537|128;case 0:if(L=Q.payload,p=typeof L=="function"?L.call(ve,N,p):L,p==null)break e;N=D({},N,p);break e;case 2:aa=!0}}p=c.callback,p!==null&&(e.flags|=64,v&&(e.flags|=8192),v=n.callbacks,v===null?n.callbacks=[p]:v.push(p))}else v={lane:p,tag:c.tag,payload:c.payload,callback:c.callback,next:null},y===null?(h=y=v,f=N):y=y.next=v,i|=p;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;v=c,c=v.next,v.next=null,n.lastBaseUpdate=v,n.shared.pending=null}}while(!0);y===null&&(f=N),n.baseState=f,n.firstBaseUpdate=h,n.lastBaseUpdate=y,u===null&&(n.shared.lanes=0),da|=i,e.lanes=i,e.memoizedState=N}}function Ef(e,t){if(typeof e!="function")throw Error(g(191,e));e.call(t)}function jf(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ef(a[e],t)}var fl=z(null),au=z(0);function Tf(e,t){e=Wt,O(au,e),O(fl,t),Wt=e|t.baseLanes}function Bi(){O(au,Wt),O(fl,fl.current)}function Yi(){Wt=au.current,_(fl),_(au)}var ua=0,P=null,ge=null,Ce=null,lu=!1,sl=!1,Ca=!1,nu=0,en=0,ol=null,zm=0;function Ue(){throw Error(g(321))}function Gi(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!st(e[a],t[a]))return!1;return!0}function Qi(e,t,a,l,n,u){return ua=u,P=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,b.H=e===null||e.memoizedState===null?fs:ss,Ca=!1,u=a(l,n),Ca=!1,sl&&(u=Of(t,a,l,n)),Af(e),u}function Af(e){b.H=su;var t=ge!==null&&ge.next!==null;if(ua=0,Ce=ge=P=null,lu=!1,en=0,ol=null,t)throw Error(g(300));e===null||Ze||(e=e.dependencies,e!==null&&Fn(e)&&(Ze=!0))}function Of(e,t,a,l){P=e;var n=0;do{if(sl&&(ol=null),en=0,sl=!1,25<=n)throw Error(g(301));if(n+=1,Ce=ge=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}b.H=_m,u=t(a,l)}while(sl);return u}function Em(){var e=b.H,t=e.useState()[0];return t=typeof t.then=="function"?tn(t):t,e=e.useState()[0],(ge!==null?ge.memoizedState:null)!==e&&(P.flags|=1024),t}function Xi(){var e=nu!==0;return nu=0,e}function Zi(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Li(e){if(lu){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}lu=!1}ua=0,Ce=ge=P=null,sl=!1,en=nu=0,ol=null}function ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?P.memoizedState=Ce=e:Ce=Ce.next=e,Ce}function He(){if(ge===null){var e=P.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=Ce===null?P.memoizedState:Ce.next;if(t!==null)Ce=t,ge=e;else{if(e===null)throw P.alternate===null?Error(g(467)):Error(g(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},Ce===null?P.memoizedState=Ce=e:Ce=Ce.next=e}return Ce}function Vi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function tn(e){var t=en;return en+=1,ol===null&&(ol=[]),e=Sf(ol,e,t),t=P,(Ce===null?t.memoizedState:Ce.next)===null&&(t=t.alternate,b.H=t===null||t.memoizedState===null?fs:ss),e}function uu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return tn(e);if(e.$$typeof===Te)return Ie(e)}throw Error(g(438,String(e)))}function Ki(e){var t=null,a=P.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=P.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Vi(),P.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Dt;return t.index++,a}function Lt(e,t){return typeof t=="function"?t(e):t}function iu(e){var t=He();return Ji(t,ge,e)}function Ji(e,t,a){var l=e.queue;if(l===null)throw Error(g(311));l.lastRenderedReducer=a;var n=e.baseQueue,u=l.pending;if(u!==null){if(n!==null){var i=n.next;n.next=u.next,u.next=i}t.baseQueue=n=u,l.pending=null}if(u=e.baseState,n===null)e.memoizedState=u;else{t=n.next;var c=i=null,f=null,h=t,y=!1;do{var N=h.lane&-536870913;if(N!==h.lane?(ue&N)===N:(ua&N)===N){var p=h.revertLane;if(p===0)f!==null&&(f=f.next={lane:0,revertLane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),N===cl&&(y=!0);else if((ua&p)===p){h=h.next,p===cl&&(y=!0);continue}else N={lane:0,revertLane:h.revertLane,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},f===null?(c=f=N,i=u):f=f.next=N,P.lanes|=p,da|=p;N=h.action,Ca&&a(u,N),u=h.hasEagerState?h.eagerState:a(u,N)}else p={lane:N,revertLane:h.revertLane,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},f===null?(c=f=p,i=u):f=f.next=p,P.lanes|=N,da|=N;h=h.next}while(h!==null&&h!==t);if(f===null?i=u:f.next=c,!st(u,e.memoizedState)&&(Ze=!0,y&&(a=rl,a!==null)))throw a;e.memoizedState=u,e.baseState=i,e.baseQueue=f,l.lastRenderedState=u}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function ki(e){var t=He(),a=t.queue;if(a===null)throw Error(g(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,u=t.memoizedState;if(n!==null){a.pending=null;var i=n=n.next;do u=e(u,i.action),i=i.next;while(i!==n);st(u,t.memoizedState)||(Ze=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),a.lastRenderedState=u}return[u,l]}function Df(e,t,a){var l=P,n=He(),u=fe;if(u){if(a===void 0)throw Error(g(407));a=a()}else a=t();var i=!st((ge||n).memoizedState,a);i&&(n.memoizedState=a,Ze=!0),n=n.queue;var c=Rf.bind(null,l,n,e);if(an(2048,8,c,[e]),n.getSnapshot!==t||i||Ce!==null&&Ce.memoizedState.tag&1){if(l.flags|=2048,dl(9,cu(),Mf.bind(null,l,n,a,t),null),xe===null)throw Error(g(349));u||(ua&124)!==0||_f(l,t,a)}return a}function _f(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=P.updateQueue,t===null?(t=Vi(),P.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Mf(e,t,a,l){t.value=a,t.getSnapshot=l,Uf(t)&&qf(e)}function Rf(e,t,a){return a(function(){Uf(t)&&qf(e)})}function Uf(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!st(e,a)}catch{return!0}}function qf(e){var t=ll(e,2);t!==null&&pt(t,e,2)}function $i(e){var t=ut();if(typeof e=="function"){var a=e;if(e=a(),Ca){Pt(!0);try{a()}finally{Pt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:e},t}function wf(e,t,a,l){return e.baseState=a,Ji(e,ge,typeof l=="function"?l:Lt)}function jm(e,t,a,l,n){if(fu(e))throw Error(g(485));if(e=t.action,e!==null){var u={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){u.listeners.push(i)}};b.T!==null?a(!0):u.isTransition=!1,l(u),a=t.pending,a===null?(u.next=t.pending=u,Cf(t,u)):(u.next=a.next,t.pending=a.next=u)}}function Cf(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var u=b.T,i={};b.T=i;try{var c=a(n,l),f=b.S;f!==null&&f(i,c),Hf(e,t,c)}catch(h){Wi(e,t,h)}finally{b.T=u}}else try{u=a(n,l),Hf(e,t,u)}catch(h){Wi(e,t,h)}}function Hf(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Bf(e,t,l)},function(l){return Wi(e,t,l)}):Bf(e,t,a)}function Bf(e,t,a){t.status="fulfilled",t.value=a,Yf(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Cf(e,a)))}function Wi(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Yf(t),t=t.next;while(t!==l)}e.action=null}function Yf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Gf(e,t){return t}function Qf(e,t){if(fe){var a=xe.formState;if(a!==null){e:{var l=P;if(fe){if(Oe){t:{for(var n=Oe,u=Mt;n.nodeType!==8;){if(!u){n=null;break t}if(n=Ot(n.nextSibling),n===null){n=null;break t}}u=n.data,n=u==="F!"||u==="F"?n:null}if(n){Oe=Ot(n.nextSibling),l=n.data==="F!";break e}}Ra(l)}l=!1}l&&(t=a[0])}}return a=ut(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gf,lastRenderedState:t},a.queue=l,a=is.bind(null,P,l),l.dispatch=a,l=$i(!1),u=tc.bind(null,P,!1,l.queue),l=ut(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=jm.bind(null,P,n,u,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Xf(e){var t=He();return Zf(t,ge,e)}function Zf(e,t,a){if(t=Ji(e,t,Gf)[0],e=iu(Lt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=tn(t)}catch(i){throw i===$l?eu:i}else l=t;t=He();var n=t.queue,u=n.dispatch;return a!==t.memoizedState&&(P.flags|=2048,dl(9,cu(),Tm.bind(null,n,a),null)),[l,u,e]}function Tm(e,t){e.action=t}function Lf(e){var t=He(),a=ge;if(a!==null)return Zf(t,a,e);He(),t=t.memoizedState,a=He();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function dl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=P.updateQueue,t===null&&(t=Vi(),P.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function cu(){return{destroy:void 0,resource:void 0}}function Vf(){return He().memoizedState}function ru(e,t,a,l){var n=ut();l=l===void 0?null:l,P.flags|=e,n.memoizedState=dl(1|t,cu(),a,l)}function an(e,t,a,l){var n=He();l=l===void 0?null:l;var u=n.memoizedState.inst;ge!==null&&l!==null&&Gi(l,ge.memoizedState.deps)?n.memoizedState=dl(t,u,a,l):(P.flags|=e,n.memoizedState=dl(1|t,u,a,l))}function Kf(e,t){ru(8390656,8,e,t)}function Jf(e,t){an(2048,8,e,t)}function kf(e,t){return an(4,2,e,t)}function $f(e,t){return an(4,4,e,t)}function Wf(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ff(e,t,a){a=a!=null?a.concat([e]):null,an(4,4,Wf.bind(null,t,e),a)}function Fi(){}function Pf(e,t){var a=He();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Gi(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function If(e,t){var a=He();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Gi(t,l[1]))return l[0];if(l=e(),Ca){Pt(!0);try{e()}finally{Pt(!1)}}return a.memoizedState=[l,t],l}function Pi(e,t,a){return a===void 0||(ua&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=ao(),P.lanes|=e,da|=e,a)}function es(e,t,a,l){return st(a,t)?a:fl.current!==null?(e=Pi(e,a,l),st(e,t)||(Ze=!0),e):(ua&42)===0?(Ze=!0,e.memoizedState=a):(e=ao(),P.lanes|=e,da|=e,t)}function ts(e,t,a,l,n){var u=A.p;A.p=u!==0&&8>u?u:8;var i=b.T,c={};b.T=c,tc(e,!1,t,a);try{var f=n(),h=b.S;if(h!==null&&h(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var y=Nm(f,l);ln(e,t,y,gt(e))}else ln(e,t,l,gt(e))}catch(N){ln(e,t,{then:function(){},status:"rejected",reason:N},gt())}finally{A.p=u,b.T=i}}function Am(){}function Ii(e,t,a,l){if(e.tag!==5)throw Error(g(476));var n=as(e).queue;ts(e,n,t,B,a===null?Am:function(){return ls(e),a(l)})}function as(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:B,baseState:B,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:B},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ls(e){var t=as(e).next.queue;ln(e,t,{},gt())}function ec(){return Ie(Nn)}function ns(){return He().memoizedState}function us(){return He().memoizedState}function Om(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=gt();e=la(a);var l=na(t,e,a);l!==null&&(pt(l,t,a),Fl(l,t,a)),t={cache:_i()},e.payload=t;return}t=t.return}}function Dm(e,t,a){var l=gt();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},fu(e)?cs(t,a):(a=xi(e,t,a,l),a!==null&&(pt(a,e,l),rs(a,t,l)))}function is(e,t,a){var l=gt();ln(e,t,a,l)}function ln(e,t,a,l){var n={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(fu(e))cs(t,n);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var i=t.lastRenderedState,c=u(i,a);if(n.hasEagerState=!0,n.eagerState=c,st(c,i))return Kn(e,t,n,0),xe===null&&Vn(),!1}catch{}finally{}if(a=xi(e,t,n,l),a!==null)return pt(a,e,l),rs(a,t,l),!0}return!1}function tc(e,t,a,l){if(l={lane:2,revertLane:Uc(),action:l,hasEagerState:!1,eagerState:null,next:null},fu(e)){if(t)throw Error(g(479))}else t=xi(e,a,l,2),t!==null&&pt(t,e,2)}function fu(e){var t=e.alternate;return e===P||t!==null&&t===P}function cs(e,t){sl=lu=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function rs(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,gr(e,a)}}var su={readContext:Ie,use:uu,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useLayoutEffect:Ue,useInsertionEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useSyncExternalStore:Ue,useId:Ue,useHostTransitionStatus:Ue,useFormState:Ue,useActionState:Ue,useOptimistic:Ue,useMemoCache:Ue,useCacheRefresh:Ue},fs={readContext:Ie,use:uu,useCallback:function(e,t){return ut().memoizedState=[e,t===void 0?null:t],e},useContext:Ie,useEffect:Kf,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,ru(4194308,4,Wf.bind(null,t,e),a)},useLayoutEffect:function(e,t){return ru(4194308,4,e,t)},useInsertionEffect:function(e,t){ru(4,2,e,t)},useMemo:function(e,t){var a=ut();t=t===void 0?null:t;var l=e();if(Ca){Pt(!0);try{e()}finally{Pt(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=ut();if(a!==void 0){var n=a(t);if(Ca){Pt(!0);try{a(t)}finally{Pt(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Dm.bind(null,P,e),[l.memoizedState,e]},useRef:function(e){var t=ut();return e={current:e},t.memoizedState=e},useState:function(e){e=$i(e);var t=e.queue,a=is.bind(null,P,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Fi,useDeferredValue:function(e,t){var a=ut();return Pi(a,e,t)},useTransition:function(){var e=$i(!1);return e=ts.bind(null,P,e.queue,!0,!1),ut().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=P,n=ut();if(fe){if(a===void 0)throw Error(g(407));a=a()}else{if(a=t(),xe===null)throw Error(g(349));(ue&124)!==0||_f(l,t,a)}n.memoizedState=a;var u={value:a,getSnapshot:t};return n.queue=u,Kf(Rf.bind(null,l,u,e),[e]),l.flags|=2048,dl(9,cu(),Mf.bind(null,l,u,a,t),null),a},useId:function(){var e=ut(),t=xe.identifierPrefix;if(fe){var a=Qt,l=Gt;a=(l&~(1<<32-ft(l)-1)).toString(32)+a,t="«"+t+"R"+a,a=nu++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=zm++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:ec,useFormState:Qf,useActionState:Qf,useOptimistic:function(e){var t=ut();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=tc.bind(null,P,!0,a),a.dispatch=t,[e,t]},useMemoCache:Ki,useCacheRefresh:function(){return ut().memoizedState=Om.bind(null,P)}},ss={readContext:Ie,use:uu,useCallback:Pf,useContext:Ie,useEffect:Jf,useImperativeHandle:Ff,useInsertionEffect:kf,useLayoutEffect:$f,useMemo:If,useReducer:iu,useRef:Vf,useState:function(){return iu(Lt)},useDebugValue:Fi,useDeferredValue:function(e,t){var a=He();return es(a,ge.memoizedState,e,t)},useTransition:function(){var e=iu(Lt)[0],t=He().memoizedState;return[typeof e=="boolean"?e:tn(e),t]},useSyncExternalStore:Df,useId:ns,useHostTransitionStatus:ec,useFormState:Xf,useActionState:Xf,useOptimistic:function(e,t){var a=He();return wf(a,ge,e,t)},useMemoCache:Ki,useCacheRefresh:us},_m={readContext:Ie,use:uu,useCallback:Pf,useContext:Ie,useEffect:Jf,useImperativeHandle:Ff,useInsertionEffect:kf,useLayoutEffect:$f,useMemo:If,useReducer:ki,useRef:Vf,useState:function(){return ki(Lt)},useDebugValue:Fi,useDeferredValue:function(e,t){var a=He();return ge===null?Pi(a,e,t):es(a,ge.memoizedState,e,t)},useTransition:function(){var e=ki(Lt)[0],t=He().memoizedState;return[typeof e=="boolean"?e:tn(e),t]},useSyncExternalStore:Df,useId:ns,useHostTransitionStatus:ec,useFormState:Lf,useActionState:Lf,useOptimistic:function(e,t){var a=He();return ge!==null?wf(a,ge,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ki,useCacheRefresh:us},ml=null,nn=0;function ou(e){var t=nn;return nn+=1,ml===null&&(ml=[]),Sf(ml,e,t)}function un(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function du(e,t){throw t.$$typeof===Z?Error(g(525)):(e=Object.prototype.toString.call(t),Error(g(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function os(e){var t=e._init;return t(e._payload)}function ds(e){function t(d,o){if(e){var m=d.deletions;m===null?(d.deletions=[o],d.flags|=16):m.push(o)}}function a(d,o){if(!e)return null;for(;o!==null;)t(d,o),o=o.sibling;return null}function l(d){for(var o=new Map;d!==null;)d.key!==null?o.set(d.key,d):o.set(d.index,d),d=d.sibling;return o}function n(d,o){return d=Yt(d,o),d.index=0,d.sibling=null,d}function u(d,o,m){return d.index=m,e?(m=d.alternate,m!==null?(m=m.index,m<o?(d.flags|=67108866,o):m):(d.flags|=67108866,o)):(d.flags|=1048576,o)}function i(d){return e&&d.alternate===null&&(d.flags|=67108866),d}function c(d,o,m,S){return o===null||o.tag!==6?(o=Ni(m,d.mode,S),o.return=d,o):(o=n(o,m),o.return=d,o)}function f(d,o,m,S){var q=m.type;return q===se?y(d,o,m.props.children,S,m.key):o!==null&&(o.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===Ge&&os(q)===o.type)?(o=n(o,m.props),un(o,m),o.return=d,o):(o=kn(m.type,m.key,m.props,null,d.mode,S),un(o,m),o.return=d,o)}function h(d,o,m,S){return o===null||o.tag!==4||o.stateNode.containerInfo!==m.containerInfo||o.stateNode.implementation!==m.implementation?(o=zi(m,d.mode,S),o.return=d,o):(o=n(o,m.children||[]),o.return=d,o)}function y(d,o,m,S,q){return o===null||o.tag!==7?(o=Oa(m,d.mode,S,q),o.return=d,o):(o=n(o,m),o.return=d,o)}function N(d,o,m){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=Ni(""+o,d.mode,m),o.return=d,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case J:return m=kn(o.type,o.key,o.props,null,d.mode,m),un(m,o),m.return=d,m;case ie:return o=zi(o,d.mode,m),o.return=d,o;case Ge:var S=o._init;return o=S(o._payload),N(d,o,m)}if(Se(o)||H(o))return o=Oa(o,d.mode,m,null),o.return=d,o;if(typeof o.then=="function")return N(d,ou(o),m);if(o.$$typeof===Te)return N(d,Pn(d,o),m);du(d,o)}return null}function p(d,o,m,S){var q=o!==null?o.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return q!==null?null:c(d,o,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case J:return m.key===q?f(d,o,m,S):null;case ie:return m.key===q?h(d,o,m,S):null;case Ge:return q=m._init,m=q(m._payload),p(d,o,m,S)}if(Se(m)||H(m))return q!==null?null:y(d,o,m,S,null);if(typeof m.then=="function")return p(d,o,ou(m),S);if(m.$$typeof===Te)return p(d,o,Pn(d,m),S);du(d,m)}return null}function v(d,o,m,S,q){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return d=d.get(m)||null,c(o,d,""+S,q);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case J:return d=d.get(S.key===null?m:S.key)||null,f(o,d,S,q);case ie:return d=d.get(S.key===null?m:S.key)||null,h(o,d,S,q);case Ge:var I=S._init;return S=I(S._payload),v(d,o,m,S,q)}if(Se(S)||H(S))return d=d.get(m)||null,y(o,d,S,q,null);if(typeof S.then=="function")return v(d,o,m,ou(S),q);if(S.$$typeof===Te)return v(d,o,m,Pn(o,S),q);du(o,S)}return null}function L(d,o,m,S){for(var q=null,I=null,w=o,X=o=0,Ve=null;w!==null&&X<m.length;X++){w.index>X?(Ve=w,w=null):Ve=w.sibling;var re=p(d,w,m[X],S);if(re===null){w===null&&(w=Ve);break}e&&w&&re.alternate===null&&t(d,w),o=u(re,o,X),I===null?q=re:I.sibling=re,I=re,w=Ve}if(X===m.length)return a(d,w),fe&&_a(d,X),q;if(w===null){for(;X<m.length;X++)w=N(d,m[X],S),w!==null&&(o=u(w,o,X),I===null?q=w:I.sibling=w,I=w);return fe&&_a(d,X),q}for(w=l(w);X<m.length;X++)Ve=v(w,d,X,m[X],S),Ve!==null&&(e&&Ve.alternate!==null&&w.delete(Ve.key===null?X:Ve.key),o=u(Ve,o,X),I===null?q=Ve:I.sibling=Ve,I=Ve);return e&&w.forEach(function(Sa){return t(d,Sa)}),fe&&_a(d,X),q}function Q(d,o,m,S){if(m==null)throw Error(g(151));for(var q=null,I=null,w=o,X=o=0,Ve=null,re=m.next();w!==null&&!re.done;X++,re=m.next()){w.index>X?(Ve=w,w=null):Ve=w.sibling;var Sa=p(d,w,re.value,S);if(Sa===null){w===null&&(w=Ve);break}e&&w&&Sa.alternate===null&&t(d,w),o=u(Sa,o,X),I===null?q=Sa:I.sibling=Sa,I=Sa,w=Ve}if(re.done)return a(d,w),fe&&_a(d,X),q;if(w===null){for(;!re.done;X++,re=m.next())re=N(d,re.value,S),re!==null&&(o=u(re,o,X),I===null?q=re:I.sibling=re,I=re);return fe&&_a(d,X),q}for(w=l(w);!re.done;X++,re=m.next())re=v(w,d,X,re.value,S),re!==null&&(e&&re.alternate!==null&&w.delete(re.key===null?X:re.key),o=u(re,o,X),I===null?q=re:I.sibling=re,I=re);return e&&w.forEach(function(M0){return t(d,M0)}),fe&&_a(d,X),q}function ve(d,o,m,S){if(typeof m=="object"&&m!==null&&m.type===se&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case J:e:{for(var q=m.key;o!==null;){if(o.key===q){if(q=m.type,q===se){if(o.tag===7){a(d,o.sibling),S=n(o,m.props.children),S.return=d,d=S;break e}}else if(o.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===Ge&&os(q)===o.type){a(d,o.sibling),S=n(o,m.props),un(S,m),S.return=d,d=S;break e}a(d,o);break}else t(d,o);o=o.sibling}m.type===se?(S=Oa(m.props.children,d.mode,S,m.key),S.return=d,d=S):(S=kn(m.type,m.key,m.props,null,d.mode,S),un(S,m),S.return=d,d=S)}return i(d);case ie:e:{for(q=m.key;o!==null;){if(o.key===q)if(o.tag===4&&o.stateNode.containerInfo===m.containerInfo&&o.stateNode.implementation===m.implementation){a(d,o.sibling),S=n(o,m.children||[]),S.return=d,d=S;break e}else{a(d,o);break}else t(d,o);o=o.sibling}S=zi(m,d.mode,S),S.return=d,d=S}return i(d);case Ge:return q=m._init,m=q(m._payload),ve(d,o,m,S)}if(Se(m))return L(d,o,m,S);if(H(m)){if(q=H(m),typeof q!="function")throw Error(g(150));return m=q.call(m),Q(d,o,m,S)}if(typeof m.then=="function")return ve(d,o,ou(m),S);if(m.$$typeof===Te)return ve(d,o,Pn(d,m),S);du(d,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,o!==null&&o.tag===6?(a(d,o.sibling),S=n(o,m),S.return=d,d=S):(a(d,o),S=Ni(m,d.mode,S),S.return=d,d=S),i(d)):a(d,o)}return function(d,o,m,S){try{nn=0;var q=ve(d,o,m,S);return ml=null,q}catch(w){if(w===$l||w===eu)throw w;var I=ot(29,w,null,d.mode);return I.lanes=S,I.return=d,I}finally{}}}var hl=ds(!0),ms=ds(!1),zt=z(null),Rt=null;function ia(e){var t=e.alternate;O(Ye,Ye.current&1),O(zt,e),Rt===null&&(t===null||fl.current!==null||t.memoizedState!==null)&&(Rt=e)}function hs(e){if(e.tag===22){if(O(Ye,Ye.current),O(zt,e),Rt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Rt=e)}}else ca()}function ca(){O(Ye,Ye.current),O(zt,zt.current)}function Vt(e){_(zt),Rt===e&&(Rt=null),_(Ye)}var Ye=z(0);function mu(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Vc(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function ac(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:D({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var lc={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=gt(),n=la(l);n.payload=t,a!=null&&(n.callback=a),t=na(e,n,l),t!==null&&(pt(t,e,l),Fl(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=gt(),n=la(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=na(e,n,l),t!==null&&(pt(t,e,l),Fl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=gt(),l=la(a);l.tag=2,t!=null&&(l.callback=t),t=na(e,l,a),t!==null&&(pt(t,e,a),Fl(t,e,a))}};function gs(e,t,a,l,n,u,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,u,i):t.prototype&&t.prototype.isPureReactComponent?!Ql(a,l)||!Ql(n,u):!0}function ps(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&lc.enqueueReplaceState(t,t.state,null)}function Ha(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=D({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}var hu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function vs(e){hu(e)}function bs(e){console.error(e)}function ys(e){hu(e)}function gu(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function xs(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function nc(e,t,a){return a=la(a),a.tag=3,a.payload={element:null},a.callback=function(){gu(e,t)},a}function Ss(e){return e=la(e),e.tag=3,e}function Ns(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var u=l.value;e.payload=function(){return n(u)},e.callback=function(){xs(t,a,l)}}var i=a.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){xs(t,a,l),typeof n!="function"&&(ma===null?ma=new Set([this]):ma.add(this));var c=l.stack;this.componentDidCatch(l.value,{componentStack:c!==null?c:""})})}function Mm(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&Kl(t,a,n,!0),a=zt.current,a!==null){switch(a.tag){case 13:return Rt===null?Oc():a.alternate===null&&De===0&&(De=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Ui?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),_c(e,l,n)),!1;case 22:return a.flags|=65536,l===Ui?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),_c(e,l,n)),!1}throw Error(g(435,a.tag))}return _c(e,l,n),Oc(),!1}if(fe)return t=zt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Ti&&(e=Error(g(422),{cause:l}),Vl(yt(e,a)))):(l!==Ti&&(t=Error(g(423),{cause:l}),Vl(yt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=yt(l,a),n=nc(e.stateNode,l,n),Ci(e,n),De!==4&&(De=2)),!1;var u=Error(g(520),{cause:l});if(u=yt(u,a),mn===null?mn=[u]:mn.push(u),De!==4&&(De=2),t===null)return!0;l=yt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=nc(a.stateNode,l,e),Ci(a,e),!1;case 1:if(t=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(ma===null||!ma.has(u))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Ss(n),Ns(n,e,a,l),Ci(a,n),!1}a=a.return}while(a!==null);return!1}var zs=Error(g(461)),Ze=!1;function ke(e,t,a,l){t.child=e===null?ms(t,null,a,l):hl(t,e.child,a,l)}function Es(e,t,a,l,n){a=a.render;var u=t.ref;if("ref"in l){var i={};for(var c in l)c!=="ref"&&(i[c]=l[c])}else i=l;return qa(t),l=Qi(e,t,a,i,u,n),c=Xi(),e!==null&&!Ze?(Zi(e,t,n),Kt(e,t,n)):(fe&&c&&Ei(t),t.flags|=1,ke(e,t,l,n),t.child)}function js(e,t,a,l,n){if(e===null){var u=a.type;return typeof u=="function"&&!Si(u)&&u.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=u,Ts(e,t,u,l,n)):(e=kn(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!dc(e,n)){var i=u.memoizedProps;if(a=a.compare,a=a!==null?a:Ql,a(i,l)&&e.ref===t.ref)return Kt(e,t,n)}return t.flags|=1,e=Yt(u,l),e.ref=t.ref,e.return=t,t.child=e}function Ts(e,t,a,l,n){if(e!==null){var u=e.memoizedProps;if(Ql(u,l)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=l=u,dc(e,n))(e.flags&131072)!==0&&(Ze=!0);else return t.lanes=e.lanes,Kt(e,t,n)}return uc(e,t,a,l,n)}function As(e,t,a){var l=t.pendingProps,n=l.children,u=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((t.flags&128)!==0){if(l=u!==null?u.baseLanes|a:a,e!==null){for(n=t.child=e.child,u=0;n!==null;)u=u|n.lanes|n.childLanes,n=n.sibling;t.childLanes=u&~l}else t.childLanes=0,t.child=null;return Os(e,t,l,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&In(t,u!==null?u.cachePool:null),u!==null?Tf(t,u):Bi(),hs(t);else return t.lanes=t.childLanes=536870912,Os(e,t,u!==null?u.baseLanes|a:a,a)}else u!==null?(In(t,u.cachePool),Tf(t,u),ca(),t.memoizedState=null):(e!==null&&In(t,null),Bi(),ca());return ke(e,t,n,a),t.child}function Os(e,t,a,l){var n=Ri();return n=n===null?null:{parent:Be._currentValue,pool:n},t.memoizedState={baseLanes:a,cachePool:n},e!==null&&In(t,null),Bi(),hs(t),e!==null&&Kl(e,t,l,!0),null}function pu(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(g(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function uc(e,t,a,l,n){return qa(t),a=Qi(e,t,a,l,void 0,n),l=Xi(),e!==null&&!Ze?(Zi(e,t,n),Kt(e,t,n)):(fe&&l&&Ei(t),t.flags|=1,ke(e,t,a,n),t.child)}function Ds(e,t,a,l,n,u){return qa(t),t.updateQueue=null,a=Of(t,l,a,n),Af(e),l=Xi(),e!==null&&!Ze?(Zi(e,t,u),Kt(e,t,u)):(fe&&l&&Ei(t),t.flags|=1,ke(e,t,a,u),t.child)}function _s(e,t,a,l,n){if(qa(t),t.stateNode===null){var u=nl,i=a.contextType;typeof i=="object"&&i!==null&&(u=Ie(i)),u=new a(l,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=lc,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=l,u.state=t.memoizedState,u.refs={},qi(t),i=a.contextType,u.context=typeof i=="object"&&i!==null?Ie(i):nl,u.state=t.memoizedState,i=a.getDerivedStateFromProps,typeof i=="function"&&(ac(t,a,i,l),u.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&lc.enqueueReplaceState(u,u.state,null),Il(t,l,u,n),Pl(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){u=t.stateNode;var c=t.memoizedProps,f=Ha(a,c);u.props=f;var h=u.context,y=a.contextType;i=nl,typeof y=="object"&&y!==null&&(i=Ie(y));var N=a.getDerivedStateFromProps;y=typeof N=="function"||typeof u.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,y||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(c||h!==i)&&ps(t,u,l,i),aa=!1;var p=t.memoizedState;u.state=p,Il(t,l,u,n),Pl(),h=t.memoizedState,c||p!==h||aa?(typeof N=="function"&&(ac(t,a,N,l),h=t.memoizedState),(f=aa||gs(t,a,f,l,p,h,i))?(y||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=h),u.props=l,u.state=h,u.context=i,l=f):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{u=t.stateNode,wi(e,t),i=t.memoizedProps,y=Ha(a,i),u.props=y,N=t.pendingProps,p=u.context,h=a.contextType,f=nl,typeof h=="object"&&h!==null&&(f=Ie(h)),c=a.getDerivedStateFromProps,(h=typeof c=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==N||p!==f)&&ps(t,u,l,f),aa=!1,p=t.memoizedState,u.state=p,Il(t,l,u,n),Pl();var v=t.memoizedState;i!==N||p!==v||aa||e!==null&&e.dependencies!==null&&Fn(e.dependencies)?(typeof c=="function"&&(ac(t,a,c,l),v=t.memoizedState),(y=aa||gs(t,a,y,l,p,v,f)||e!==null&&e.dependencies!==null&&Fn(e.dependencies))?(h||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(l,v,f),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(l,v,f)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=v),u.props=l,u.state=v,u.context=f,l=y):(typeof u.componentDidUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),l=!1)}return u=l,pu(e,t),l=(t.flags&128)!==0,u||l?(u=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&l?(t.child=hl(t,e.child,null,n),t.child=hl(t,null,a,n)):ke(e,t,a,n),t.memoizedState=u.state,e=t.child):e=Kt(e,t,n),e}function Ms(e,t,a,l){return Ll(),t.flags|=256,ke(e,t,a,l),t.child}var ic={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cc(e){return{baseLanes:e,cachePool:bf()}}function rc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Et),e}function Rs(e,t,a){var l=t.pendingProps,n=!1,u=(t.flags&128)!==0,i;if((i=u)||(i=e!==null&&e.memoizedState===null?!1:(Ye.current&2)!==0),i&&(n=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,e===null){if(fe){if(n?ia(t):ca(),fe){var c=Oe,f;if(f=c){e:{for(f=c,c=Mt;f.nodeType!==8;){if(!c){c=null;break e}if(f=Ot(f.nextSibling),f===null){c=null;break e}}c=f}c!==null?(t.memoizedState={dehydrated:c,treeContext:Da!==null?{id:Gt,overflow:Qt}:null,retryLane:536870912,hydrationErrors:null},f=ot(18,null,null,0),f.stateNode=c,f.return=t,t.child=f,tt=t,Oe=null,f=!0):f=!1}f||Ra(t)}if(c=t.memoizedState,c!==null&&(c=c.dehydrated,c!==null))return Vc(c)?t.lanes=32:t.lanes=536870912,null;Vt(t)}return c=l.children,l=l.fallback,n?(ca(),n=t.mode,c=vu({mode:"hidden",children:c},n),l=Oa(l,n,a,null),c.return=t,l.return=t,c.sibling=l,t.child=c,n=t.child,n.memoizedState=cc(a),n.childLanes=rc(e,i,a),t.memoizedState=ic,l):(ia(t),fc(t,c))}if(f=e.memoizedState,f!==null&&(c=f.dehydrated,c!==null)){if(u)t.flags&256?(ia(t),t.flags&=-257,t=sc(e,t,a)):t.memoizedState!==null?(ca(),t.child=e.child,t.flags|=128,t=null):(ca(),n=l.fallback,c=t.mode,l=vu({mode:"visible",children:l.children},c),n=Oa(n,c,a,null),n.flags|=2,l.return=t,n.return=t,l.sibling=n,t.child=l,hl(t,e.child,null,a),l=t.child,l.memoizedState=cc(a),l.childLanes=rc(e,i,a),t.memoizedState=ic,t=n);else if(ia(t),Vc(c)){if(i=c.nextSibling&&c.nextSibling.dataset,i)var h=i.dgst;i=h,l=Error(g(419)),l.stack="",l.digest=i,Vl({value:l,source:null,stack:null}),t=sc(e,t,a)}else if(Ze||Kl(e,t,a,!1),i=(a&e.childLanes)!==0,Ze||i){if(i=xe,i!==null&&(l=a&-a,l=(l&42)!==0?1:Ku(l),l=(l&(i.suspendedLanes|a))!==0?0:l,l!==0&&l!==f.retryLane))throw f.retryLane=l,ll(e,l),pt(i,e,l),zs;c.data==="$?"||Oc(),t=sc(e,t,a)}else c.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=f.treeContext,Oe=Ot(c.nextSibling),tt=t,fe=!0,Ma=null,Mt=!1,e!==null&&(St[Nt++]=Gt,St[Nt++]=Qt,St[Nt++]=Da,Gt=e.id,Qt=e.overflow,Da=t),t=fc(t,l.children),t.flags|=4096);return t}return n?(ca(),n=l.fallback,c=t.mode,f=e.child,h=f.sibling,l=Yt(f,{mode:"hidden",children:l.children}),l.subtreeFlags=f.subtreeFlags&65011712,h!==null?n=Yt(h,n):(n=Oa(n,c,a,null),n.flags|=2),n.return=t,l.return=t,l.sibling=n,t.child=l,l=n,n=t.child,c=e.child.memoizedState,c===null?c=cc(a):(f=c.cachePool,f!==null?(h=Be._currentValue,f=f.parent!==h?{parent:h,pool:h}:f):f=bf(),c={baseLanes:c.baseLanes|a,cachePool:f}),n.memoizedState=c,n.childLanes=rc(e,i,a),t.memoizedState=ic,l):(ia(t),a=e.child,e=a.sibling,a=Yt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=a,t.memoizedState=null,a)}function fc(e,t){return t=vu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function vu(e,t){return e=ot(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function sc(e,t,a){return hl(t,e.child,null,a),e=fc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Us(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Oi(e.return,t,a)}function oc(e,t,a,l,n){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=a,u.tailMode=n)}function qs(e,t,a){var l=t.pendingProps,n=l.revealOrder,u=l.tail;if(ke(e,t,l.children,a),l=Ye.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Us(e,a,t);else if(e.tag===19)Us(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(O(Ye,l),n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&mu(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),oc(t,!1,n,a,u);break;case"backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&mu(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}oc(t,!0,a,null,u);break;case"together":oc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Kt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),da|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Kl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(g(153));if(t.child!==null){for(e=t.child,a=Yt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Yt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function dc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Fn(e)))}function Rm(e,t,a){switch(t.tag){case 3:be(t,t.stateNode.containerInfo),ta(t,Be,e.memoizedState.cache),Ll();break;case 27:case 5:Ol(t);break;case 4:be(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ia(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Rs(e,t,a):(ia(t),e=Kt(e,t,a),e!==null?e.sibling:null);ia(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(Kl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return qs(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),O(Ye,Ye.current),l)break;return null;case 22:case 23:return t.lanes=0,As(e,t,a);case 24:ta(t,Be,e.memoizedState.cache)}return Kt(e,t,a)}function ws(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ze=!0;else{if(!dc(e,a)&&(t.flags&128)===0)return Ze=!1,Rm(e,t,a);Ze=(e.flags&131072)!==0}else Ze=!1,fe&&(t.flags&1048576)!==0&&of(t,Wn,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var l=t.elementType,n=l._init;if(l=n(l._payload),t.type=l,typeof l=="function")Si(l)?(e=Ha(l,e),t.tag=1,t=_s(null,t,l,e,a)):(t.tag=0,t=uc(null,t,l,e,a));else{if(l!=null){if(n=l.$$typeof,n===Ae){t.tag=11,t=Es(null,t,l,e,a);break e}else if(n===Me){t.tag=14,t=js(null,t,l,e,a);break e}}throw t=ce(l)||l,Error(g(306,t,""))}}return t;case 0:return uc(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Ha(l,t.pendingProps),_s(e,t,l,n,a);case 3:e:{if(be(t,t.stateNode.containerInfo),e===null)throw Error(g(387));l=t.pendingProps;var u=t.memoizedState;n=u.element,wi(e,t),Il(t,l,null,a);var i=t.memoizedState;if(l=i.cache,ta(t,Be,l),l!==u.cache&&Di(t,[Be],a,!0),Pl(),l=i.element,u.isDehydrated)if(u={element:l,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=Ms(e,t,l,a);break e}else if(l!==n){n=yt(Error(g(424)),t),Vl(n),t=Ms(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Oe=Ot(e.firstChild),tt=t,fe=!0,Ma=null,Mt=!0,a=ms(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ll(),l===n){t=Kt(e,t,a);break e}ke(e,t,l,a)}t=t.child}return t;case 26:return pu(e,t),e===null?(a=Go(t.type,null,t.pendingProps,null))?t.memoizedState=a:fe||(a=t.type,e=t.pendingProps,l=Mu(V.current).createElement(a),l[Pe]=t,l[lt]=e,We(l,a,e),Xe(l),t.stateNode=l):t.memoizedState=Go(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ol(t),e===null&&fe&&(l=t.stateNode=Ho(t.type,t.pendingProps,V.current),tt=t,Mt=!0,n=Oe,pa(t.type)?(Kc=n,Oe=Ot(l.firstChild)):Oe=n),ke(e,t,t.pendingProps.children,a),pu(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&fe&&((n=l=Oe)&&(l=i0(l,t.type,t.pendingProps,Mt),l!==null?(t.stateNode=l,tt=t,Oe=Ot(l.firstChild),Mt=!1,n=!0):n=!1),n||Ra(t)),Ol(t),n=t.type,u=t.pendingProps,i=e!==null?e.memoizedProps:null,l=u.children,Xc(n,u)?l=null:i!==null&&Xc(n,i)&&(t.flags|=32),t.memoizedState!==null&&(n=Qi(e,t,Em,null,null,a),Nn._currentValue=n),pu(e,t),ke(e,t,l,a),t.child;case 6:return e===null&&fe&&((e=a=Oe)&&(a=c0(a,t.pendingProps,Mt),a!==null?(t.stateNode=a,tt=t,Oe=null,e=!0):e=!1),e||Ra(t)),null;case 13:return Rs(e,t,a);case 4:return be(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=hl(t,null,l,a):ke(e,t,l,a),t.child;case 11:return Es(e,t,t.type,t.pendingProps,a);case 7:return ke(e,t,t.pendingProps,a),t.child;case 8:return ke(e,t,t.pendingProps.children,a),t.child;case 12:return ke(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ta(t,t.type,l.value),ke(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,qa(t),n=Ie(n),l=l(n),t.flags|=1,ke(e,t,l,a),t.child;case 14:return js(e,t,t.type,t.pendingProps,a);case 15:return Ts(e,t,t.type,t.pendingProps,a);case 19:return qs(e,t,a);case 31:return l=t.pendingProps,a=t.mode,l={mode:l.mode,children:l.children},e===null?(a=vu(l,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=Yt(e.child,l),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return As(e,t,a);case 24:return qa(t),l=Ie(Be),e===null?(n=Ri(),n===null&&(n=xe,u=_i(),n.pooledCache=u,u.refCount++,u!==null&&(n.pooledCacheLanes|=a),n=u),t.memoizedState={parent:l,cache:n},qi(t),ta(t,Be,n)):((e.lanes&a)!==0&&(wi(e,t),Il(t,null,null,a),Pl()),n=e.memoizedState,u=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ta(t,Be,l)):(l=u.cache,ta(t,Be,l),l!==n.cache&&Di(t,[Be],a,!0))),ke(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(g(156,t.tag))}function Jt(e){e.flags|=4}function Cs(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Vo(t)){if(t=zt.current,t!==null&&((ue&4194048)===ue?Rt!==null:(ue&62914560)!==ue&&(ue&536870912)===0||t!==Rt))throw Wl=Ui,yf;e.flags|=8192}}function bu(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?mr():536870912,e.lanes|=t,bl|=t)}function cn(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Um(e,t,a){var l=t.pendingProps;switch(ji(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Ee(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Zt(Be),_t(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Zl(t)?Jt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,hf())),Ee(t),null;case 26:return a=t.memoizedState,e===null?(Jt(t),a!==null?(Ee(t),Cs(t,a)):(Ee(t),t.flags&=-16777217)):a?a!==e.memoizedState?(Jt(t),Ee(t),Cs(t,a)):(Ee(t),t.flags&=-16777217):(e.memoizedProps!==l&&Jt(t),Ee(t),t.flags&=-16777217),null;case 27:Na(t),a=V.current;var n=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Jt(t);else{if(!l){if(t.stateNode===null)throw Error(g(166));return Ee(t),null}e=Y.current,Zl(t)?df(t):(e=Ho(n,l,a),t.stateNode=e,Jt(t))}return Ee(t),null;case 5:if(Na(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Jt(t);else{if(!l){if(t.stateNode===null)throw Error(g(166));return Ee(t),null}if(e=Y.current,Zl(t))df(t);else{switch(n=Mu(V.current),e){case 1:e=n.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=n.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?n.createElement("select",{is:l.is}):n.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?n.createElement(a,{is:l.is}):n.createElement(a)}}e[Pe]=t,e[lt]=l;e:for(n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}t.stateNode=e;e:switch(We(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Jt(t)}}return Ee(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Jt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(g(166));if(e=V.current,Zl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=tt,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Pe]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||_o(e.nodeValue,a)),e||Ra(t)}else e=Mu(e).createTextNode(l),e[Pe]=t,t.stateNode=e}return Ee(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Zl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(g(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(g(317));n[Pe]=t}else Ll(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ee(t),n=!1}else n=hf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Vt(t),t):(Vt(t),null)}if(Vt(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool);var u=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(u=l.memoizedState.cachePool.pool),u!==n&&(l.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),bu(t,t.updateQueue),Ee(t),null;case 4:return _t(),e===null&&Hc(t.stateNode.containerInfo),Ee(t),null;case 10:return Zt(t.type),Ee(t),null;case 19:if(_(Ye),n=t.memoizedState,n===null)return Ee(t),null;if(l=(t.flags&128)!==0,u=n.rendering,u===null)if(l)cn(n,!1);else{if(De!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=mu(e),u!==null){for(t.flags|=128,cn(n,!1),e=u.updateQueue,t.updateQueue=e,bu(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)sf(a,e),a=a.sibling;return O(Ye,Ye.current&1|2),t.child}e=e.sibling}n.tail!==null&&we()>Su&&(t.flags|=128,l=!0,cn(n,!1),t.lanes=4194304)}else{if(!l)if(e=mu(u),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,bu(t,e),cn(n,!0),n.tail===null&&n.tailMode==="hidden"&&!u.alternate&&!fe)return Ee(t),null}else 2*we()-n.renderingStartTime>Su&&a!==536870912&&(t.flags|=128,l=!0,cn(n,!1),t.lanes=4194304);n.isBackwards?(u.sibling=t.child,t.child=u):(e=n.last,e!==null?e.sibling=u:t.child=u,n.last=u)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=we(),t.sibling=null,e=Ye.current,O(Ye,l?e&1|2:e&1),t):(Ee(t),null);case 22:case 23:return Vt(t),Yi(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),a=t.updateQueue,a!==null&&bu(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&_(wa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Zt(Be),Ee(t),null;case 25:return null;case 30:return null}throw Error(g(156,t.tag))}function qm(e,t){switch(ji(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zt(Be),_t(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Na(t),null;case 13:if(Vt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(g(340));Ll()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _(Ye),null;case 4:return _t(),null;case 10:return Zt(t.type),null;case 22:case 23:return Vt(t),Yi(),e!==null&&_(wa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Zt(Be),null;case 25:return null;default:return null}}function Hs(e,t){switch(ji(t),t.tag){case 3:Zt(Be),_t();break;case 26:case 27:case 5:Na(t);break;case 4:_t();break;case 13:Vt(t);break;case 19:_(Ye);break;case 10:Zt(t.type);break;case 22:case 23:Vt(t),Yi(),e!==null&&_(wa);break;case 24:Zt(Be)}}function rn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var u=a.create,i=a.inst;l=u(),i.destroy=l}a=a.next}while(a!==n)}}catch(c){ye(t,t.return,c)}}function ra(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var u=n.next;l=u;do{if((l.tag&e)===e){var i=l.inst,c=i.destroy;if(c!==void 0){i.destroy=void 0,n=t;var f=a,h=c;try{h()}catch(y){ye(n,f,y)}}}l=l.next}while(l!==u)}}catch(y){ye(t,t.return,y)}}function Bs(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{jf(t,a)}catch(l){ye(e,e.return,l)}}}function Ys(e,t,a){a.props=Ha(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ye(e,t,l)}}function fn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){ye(e,t,n)}}function Ut(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){ye(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ye(e,t,n)}else a.current=null}function Gs(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){ye(e,e.return,n)}}function mc(e,t,a){try{var l=e.stateNode;t0(l,e.type,a,t),l[lt]=t}catch(n){ye(e,e.return,n)}}function Qs(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&pa(e.type)||e.tag===4}function hc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&pa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gc(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=_u));else if(l!==4&&(l===27&&pa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(gc(e,t,a),e=e.sibling;e!==null;)gc(e,t,a),e=e.sibling}function yu(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&pa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(yu(e,t,a),e=e.sibling;e!==null;)yu(e,t,a),e=e.sibling}function Xs(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);We(t,l,a),t[Pe]=e,t[lt]=a}catch(u){ye(e,e.return,u)}}var kt=!1,qe=!1,pc=!1,Zs=typeof WeakSet=="function"?WeakSet:Set,Le=null;function wm(e,t){if(e=e.containerInfo,Gc=Hu,e=Ir(e),hi(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,u=l.focusNode;l=l.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break e}var i=0,c=-1,f=-1,h=0,y=0,N=e,p=null;t:for(;;){for(var v;N!==a||n!==0&&N.nodeType!==3||(c=i+n),N!==u||l!==0&&N.nodeType!==3||(f=i+l),N.nodeType===3&&(i+=N.nodeValue.length),(v=N.firstChild)!==null;)p=N,N=v;for(;;){if(N===e)break t;if(p===a&&++h===n&&(c=i),p===u&&++y===l&&(f=i),(v=N.nextSibling)!==null)break;N=p,p=N.parentNode}N=v}a=c===-1||f===-1?null:{start:c,end:f}}else a=null}a=a||{start:0,end:0}}else a=null;for(Qc={focusedElem:e,selectionRange:a},Hu=!1,Le=t;Le!==null;)if(t=Le,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Le=e;else for(;Le!==null;){switch(t=Le,u=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,a=t,n=u.memoizedProps,u=u.memoizedState,l=a.stateNode;try{var L=Ha(a.type,n,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(L,u),l.__reactInternalSnapshotBeforeUpdate=e}catch(Q){ye(a,a.return,Q)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Lc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Lc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(g(163))}if(e=t.sibling,e!==null){e.return=t.return,Le=e;break}Le=t.return}}function Ls(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:fa(e,a),l&4&&rn(5,a);break;case 1:if(fa(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(i){ye(a,a.return,i)}else{var n=Ha(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(i){ye(a,a.return,i)}}l&64&&Bs(a),l&512&&fn(a,a.return);break;case 3:if(fa(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{jf(e,t)}catch(i){ye(a,a.return,i)}}break;case 27:t===null&&l&4&&Xs(a);case 26:case 5:fa(e,a),t===null&&l&4&&Gs(a),l&512&&fn(a,a.return);break;case 12:fa(e,a);break;case 13:fa(e,a),l&4&&Js(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Lm.bind(null,a),r0(e,a))));break;case 22:if(l=a.memoizedState!==null||kt,!l){t=t!==null&&t.memoizedState!==null||qe,n=kt;var u=qe;kt=l,(qe=t)&&!u?sa(e,a,(a.subtreeFlags&8772)!==0):fa(e,a),kt=n,qe=u}break;case 30:break;default:fa(e,a)}}function Vs(e){var t=e.alternate;t!==null&&(e.alternate=null,Vs(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&$u(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ne=null,it=!1;function $t(e,t,a){for(a=a.child;a!==null;)Ks(e,t,a),a=a.sibling}function Ks(e,t,a){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(Dl,a)}catch{}switch(a.tag){case 26:qe||Ut(a,t),$t(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:qe||Ut(a,t);var l=Ne,n=it;pa(a.type)&&(Ne=a.stateNode,it=!1),$t(e,t,a),bn(a.stateNode),Ne=l,it=n;break;case 5:qe||Ut(a,t);case 6:if(l=Ne,n=it,Ne=null,$t(e,t,a),Ne=l,it=n,Ne!==null)if(it)try{(Ne.nodeType===9?Ne.body:Ne.nodeName==="HTML"?Ne.ownerDocument.body:Ne).removeChild(a.stateNode)}catch(u){ye(a,t,u)}else try{Ne.removeChild(a.stateNode)}catch(u){ye(a,t,u)}break;case 18:Ne!==null&&(it?(e=Ne,wo(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Tn(e)):wo(Ne,a.stateNode));break;case 4:l=Ne,n=it,Ne=a.stateNode.containerInfo,it=!0,$t(e,t,a),Ne=l,it=n;break;case 0:case 11:case 14:case 15:qe||ra(2,a,t),qe||ra(4,a,t),$t(e,t,a);break;case 1:qe||(Ut(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Ys(a,t,l)),$t(e,t,a);break;case 21:$t(e,t,a);break;case 22:qe=(l=qe)||a.memoizedState!==null,$t(e,t,a),qe=l;break;default:$t(e,t,a)}}function Js(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Tn(e)}catch(a){ye(t,t.return,a)}}function Cm(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Zs),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Zs),t;default:throw Error(g(435,e.tag))}}function vc(e,t){var a=Cm(e);t.forEach(function(l){var n=Vm.bind(null,e,l);a.has(l)||(a.add(l),l.then(n,n))})}function dt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],u=e,i=t,c=i;e:for(;c!==null;){switch(c.tag){case 27:if(pa(c.type)){Ne=c.stateNode,it=!1;break e}break;case 5:Ne=c.stateNode,it=!1;break e;case 3:case 4:Ne=c.stateNode.containerInfo,it=!0;break e}c=c.return}if(Ne===null)throw Error(g(160));Ks(u,i,n),Ne=null,it=!1,u=n.alternate,u!==null&&(u.return=null),n.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)ks(t,e),t=t.sibling}var At=null;function ks(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:dt(t,e),mt(e),l&4&&(ra(3,e,e.return),rn(3,e),ra(5,e,e.return));break;case 1:dt(t,e),mt(e),l&512&&(qe||a===null||Ut(a,a.return)),l&64&&kt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=At;if(dt(t,e),mt(e),l&512&&(qe||a===null||Ut(a,a.return)),l&4){var u=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":u=n.getElementsByTagName("title")[0],(!u||u[Rl]||u[Pe]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=n.createElement(l),n.head.insertBefore(u,n.querySelector("head > title"))),We(u,l,a),u[Pe]=e,Xe(u),l=u;break e;case"link":var i=Zo("link","href",n).get(l+(a.href||""));if(i){for(var c=0;c<i.length;c++)if(u=i[c],u.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&u.getAttribute("rel")===(a.rel==null?null:a.rel)&&u.getAttribute("title")===(a.title==null?null:a.title)&&u.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){i.splice(c,1);break t}}u=n.createElement(l),We(u,l,a),n.head.appendChild(u);break;case"meta":if(i=Zo("meta","content",n).get(l+(a.content||""))){for(c=0;c<i.length;c++)if(u=i[c],u.getAttribute("content")===(a.content==null?null:""+a.content)&&u.getAttribute("name")===(a.name==null?null:a.name)&&u.getAttribute("property")===(a.property==null?null:a.property)&&u.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&u.getAttribute("charset")===(a.charSet==null?null:a.charSet)){i.splice(c,1);break t}}u=n.createElement(l),We(u,l,a),n.head.appendChild(u);break;default:throw Error(g(468,l))}u[Pe]=e,Xe(u),l=u}e.stateNode=l}else Lo(n,e.type,e.stateNode);else e.stateNode=Xo(n,l,e.memoizedProps);else u!==l?(u===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):u.count--,l===null?Lo(n,e.type,e.stateNode):Xo(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&mc(e,e.memoizedProps,a.memoizedProps)}break;case 27:dt(t,e),mt(e),l&512&&(qe||a===null||Ut(a,a.return)),a!==null&&l&4&&mc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(dt(t,e),mt(e),l&512&&(qe||a===null||Ut(a,a.return)),e.flags&32){n=e.stateNode;try{Wa(n,"")}catch(v){ye(e,e.return,v)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,mc(e,n,a!==null?a.memoizedProps:n)),l&1024&&(pc=!0);break;case 6:if(dt(t,e),mt(e),l&4){if(e.stateNode===null)throw Error(g(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(v){ye(e,e.return,v)}}break;case 3:if(qu=null,n=At,At=Ru(t.containerInfo),dt(t,e),At=n,mt(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Tn(t.containerInfo)}catch(v){ye(e,e.return,v)}pc&&(pc=!1,$s(e));break;case 4:l=At,At=Ru(e.stateNode.containerInfo),dt(t,e),mt(e),At=l;break;case 12:dt(t,e),mt(e);break;case 13:dt(t,e),mt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(zc=we()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,vc(e,l)));break;case 22:n=e.memoizedState!==null;var f=a!==null&&a.memoizedState!==null,h=kt,y=qe;if(kt=h||n,qe=y||f,dt(t,e),qe=y,kt=h,mt(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||f||kt||qe||Ba(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){f=a=t;try{if(u=f.stateNode,n)i=u.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{c=f.stateNode;var N=f.memoizedProps.style,p=N!=null&&N.hasOwnProperty("display")?N.display:null;c.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(v){ye(f,f.return,v)}}}else if(t.tag===6){if(a===null){f=t;try{f.stateNode.nodeValue=n?"":f.memoizedProps}catch(v){ye(f,f.return,v)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,vc(e,a))));break;case 19:dt(t,e),mt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,vc(e,l)));break;case 30:break;case 21:break;default:dt(t,e),mt(e)}}function mt(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Qs(l)){a=l;break}l=l.return}if(a==null)throw Error(g(160));switch(a.tag){case 27:var n=a.stateNode,u=hc(e);yu(e,u,n);break;case 5:var i=a.stateNode;a.flags&32&&(Wa(i,""),a.flags&=-33);var c=hc(e);yu(e,c,i);break;case 3:case 4:var f=a.stateNode.containerInfo,h=hc(e);gc(e,h,f);break;default:throw Error(g(161))}}catch(y){ye(e,e.return,y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $s(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;$s(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function fa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Ls(e,t.alternate,t),t=t.sibling}function Ba(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ra(4,t,t.return),Ba(t);break;case 1:Ut(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Ys(t,t.return,a),Ba(t);break;case 27:bn(t.stateNode);case 26:case 5:Ut(t,t.return),Ba(t);break;case 22:t.memoizedState===null&&Ba(t);break;case 30:Ba(t);break;default:Ba(t)}e=e.sibling}}function sa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,u=t,i=u.flags;switch(u.tag){case 0:case 11:case 15:sa(n,u,a),rn(4,u);break;case 1:if(sa(n,u,a),l=u,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(h){ye(l,l.return,h)}if(l=u,n=l.updateQueue,n!==null){var c=l.stateNode;try{var f=n.shared.hiddenCallbacks;if(f!==null)for(n.shared.hiddenCallbacks=null,n=0;n<f.length;n++)Ef(f[n],c)}catch(h){ye(l,l.return,h)}}a&&i&64&&Bs(u),fn(u,u.return);break;case 27:Xs(u);case 26:case 5:sa(n,u,a),a&&l===null&&i&4&&Gs(u),fn(u,u.return);break;case 12:sa(n,u,a);break;case 13:sa(n,u,a),a&&i&4&&Js(n,u);break;case 22:u.memoizedState===null&&sa(n,u,a),fn(u,u.return);break;case 30:break;default:sa(n,u,a)}t=t.sibling}}function bc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Jl(a))}function yc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jl(e))}function qt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ws(e,t,a,l),t=t.sibling}function Ws(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:qt(e,t,a,l),n&2048&&rn(9,t);break;case 1:qt(e,t,a,l);break;case 3:qt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jl(e)));break;case 12:if(n&2048){qt(e,t,a,l),e=t.stateNode;try{var u=t.memoizedProps,i=u.id,c=u.onPostCommit;typeof c=="function"&&c(i,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(f){ye(t,t.return,f)}}else qt(e,t,a,l);break;case 13:qt(e,t,a,l);break;case 23:break;case 22:u=t.stateNode,i=t.alternate,t.memoizedState!==null?u._visibility&2?qt(e,t,a,l):sn(e,t):u._visibility&2?qt(e,t,a,l):(u._visibility|=2,gl(e,t,a,l,(t.subtreeFlags&10256)!==0)),n&2048&&bc(i,t);break;case 24:qt(e,t,a,l),n&2048&&yc(t.alternate,t);break;default:qt(e,t,a,l)}}function gl(e,t,a,l,n){for(n=n&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var u=e,i=t,c=a,f=l,h=i.flags;switch(i.tag){case 0:case 11:case 15:gl(u,i,c,f,n),rn(8,i);break;case 23:break;case 22:var y=i.stateNode;i.memoizedState!==null?y._visibility&2?gl(u,i,c,f,n):sn(u,i):(y._visibility|=2,gl(u,i,c,f,n)),n&&h&2048&&bc(i.alternate,i);break;case 24:gl(u,i,c,f,n),n&&h&2048&&yc(i.alternate,i);break;default:gl(u,i,c,f,n)}t=t.sibling}}function sn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:sn(a,l),n&2048&&bc(l.alternate,l);break;case 24:sn(a,l),n&2048&&yc(l.alternate,l);break;default:sn(a,l)}t=t.sibling}}var on=8192;function pl(e){if(e.subtreeFlags&on)for(e=e.child;e!==null;)Fs(e),e=e.sibling}function Fs(e){switch(e.tag){case 26:pl(e),e.flags&on&&e.memoizedState!==null&&S0(At,e.memoizedState,e.memoizedProps);break;case 5:pl(e);break;case 3:case 4:var t=At;At=Ru(e.stateNode.containerInfo),pl(e),At=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=on,on=16777216,pl(e),on=t):pl(e));break;default:pl(e)}}function Ps(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function dn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Le=l,eo(l,e)}Ps(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Is(e),e=e.sibling}function Is(e){switch(e.tag){case 0:case 11:case 15:dn(e),e.flags&2048&&ra(9,e,e.return);break;case 3:dn(e);break;case 12:dn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,xu(e)):dn(e);break;default:dn(e)}}function xu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Le=l,eo(l,e)}Ps(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ra(8,t,t.return),xu(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,xu(t));break;default:xu(t)}e=e.sibling}}function eo(e,t){for(;Le!==null;){var a=Le;switch(a.tag){case 0:case 11:case 15:ra(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Jl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Le=l;else e:for(a=e;Le!==null;){l=Le;var n=l.sibling,u=l.return;if(Vs(l),l===a){Le=null;break e}if(n!==null){n.return=u,Le=n;break e}Le=u}}}var Hm={getCacheForType:function(e){var t=Ie(Be),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},Bm=typeof WeakMap=="function"?WeakMap:Map,de=0,xe=null,ee=null,ue=0,me=0,ht=null,oa=!1,vl=!1,xc=!1,Wt=0,De=0,da=0,Ya=0,Sc=0,Et=0,bl=0,mn=null,ct=null,Nc=!1,zc=0,Su=1/0,Nu=null,ma=null,$e=0,ha=null,yl=null,xl=0,Ec=0,jc=null,to=null,hn=0,Tc=null;function gt(){if((de&2)!==0&&ue!==0)return ue&-ue;if(b.T!==null){var e=cl;return e!==0?e:Uc()}return pr()}function ao(){Et===0&&(Et=(ue&536870912)===0||fe?dr():536870912);var e=zt.current;return e!==null&&(e.flags|=32),Et}function pt(e,t,a){(e===xe&&(me===2||me===9)||e.cancelPendingCommit!==null)&&(Sl(e,0),ga(e,ue,Et,!1)),Ml(e,a),((de&2)===0||e!==xe)&&(e===xe&&((de&2)===0&&(Ya|=a),De===4&&ga(e,ue,Et,!1)),wt(e))}function lo(e,t,a){if((de&6)!==0)throw Error(g(327));var l=!a&&(t&124)===0&&(t&e.expiredLanes)===0||_l(e,t),n=l?Qm(e,t):Dc(e,t,!0),u=l;do{if(n===0){vl&&!l&&ga(e,t,0,!1);break}else{if(a=e.current.alternate,u&&!Ym(a)){n=Dc(e,t,!1),u=!1;continue}if(n===2){if(u=t,e.errorRecoveryDisabledLanes&u)var i=0;else i=e.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;e:{var c=e;n=mn;var f=c.current.memoizedState.isDehydrated;if(f&&(Sl(c,i).flags|=256),i=Dc(c,i,!1),i!==2){if(xc&&!f){c.errorRecoveryDisabledLanes|=u,Ya|=u,n=4;break e}u=ct,ct=n,u!==null&&(ct===null?ct=u:ct.push.apply(ct,u))}n=i}if(u=!1,n!==2)continue}}if(n===1){Sl(e,0),ga(e,t,0,!0);break}e:{switch(l=e,u=n,u){case 0:case 1:throw Error(g(345));case 4:if((t&4194048)!==t)break;case 6:ga(l,t,Et,!oa);break e;case 2:ct=null;break;case 3:case 5:break;default:throw Error(g(329))}if((t&62914560)===t&&(n=zc+300-we(),10<n)){if(ga(l,t,Et,!oa),Un(l,0,!0)!==0)break e;l.timeoutHandle=Uo(no.bind(null,l,a,ct,Nu,Nc,t,Et,Ya,bl,oa,u,2,-0,0),n);break e}no(l,a,ct,Nu,Nc,t,Et,Ya,bl,oa,u,0,-0,0)}}break}while(!0);wt(e)}function no(e,t,a,l,n,u,i,c,f,h,y,N,p,v){if(e.timeoutHandle=-1,N=t.subtreeFlags,(N&8192||(N&16785408)===16785408)&&(Sn={stylesheets:null,count:0,unsuspend:x0},Fs(t),N=N0(),N!==null)){e.cancelPendingCommit=N(oo.bind(null,e,t,u,a,l,n,i,c,f,y,1,p,v)),ga(e,u,i,!h);return}oo(e,t,u,a,l,n,i,c,f)}function Ym(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],u=n.getSnapshot;n=n.value;try{if(!st(u(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ga(e,t,a,l){t&=~Sc,t&=~Ya,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var u=31-ft(n),i=1<<u;l[u]=-1,n&=~i}a!==0&&hr(e,a,t)}function zu(){return(de&6)===0?(gn(0),!1):!0}function Ac(){if(ee!==null){if(me===0)var e=ee.return;else e=ee,Xt=Ua=null,Li(e),ml=null,nn=0,e=ee;for(;e!==null;)Hs(e.alternate,e),e=e.return;ee=null}}function Sl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,l0(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ac(),xe=e,ee=a=Yt(e.current,null),ue=t,me=0,ht=null,oa=!1,vl=_l(e,t),xc=!1,bl=Et=Sc=Ya=da=De=0,ct=mn=null,Nc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-ft(l),u=1<<n;t|=e[n],l&=~u}return Wt=t,Vn(),a}function uo(e,t){P=null,b.H=su,t===$l||t===eu?(t=Nf(),me=3):t===yf?(t=Nf(),me=4):me=t===zs?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ht=t,ee===null&&(De=1,gu(e,yt(t,e.current)))}function io(){var e=b.H;return b.H=su,e===null?su:e}function co(){var e=b.A;return b.A=Hm,e}function Oc(){De=4,oa||(ue&4194048)!==ue&&zt.current!==null||(vl=!0),(da&134217727)===0&&(Ya&134217727)===0||xe===null||ga(xe,ue,Et,!1)}function Dc(e,t,a){var l=de;de|=2;var n=io(),u=co();(xe!==e||ue!==t)&&(Nu=null,Sl(e,t)),t=!1;var i=De;e:do try{if(me!==0&&ee!==null){var c=ee,f=ht;switch(me){case 8:Ac(),i=6;break e;case 3:case 2:case 9:case 6:zt.current===null&&(t=!0);var h=me;if(me=0,ht=null,Nl(e,c,f,h),a&&vl){i=0;break e}break;default:h=me,me=0,ht=null,Nl(e,c,f,h)}}Gm(),i=De;break}catch(y){uo(e,y)}while(!0);return t&&e.shellSuspendCounter++,Xt=Ua=null,de=l,b.H=n,b.A=u,ee===null&&(xe=null,ue=0,Vn()),i}function Gm(){for(;ee!==null;)ro(ee)}function Qm(e,t){var a=de;de|=2;var l=io(),n=co();xe!==e||ue!==t?(Nu=null,Su=we()+500,Sl(e,t)):vl=_l(e,t);e:do try{if(me!==0&&ee!==null){t=ee;var u=ht;t:switch(me){case 1:me=0,ht=null,Nl(e,t,u,1);break;case 2:case 9:if(xf(u)){me=0,ht=null,fo(t);break}t=function(){me!==2&&me!==9||xe!==e||(me=7),wt(e)},u.then(t,t);break e;case 3:me=7;break e;case 4:me=5;break e;case 7:xf(u)?(me=0,ht=null,fo(t)):(me=0,ht=null,Nl(e,t,u,7));break;case 5:var i=null;switch(ee.tag){case 26:i=ee.memoizedState;case 5:case 27:var c=ee;if(!i||Vo(i)){me=0,ht=null;var f=c.sibling;if(f!==null)ee=f;else{var h=c.return;h!==null?(ee=h,Eu(h)):ee=null}break t}}me=0,ht=null,Nl(e,t,u,5);break;case 6:me=0,ht=null,Nl(e,t,u,6);break;case 8:Ac(),De=6;break e;default:throw Error(g(462))}}Xm();break}catch(y){uo(e,y)}while(!0);return Xt=Ua=null,b.H=l,b.A=n,de=a,ee!==null?0:(xe=null,ue=0,Vn(),De)}function Xm(){for(;ee!==null&&!ae();)ro(ee)}function ro(e){var t=ws(e.alternate,e,Wt);e.memoizedProps=e.pendingProps,t===null?Eu(e):ee=t}function fo(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Ds(a,t,t.pendingProps,t.type,void 0,ue);break;case 11:t=Ds(a,t,t.pendingProps,t.type.render,t.ref,ue);break;case 5:Li(t);default:Hs(a,t),t=ee=sf(t,Wt),t=ws(a,t,Wt)}e.memoizedProps=e.pendingProps,t===null?Eu(e):ee=t}function Nl(e,t,a,l){Xt=Ua=null,Li(t),ml=null,nn=0;var n=t.return;try{if(Mm(e,n,t,a,ue)){De=1,gu(e,yt(a,e.current)),ee=null;return}}catch(u){if(n!==null)throw ee=n,u;De=1,gu(e,yt(a,e.current)),ee=null;return}t.flags&32768?(fe||l===1?e=!0:vl||(ue&536870912)!==0?e=!1:(oa=e=!0,(l===2||l===9||l===3||l===6)&&(l=zt.current,l!==null&&l.tag===13&&(l.flags|=16384))),so(t,e)):Eu(t)}function Eu(e){var t=e;do{if((t.flags&32768)!==0){so(t,oa);return}e=t.return;var a=Um(t.alternate,t,Wt);if(a!==null){ee=a;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);De===0&&(De=5)}function so(e,t){do{var a=qm(e.alternate,e);if(a!==null){a.flags&=32767,ee=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ee=e;return}ee=e=a}while(e!==null);De=6,ee=null}function oo(e,t,a,l,n,u,i,c,f){e.cancelPendingCommit=null;do ju();while($e!==0);if((de&6)!==0)throw Error(g(327));if(t!==null){if(t===e.current)throw Error(g(177));if(u=t.lanes|t.childLanes,u|=yi,xd(e,a,u,i,c,f),e===xe&&(ee=xe=null,ue=0),yl=t,ha=e,xl=a,Ec=u,jc=n,to=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Km(_n,function(){return vo(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=b.T,b.T=null,n=A.p,A.p=2,i=de,de|=4;try{wm(e,t,a)}finally{de=i,A.p=n,b.T=l}}$e=1,mo(),ho(),go()}}function mo(){if($e===1){$e=0;var e=ha,t=yl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=b.T,b.T=null;var l=A.p;A.p=2;var n=de;de|=4;try{ks(t,e);var u=Qc,i=Ir(e.containerInfo),c=u.focusedElem,f=u.selectionRange;if(i!==c&&c&&c.ownerDocument&&Pr(c.ownerDocument.documentElement,c)){if(f!==null&&hi(c)){var h=f.start,y=f.end;if(y===void 0&&(y=h),"selectionStart"in c)c.selectionStart=h,c.selectionEnd=Math.min(y,c.value.length);else{var N=c.ownerDocument||document,p=N&&N.defaultView||window;if(p.getSelection){var v=p.getSelection(),L=c.textContent.length,Q=Math.min(f.start,L),ve=f.end===void 0?Q:Math.min(f.end,L);!v.extend&&Q>ve&&(i=ve,ve=Q,Q=i);var d=Fr(c,Q),o=Fr(c,ve);if(d&&o&&(v.rangeCount!==1||v.anchorNode!==d.node||v.anchorOffset!==d.offset||v.focusNode!==o.node||v.focusOffset!==o.offset)){var m=N.createRange();m.setStart(d.node,d.offset),v.removeAllRanges(),Q>ve?(v.addRange(m),v.extend(o.node,o.offset)):(m.setEnd(o.node,o.offset),v.addRange(m))}}}}for(N=[],v=c;v=v.parentNode;)v.nodeType===1&&N.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<N.length;c++){var S=N[c];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}Hu=!!Gc,Qc=Gc=null}finally{de=n,A.p=l,b.T=a}}e.current=t,$e=2}}function ho(){if($e===2){$e=0;var e=ha,t=yl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=b.T,b.T=null;var l=A.p;A.p=2;var n=de;de|=4;try{Ls(e,t.alternate,t)}finally{de=n,A.p=l,b.T=a}}$e=3}}function go(){if($e===4||$e===3){$e=0,he();var e=ha,t=yl,a=xl,l=to;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?$e=5:($e=0,yl=ha=null,po(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(ma=null),Ju(a),t=t.stateNode,rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(Dl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=b.T,n=A.p,A.p=2,b.T=null;try{for(var u=e.onRecoverableError,i=0;i<l.length;i++){var c=l[i];u(c.value,{componentStack:c.stack})}}finally{b.T=t,A.p=n}}(xl&3)!==0&&ju(),wt(e),n=e.pendingLanes,(a&4194090)!==0&&(n&42)!==0?e===Tc?hn++:(hn=0,Tc=e):hn=0,gn(0)}}function po(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Jl(t)))}function ju(e){return mo(),ho(),go(),vo()}function vo(){if($e!==5)return!1;var e=ha,t=Ec;Ec=0;var a=Ju(xl),l=b.T,n=A.p;try{A.p=32>a?32:a,b.T=null,a=jc,jc=null;var u=ha,i=xl;if($e=0,yl=ha=null,xl=0,(de&6)!==0)throw Error(g(331));var c=de;if(de|=4,Is(u.current),Ws(u,u.current,i,a),de=c,gn(0,!1),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(Dl,u)}catch{}return!0}finally{A.p=n,b.T=l,po(e,t)}}function bo(e,t,a){t=yt(a,t),t=nc(e.stateNode,t,2),e=na(e,t,2),e!==null&&(Ml(e,2),wt(e))}function ye(e,t,a){if(e.tag===3)bo(e,e,a);else for(;t!==null;){if(t.tag===3){bo(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ma===null||!ma.has(l))){e=yt(a,e),a=Ss(2),l=na(t,a,2),l!==null&&(Ns(a,l,t,e),Ml(l,2),wt(l));break}}t=t.return}}function _c(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Bm;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(xc=!0,n.add(a),e=Zm.bind(null,e,t,a),t.then(e,e))}function Zm(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,xe===e&&(ue&a)===a&&(De===4||De===3&&(ue&62914560)===ue&&300>we()-zc?(de&2)===0&&Sl(e,0):Sc|=a,bl===ue&&(bl=0)),wt(e)}function yo(e,t){t===0&&(t=mr()),e=ll(e,t),e!==null&&(Ml(e,t),wt(e))}function Lm(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),yo(e,a)}function Vm(e,t){var a=0;switch(e.tag){case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(g(314))}l!==null&&l.delete(t),yo(e,a)}function Km(e,t){return Qa(e,t)}var Tu=null,zl=null,Mc=!1,Au=!1,Rc=!1,Ga=0;function wt(e){e!==zl&&e.next===null&&(zl===null?Tu=zl=e:zl=zl.next=e),Au=!0,Mc||(Mc=!0,km())}function gn(e,t){if(!Rc&&Au){Rc=!0;do for(var a=!1,l=Tu;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var u=0;else{var i=l.suspendedLanes,c=l.pingedLanes;u=(1<<31-ft(42|e)+1)-1,u&=n&~(i&~c),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,zo(l,u))}else u=ue,u=Un(l,l===xe?u:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(u&3)===0||_l(l,u)||(a=!0,zo(l,u));l=l.next}while(a);Rc=!1}}function Jm(){xo()}function xo(){Au=Mc=!1;var e=0;Ga!==0&&(a0()&&(e=Ga),Ga=0);for(var t=we(),a=null,l=Tu;l!==null;){var n=l.next,u=So(l,t);u===0?(l.next=null,a===null?Tu=n:a.next=n,n===null&&(zl=a)):(a=l,(e!==0||(u&3)!==0)&&(Au=!0)),l=n}gn(e)}function So(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var i=31-ft(u),c=1<<i,f=n[i];f===-1?((c&a)===0||(c&l)!==0)&&(n[i]=yd(c,t)):f<=t&&(e.expiredLanes|=c),u&=~c}if(t=xe,a=ue,a=Un(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(me===2||me===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&T(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||_l(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&T(l),Ju(a)){case 2:case 8:a=sr;break;case 32:a=_n;break;case 268435456:a=or;break;default:a=_n}return l=No.bind(null,e),a=Qa(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&T(l),e.callbackPriority=2,e.callbackNode=null,2}function No(e,t){if($e!==0&&$e!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ju()&&e.callbackNode!==a)return null;var l=ue;return l=Un(e,e===xe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(lo(e,l,t),So(e,we()),e.callbackNode!=null&&e.callbackNode===a?No.bind(null,e):null)}function zo(e,t){if(ju())return null;lo(e,t,!0)}function km(){n0(function(){(de&6)!==0?Qa(fr,Jm):xo()})}function Uc(){return Ga===0&&(Ga=dr()),Ga}function Eo(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Bn(""+e)}function jo(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function $m(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var u=Eo((n[lt]||null).action),i=l.submitter;i&&(t=(t=i[lt]||null)?Eo(t.formAction):i.getAttribute("formAction"),t!==null&&(u=t,i=null));var c=new Xn("action","action",null,l,n);e.push({event:c,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ga!==0){var f=i?jo(n,i):new FormData(n);Ii(a,{pending:!0,data:f,method:n.method,action:u},null,f)}}else typeof u=="function"&&(c.preventDefault(),f=i?jo(n,i):new FormData(n),Ii(a,{pending:!0,data:f,method:n.method,action:u},u,f))},currentTarget:n}]})}}for(var qc=0;qc<bi.length;qc++){var wc=bi[qc],Wm=wc.toLowerCase(),Fm=wc[0].toUpperCase()+wc.slice(1);Tt(Wm,"on"+Fm)}Tt(af,"onAnimationEnd"),Tt(lf,"onAnimationIteration"),Tt(nf,"onAnimationStart"),Tt("dblclick","onDoubleClick"),Tt("focusin","onFocus"),Tt("focusout","onBlur"),Tt(hm,"onTransitionRun"),Tt(gm,"onTransitionStart"),Tt(pm,"onTransitionCancel"),Tt(uf,"onTransitionEnd"),Ja("onMouseEnter",["mouseout","mouseover"]),Ja("onMouseLeave",["mouseout","mouseover"]),Ja("onPointerEnter",["pointerout","pointerover"]),Ja("onPointerLeave",["pointerout","pointerover"]),Ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ea("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pn));function To(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var u=void 0;if(t)for(var i=l.length-1;0<=i;i--){var c=l[i],f=c.instance,h=c.currentTarget;if(c=c.listener,f!==u&&n.isPropagationStopped())break e;u=c,n.currentTarget=h;try{u(n)}catch(y){hu(y)}n.currentTarget=null,u=f}else for(i=0;i<l.length;i++){if(c=l[i],f=c.instance,h=c.currentTarget,c=c.listener,f!==u&&n.isPropagationStopped())break e;u=c,n.currentTarget=h;try{u(n)}catch(y){hu(y)}n.currentTarget=null,u=f}}}}function te(e,t){var a=t[ku];a===void 0&&(a=t[ku]=new Set);var l=e+"__bubble";a.has(l)||(Ao(t,e,2,!1),a.add(l))}function Cc(e,t,a){var l=0;t&&(l|=4),Ao(a,e,l,t)}var Ou="_reactListening"+Math.random().toString(36).slice(2);function Hc(e){if(!e[Ou]){e[Ou]=!0,br.forEach(function(a){a!=="selectionchange"&&(Pm.has(a)||Cc(a,!1,e),Cc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ou]||(t[Ou]=!0,Cc("selectionchange",!1,t))}}function Ao(e,t,a,l){switch(Fo(t)){case 2:var n=j0;break;case 8:n=T0;break;default:n=Fc}a=n.bind(null,t,a,e),n=void 0,!ui||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Bc(e,t,a,l,n){var u=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var i=l.tag;if(i===3||i===4){var c=l.stateNode.containerInfo;if(c===n)break;if(i===4)for(i=l.return;i!==null;){var f=i.tag;if((f===3||f===4)&&i.stateNode.containerInfo===n)return;i=i.return}for(;c!==null;){if(i=La(c),i===null)return;if(f=i.tag,f===5||f===6||f===26||f===27){l=u=i;continue e}c=c.parentNode}}l=l.return}Rr(function(){var h=u,y=li(a),N=[];e:{var p=cf.get(e);if(p!==void 0){var v=Xn,L=e;switch(e){case"keypress":if(Gn(a)===0)break e;case"keydown":case"keyup":v=Kd;break;case"focusin":L="focus",v=fi;break;case"focusout":L="blur",v=fi;break;case"beforeblur":case"afterblur":v=fi;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=wr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=qd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=$d;break;case af:case lf:case nf:v=Hd;break;case uf:v=Fd;break;case"scroll":case"scrollend":v=Rd;break;case"wheel":v=Id;break;case"copy":case"cut":case"paste":v=Yd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Hr;break;case"toggle":case"beforetoggle":v=tm}var Q=(t&4)!==0,ve=!Q&&(e==="scroll"||e==="scrollend"),d=Q?p!==null?p+"Capture":null:p;Q=[];for(var o=h,m;o!==null;){var S=o;if(m=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||m===null||d===null||(S=ql(o,d),S!=null&&Q.push(vn(o,S,m))),ve)break;o=o.return}0<Q.length&&(p=new v(p,L,null,a,y),N.push({event:p,listeners:Q}))}}if((t&7)===0){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&a!==ai&&(L=a.relatedTarget||a.fromElement)&&(La(L)||L[Za]))break e;if((v||p)&&(p=y.window===y?y:(p=y.ownerDocument)?p.defaultView||p.parentWindow:window,v?(L=a.relatedTarget||a.toElement,v=h,L=L?La(L):null,L!==null&&(ve=G(L),Q=L.tag,L!==ve||Q!==5&&Q!==27&&Q!==6)&&(L=null)):(v=null,L=h),v!==L)){if(Q=wr,S="onMouseLeave",d="onMouseEnter",o="mouse",(e==="pointerout"||e==="pointerover")&&(Q=Hr,S="onPointerLeave",d="onPointerEnter",o="pointer"),ve=v==null?p:Ul(v),m=L==null?p:Ul(L),p=new Q(S,o+"leave",v,a,y),p.target=ve,p.relatedTarget=m,S=null,La(y)===h&&(Q=new Q(d,o+"enter",L,a,y),Q.target=m,Q.relatedTarget=ve,S=Q),ve=S,v&&L)t:{for(Q=v,d=L,o=0,m=Q;m;m=El(m))o++;for(m=0,S=d;S;S=El(S))m++;for(;0<o-m;)Q=El(Q),o--;for(;0<m-o;)d=El(d),m--;for(;o--;){if(Q===d||d!==null&&Q===d.alternate)break t;Q=El(Q),d=El(d)}Q=null}else Q=null;v!==null&&Oo(N,p,v,Q,!1),L!==null&&ve!==null&&Oo(N,ve,L,Q,!0)}}e:{if(p=h?Ul(h):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var q=Vr;else if(Zr(p))if(Kr)q=om;else{q=fm;var I=rm}else v=p.nodeName,!v||v.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?h&&ti(h.elementType)&&(q=Vr):q=sm;if(q&&(q=q(e,h))){Lr(N,q,a,y);break e}I&&I(e,p,h),e==="focusout"&&h&&p.type==="number"&&h.memoizedProps.value!=null&&ei(p,"number",p.value)}switch(I=h?Ul(h):window,e){case"focusin":(Zr(I)||I.contentEditable==="true")&&(el=I,gi=h,Xl=null);break;case"focusout":Xl=gi=el=null;break;case"mousedown":pi=!0;break;case"contextmenu":case"mouseup":case"dragend":pi=!1,ef(N,a,y);break;case"selectionchange":if(mm)break;case"keydown":case"keyup":ef(N,a,y)}var w;if(oi)e:{switch(e){case"compositionstart":var X="onCompositionStart";break e;case"compositionend":X="onCompositionEnd";break e;case"compositionupdate":X="onCompositionUpdate";break e}X=void 0}else Ia?Qr(e,a)&&(X="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(X="onCompositionStart");X&&(Br&&a.locale!=="ko"&&(Ia||X!=="onCompositionStart"?X==="onCompositionEnd"&&Ia&&(w=Ur()):(ea=y,ii="value"in ea?ea.value:ea.textContent,Ia=!0)),I=Du(h,X),0<I.length&&(X=new Cr(X,e,null,a,y),N.push({event:X,listeners:I}),w?X.data=w:(w=Xr(a),w!==null&&(X.data=w)))),(w=lm?nm(e,a):um(e,a))&&(X=Du(h,"onBeforeInput"),0<X.length&&(I=new Cr("onBeforeInput","beforeinput",null,a,y),N.push({event:I,listeners:X}),I.data=w)),$m(N,e,h,a,y)}To(N,t)})}function vn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Du(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,u=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||u===null||(n=ql(e,a),n!=null&&l.unshift(vn(e,n,u)),n=ql(e,t),n!=null&&l.push(vn(e,n,u))),e.tag===3)return l;e=e.return}return[]}function El(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Oo(e,t,a,l,n){for(var u=t._reactName,i=[];a!==null&&a!==l;){var c=a,f=c.alternate,h=c.stateNode;if(c=c.tag,f!==null&&f===l)break;c!==5&&c!==26&&c!==27||h===null||(f=h,n?(h=ql(a,u),h!=null&&i.unshift(vn(a,h,f))):n||(h=ql(a,u),h!=null&&i.push(vn(a,h,f)))),a=a.return}i.length!==0&&e.push({event:t,listeners:i})}var Im=/\r\n?/g,e0=/\u0000|\uFFFD/g;function Do(e){return(typeof e=="string"?e:""+e).replace(Im,`
`).replace(e0,"")}function _o(e,t){return t=Do(t),Do(e)===t}function _u(){}function pe(e,t,a,l,n,u){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Wa(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Wa(e,""+l);break;case"className":wn(e,"class",l);break;case"tabIndex":wn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":wn(e,a,l);break;case"style":_r(e,l,u);break;case"data":if(t!=="object"){wn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Bn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(t!=="input"&&pe(e,t,"name",n.name,n,null),pe(e,t,"formEncType",n.formEncType,n,null),pe(e,t,"formMethod",n.formMethod,n,null),pe(e,t,"formTarget",n.formTarget,n,null)):(pe(e,t,"encType",n.encType,n,null),pe(e,t,"method",n.method,n,null),pe(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Bn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=_u);break;case"onScroll":l!=null&&te("scroll",e);break;case"onScrollEnd":l!=null&&te("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(g(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(g(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Bn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":te("beforetoggle",e),te("toggle",e),qn(e,"popover",l);break;case"xlinkActuate":Ht(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ht(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ht(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ht(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ht(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ht(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":qn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=_d.get(a)||a,qn(e,a,l))}}function Yc(e,t,a,l,n,u){switch(a){case"style":_r(e,l,u);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(g(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(g(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Wa(e,l):(typeof l=="number"||typeof l=="bigint")&&Wa(e,""+l);break;case"onScroll":l!=null&&te("scroll",e);break;case"onScrollEnd":l!=null&&te("scrollend",e);break;case"onClick":l!=null&&(e.onclick=_u);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!yr.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),u=e[lt]||null,u=u!=null?u[a]:null,typeof u=="function"&&e.removeEventListener(t,u,n),typeof l=="function")){typeof u!="function"&&u!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):qn(e,a,l)}}}function We(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":te("error",e),te("load",e);var l=!1,n=!1,u;for(u in a)if(a.hasOwnProperty(u)){var i=a[u];if(i!=null)switch(u){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(g(137,t));default:pe(e,t,u,i,a,null)}}n&&pe(e,t,"srcSet",a.srcSet,a,null),l&&pe(e,t,"src",a.src,a,null);return;case"input":te("invalid",e);var c=u=i=n=null,f=null,h=null;for(l in a)if(a.hasOwnProperty(l)){var y=a[l];if(y!=null)switch(l){case"name":n=y;break;case"type":i=y;break;case"checked":f=y;break;case"defaultChecked":h=y;break;case"value":u=y;break;case"defaultValue":c=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(g(137,t));break;default:pe(e,t,l,y,a,null)}}Tr(e,u,c,f,h,i,n,!1),Cn(e);return;case"select":te("invalid",e),l=i=u=null;for(n in a)if(a.hasOwnProperty(n)&&(c=a[n],c!=null))switch(n){case"value":u=c;break;case"defaultValue":i=c;break;case"multiple":l=c;default:pe(e,t,n,c,a,null)}t=u,a=i,e.multiple=!!l,t!=null?$a(e,!!l,t,!1):a!=null&&$a(e,!!l,a,!0);return;case"textarea":te("invalid",e),u=n=l=null;for(i in a)if(a.hasOwnProperty(i)&&(c=a[i],c!=null))switch(i){case"value":l=c;break;case"defaultValue":n=c;break;case"children":u=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(g(91));break;default:pe(e,t,i,c,a,null)}Or(e,l,n,u),Cn(e);return;case"option":for(f in a)if(a.hasOwnProperty(f)&&(l=a[f],l!=null))switch(f){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:pe(e,t,f,l,a,null)}return;case"dialog":te("beforetoggle",e),te("toggle",e),te("cancel",e),te("close",e);break;case"iframe":case"object":te("load",e);break;case"video":case"audio":for(l=0;l<pn.length;l++)te(pn[l],e);break;case"image":te("error",e),te("load",e);break;case"details":te("toggle",e);break;case"embed":case"source":case"link":te("error",e),te("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in a)if(a.hasOwnProperty(h)&&(l=a[h],l!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(g(137,t));default:pe(e,t,h,l,a,null)}return;default:if(ti(t)){for(y in a)a.hasOwnProperty(y)&&(l=a[y],l!==void 0&&Yc(e,t,y,l,a,void 0));return}}for(c in a)a.hasOwnProperty(c)&&(l=a[c],l!=null&&pe(e,t,c,l,a,null))}function t0(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,u=null,i=null,c=null,f=null,h=null,y=null;for(v in a){var N=a[v];if(a.hasOwnProperty(v)&&N!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":f=N;default:l.hasOwnProperty(v)||pe(e,t,v,null,l,N)}}for(var p in l){var v=l[p];if(N=a[p],l.hasOwnProperty(p)&&(v!=null||N!=null))switch(p){case"type":u=v;break;case"name":n=v;break;case"checked":h=v;break;case"defaultChecked":y=v;break;case"value":i=v;break;case"defaultValue":c=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(g(137,t));break;default:v!==N&&pe(e,t,p,v,l,N)}}Iu(e,i,c,f,h,y,u,n);return;case"select":v=i=c=p=null;for(u in a)if(f=a[u],a.hasOwnProperty(u)&&f!=null)switch(u){case"value":break;case"multiple":v=f;default:l.hasOwnProperty(u)||pe(e,t,u,null,l,f)}for(n in l)if(u=l[n],f=a[n],l.hasOwnProperty(n)&&(u!=null||f!=null))switch(n){case"value":p=u;break;case"defaultValue":c=u;break;case"multiple":i=u;default:u!==f&&pe(e,t,n,u,l,f)}t=c,a=i,l=v,p!=null?$a(e,!!a,p,!1):!!l!=!!a&&(t!=null?$a(e,!!a,t,!0):$a(e,!!a,a?[]:"",!1));return;case"textarea":v=p=null;for(c in a)if(n=a[c],a.hasOwnProperty(c)&&n!=null&&!l.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:pe(e,t,c,null,l,n)}for(i in l)if(n=l[i],u=a[i],l.hasOwnProperty(i)&&(n!=null||u!=null))switch(i){case"value":p=n;break;case"defaultValue":v=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(g(91));break;default:n!==u&&pe(e,t,i,n,l,u)}Ar(e,p,v);return;case"option":for(var L in a)if(p=a[L],a.hasOwnProperty(L)&&p!=null&&!l.hasOwnProperty(L))switch(L){case"selected":e.selected=!1;break;default:pe(e,t,L,null,l,p)}for(f in l)if(p=l[f],v=a[f],l.hasOwnProperty(f)&&p!==v&&(p!=null||v!=null))switch(f){case"selected":e.selected=p&&typeof p!="function"&&typeof p!="symbol";break;default:pe(e,t,f,p,l,v)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Q in a)p=a[Q],a.hasOwnProperty(Q)&&p!=null&&!l.hasOwnProperty(Q)&&pe(e,t,Q,null,l,p);for(h in l)if(p=l[h],v=a[h],l.hasOwnProperty(h)&&p!==v&&(p!=null||v!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(g(137,t));break;default:pe(e,t,h,p,l,v)}return;default:if(ti(t)){for(var ve in a)p=a[ve],a.hasOwnProperty(ve)&&p!==void 0&&!l.hasOwnProperty(ve)&&Yc(e,t,ve,void 0,l,p);for(y in l)p=l[y],v=a[y],!l.hasOwnProperty(y)||p===v||p===void 0&&v===void 0||Yc(e,t,y,p,l,v);return}}for(var d in a)p=a[d],a.hasOwnProperty(d)&&p!=null&&!l.hasOwnProperty(d)&&pe(e,t,d,null,l,p);for(N in l)p=l[N],v=a[N],!l.hasOwnProperty(N)||p===v||p==null&&v==null||pe(e,t,N,p,l,v)}var Gc=null,Qc=null;function Mu(e){return e.nodeType===9?e:e.ownerDocument}function Mo(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ro(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Xc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zc=null;function a0(){var e=window.event;return e&&e.type==="popstate"?e===Zc?!1:(Zc=e,!0):(Zc=null,!1)}var Uo=typeof setTimeout=="function"?setTimeout:void 0,l0=typeof clearTimeout=="function"?clearTimeout:void 0,qo=typeof Promise=="function"?Promise:void 0,n0=typeof queueMicrotask=="function"?queueMicrotask:typeof qo<"u"?function(e){return qo.resolve(null).then(e).catch(u0)}:Uo;function u0(e){setTimeout(function(){throw e})}function pa(e){return e==="head"}function wo(e,t){var a=t,l=0,n=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(0<l&&8>l){a=l;var i=e.ownerDocument;if(a&1&&bn(i.documentElement),a&2&&bn(i.body),a&4)for(a=i.head,bn(a),i=a.firstChild;i;){var c=i.nextSibling,f=i.nodeName;i[Rl]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=c}}if(n===0){e.removeChild(u),Tn(t);return}n--}else a==="$"||a==="$?"||a==="$!"?n++:l=a.charCodeAt(0)-48;else l=0;a=u}while(a);Tn(t)}function Lc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Lc(a),$u(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function i0(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Rl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Ot(e.nextSibling),e===null)break}return null}function c0(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ot(e.nextSibling),e===null))return null;return e}function Vc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function r0(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Kc=null;function Co(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function Ho(e,t,a){switch(t=Mu(a),e){case"html":if(e=t.documentElement,!e)throw Error(g(452));return e;case"head":if(e=t.head,!e)throw Error(g(453));return e;case"body":if(e=t.body,!e)throw Error(g(454));return e;default:throw Error(g(451))}}function bn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);$u(e)}var jt=new Map,Bo=new Set;function Ru(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ft=A.d;A.d={f:f0,r:s0,D:o0,C:d0,L:m0,m:h0,X:p0,S:g0,M:v0};function f0(){var e=Ft.f(),t=zu();return e||t}function s0(e){var t=Va(e);t!==null&&t.tag===5&&t.type==="form"?ls(t):Ft.r(e)}var jl=typeof document>"u"?null:document;function Yo(e,t,a){var l=jl;if(l&&typeof t=="string"&&t){var n=bt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Bo.has(n)||(Bo.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),We(t,"link",e),Xe(t),l.head.appendChild(t)))}}function o0(e){Ft.D(e),Yo("dns-prefetch",e,null)}function d0(e,t){Ft.C(e,t),Yo("preconnect",e,t)}function m0(e,t,a){Ft.L(e,t,a);var l=jl;if(l&&e&&t){var n='link[rel="preload"][as="'+bt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+bt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+bt(a.imageSizes)+'"]')):n+='[href="'+bt(e)+'"]';var u=n;switch(t){case"style":u=Tl(e);break;case"script":u=Al(e)}jt.has(u)||(e=D({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),jt.set(u,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(yn(u))||t==="script"&&l.querySelector(xn(u))||(t=l.createElement("link"),We(t,"link",e),Xe(t),l.head.appendChild(t)))}}function h0(e,t){Ft.m(e,t);var a=jl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+bt(l)+'"][href="'+bt(e)+'"]',u=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Al(e)}if(!jt.has(u)&&(e=D({rel:"modulepreload",href:e},t),jt.set(u,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(xn(u)))return}l=a.createElement("link"),We(l,"link",e),Xe(l),a.head.appendChild(l)}}}function g0(e,t,a){Ft.S(e,t,a);var l=jl;if(l&&e){var n=Ka(l).hoistableStyles,u=Tl(e);t=t||"default";var i=n.get(u);if(!i){var c={loading:0,preload:null};if(i=l.querySelector(yn(u)))c.loading=5;else{e=D({rel:"stylesheet",href:e,"data-precedence":t},a),(a=jt.get(u))&&Jc(e,a);var f=i=l.createElement("link");Xe(f),We(f,"link",e),f._p=new Promise(function(h,y){f.onload=h,f.onerror=y}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Uu(i,t,l)}i={type:"stylesheet",instance:i,count:1,state:c},n.set(u,i)}}}function p0(e,t){Ft.X(e,t);var a=jl;if(a&&e){var l=Ka(a).hoistableScripts,n=Al(e),u=l.get(n);u||(u=a.querySelector(xn(n)),u||(e=D({src:e,async:!0},t),(t=jt.get(n))&&kc(e,t),u=a.createElement("script"),Xe(u),We(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(n,u))}}function v0(e,t){Ft.M(e,t);var a=jl;if(a&&e){var l=Ka(a).hoistableScripts,n=Al(e),u=l.get(n);u||(u=a.querySelector(xn(n)),u||(e=D({src:e,async:!0,type:"module"},t),(t=jt.get(n))&&kc(e,t),u=a.createElement("script"),Xe(u),We(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(n,u))}}function Go(e,t,a,l){var n=(n=V.current)?Ru(n):null;if(!n)throw Error(g(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Tl(a.href),a=Ka(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Tl(a.href);var u=Ka(n).hoistableStyles,i=u.get(e);if(i||(n=n.ownerDocument||n,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,i),(u=n.querySelector(yn(e)))&&!u._p&&(i.instance=u,i.state.loading=5),jt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},jt.set(e,a),u||b0(n,e,a,i.state))),t&&l===null)throw Error(g(528,""));return i}if(t&&l!==null)throw Error(g(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Al(a),a=Ka(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(g(444,e))}}function Tl(e){return'href="'+bt(e)+'"'}function yn(e){return'link[rel="stylesheet"]['+e+"]"}function Qo(e){return D({},e,{"data-precedence":e.precedence,precedence:null})}function b0(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),We(t,"link",a),Xe(t),e.head.appendChild(t))}function Al(e){return'[src="'+bt(e)+'"]'}function xn(e){return"script[async]"+e}function Xo(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+bt(a.href)+'"]');if(l)return t.instance=l,Xe(l),l;var n=D({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Xe(l),We(l,"style",n),Uu(l,a.precedence,e),t.instance=l;case"stylesheet":n=Tl(a.href);var u=e.querySelector(yn(n));if(u)return t.state.loading|=4,t.instance=u,Xe(u),u;l=Qo(a),(n=jt.get(n))&&Jc(l,n),u=(e.ownerDocument||e).createElement("link"),Xe(u);var i=u;return i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),We(u,"link",l),t.state.loading|=4,Uu(u,a.precedence,e),t.instance=u;case"script":return u=Al(a.src),(n=e.querySelector(xn(u)))?(t.instance=n,Xe(n),n):(l=a,(n=jt.get(u))&&(l=D({},a),kc(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Xe(n),We(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(g(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Uu(l,a.precedence,e));return t.instance}function Uu(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,u=n,i=0;i<l.length;i++){var c=l[i];if(c.dataset.precedence===t)u=c;else if(u!==n)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Jc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function kc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var qu=null;function Zo(e,t,a){if(qu===null){var l=new Map,n=qu=new Map;n.set(a,l)}else n=qu,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var u=a[n];if(!(u[Rl]||u[Pe]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var i=u.getAttribute(t)||"";i=e+i;var c=l.get(i);c?c.push(u):l.set(i,[u])}}return l}function Lo(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function y0(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Vo(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Sn=null;function x0(){}function S0(e,t,a){if(Sn===null)throw Error(g(475));var l=Sn;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var n=Tl(a.href),u=e.querySelector(yn(n));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=wu.bind(l),e.then(l,l)),t.state.loading|=4,t.instance=u,Xe(u);return}u=e.ownerDocument||e,a=Qo(a),(n=jt.get(n))&&Jc(a,n),u=u.createElement("link"),Xe(u);var i=u;i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),We(u,"link",a),t.instance=u}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=wu.bind(l),e.addEventListener("load",t),e.addEventListener("error",t))}}function N0(){if(Sn===null)throw Error(g(475));var e=Sn;return e.stylesheets&&e.count===0&&$c(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&$c(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function wu(){if(this.count--,this.count===0){if(this.stylesheets)$c(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Cu=null;function $c(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Cu=new Map,t.forEach(z0,e),Cu=null,wu.call(e))}function z0(e,t){if(!(t.state.loading&4)){var a=Cu.get(e);if(a)var l=a.get(null);else{a=new Map,Cu.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<n.length;u++){var i=n[u];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(a.set(i.dataset.precedence,i),l=i)}l&&a.set(null,l)}n=t.instance,i=n.getAttribute("data-precedence"),u=a.get(i)||l,u===l&&a.set(null,n),a.set(i,n),this.count++,l=wu.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),u?u.parentNode.insertBefore(n,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Nn={$$typeof:Te,Provider:null,Consumer:null,_currentValue:B,_currentValue2:B,_threadCount:0};function E0(e,t,a,l,n,u,i,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Vu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vu(0),this.hiddenUpdates=Vu(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=u,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function Ko(e,t,a,l,n,u,i,c,f,h,y,N){return e=new E0(e,t,a,i,c,f,h,N),t=1,u===!0&&(t|=24),u=ot(3,null,null,t),e.current=u,u.stateNode=e,t=_i(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:l,isDehydrated:a,cache:t},qi(u),e}function Jo(e){return e?(e=nl,e):nl}function ko(e,t,a,l,n,u){n=Jo(n),l.context===null?l.context=n:l.pendingContext=n,l=la(t),l.payload={element:a},u=u===void 0?null:u,u!==null&&(l.callback=u),a=na(e,l,t),a!==null&&(pt(a,e,t),Fl(a,e,t))}function $o(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Wc(e,t){$o(e,t),(e=e.alternate)&&$o(e,t)}function Wo(e){if(e.tag===13){var t=ll(e,67108864);t!==null&&pt(t,e,67108864),Wc(e,67108864)}}var Hu=!0;function j0(e,t,a,l){var n=b.T;b.T=null;var u=A.p;try{A.p=2,Fc(e,t,a,l)}finally{A.p=u,b.T=n}}function T0(e,t,a,l){var n=b.T;b.T=null;var u=A.p;try{A.p=8,Fc(e,t,a,l)}finally{A.p=u,b.T=n}}function Fc(e,t,a,l){if(Hu){var n=Pc(l);if(n===null)Bc(e,t,l,Bu,a),Po(e,l);else if(O0(n,e,t,a,l))l.stopPropagation();else if(Po(e,l),t&4&&-1<A0.indexOf(e)){for(;n!==null;){var u=Va(n);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var i=za(u.pendingLanes);if(i!==0){var c=u;for(c.pendingLanes|=2,c.entangledLanes|=2;i;){var f=1<<31-ft(i);c.entanglements[1]|=f,i&=~f}wt(u),(de&6)===0&&(Su=we()+500,gn(0))}}break;case 13:c=ll(u,2),c!==null&&pt(c,u,2),zu(),Wc(u,2)}if(u=Pc(l),u===null&&Bc(e,t,l,Bu,a),u===n)break;n=u}n!==null&&l.stopPropagation()}else Bc(e,t,l,null,a)}}function Pc(e){return e=li(e),Ic(e)}var Bu=null;function Ic(e){if(Bu=null,e=La(e),e!==null){var t=G(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=K(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Bu=e,null}function Fo(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xa()){case fr:return 2;case sr:return 8;case _n:case md:return 32;case or:return 268435456;default:return 32}default:return 32}}var er=!1,va=null,ba=null,ya=null,zn=new Map,En=new Map,xa=[],A0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Po(e,t){switch(e){case"focusin":case"focusout":va=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":ya=null;break;case"pointerover":case"pointerout":zn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":En.delete(t.pointerId)}}function jn(e,t,a,l,n,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:u,targetContainers:[n]},t!==null&&(t=Va(t),t!==null&&Wo(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function O0(e,t,a,l,n){switch(t){case"focusin":return va=jn(va,e,t,a,l,n),!0;case"dragenter":return ba=jn(ba,e,t,a,l,n),!0;case"mouseover":return ya=jn(ya,e,t,a,l,n),!0;case"pointerover":var u=n.pointerId;return zn.set(u,jn(zn.get(u)||null,e,t,a,l,n)),!0;case"gotpointercapture":return u=n.pointerId,En.set(u,jn(En.get(u)||null,e,t,a,l,n)),!0}return!1}function Io(e){var t=La(e.target);if(t!==null){var a=G(t);if(a!==null){if(t=a.tag,t===13){if(t=K(a),t!==null){e.blockedOn=t,Sd(e.priority,function(){if(a.tag===13){var l=gt();l=Ku(l);var n=ll(a,l);n!==null&&pt(n,a,l),Wc(a,l)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Pc(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);ai=l,a.target.dispatchEvent(l),ai=null}else return t=Va(a),t!==null&&Wo(t),e.blockedOn=a,!1;t.shift()}return!0}function ed(e,t,a){Yu(e)&&a.delete(t)}function D0(){er=!1,va!==null&&Yu(va)&&(va=null),ba!==null&&Yu(ba)&&(ba=null),ya!==null&&Yu(ya)&&(ya=null),zn.forEach(ed),En.forEach(ed)}function Gu(e,t){e.blockedOn===t&&(e.blockedOn=null,er||(er=!0,E.unstable_scheduleCallback(E.unstable_NormalPriority,D0)))}var Qu=null;function td(e){Qu!==e&&(Qu=e,E.unstable_scheduleCallback(E.unstable_NormalPriority,function(){Qu===e&&(Qu=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(Ic(l||a)===null)continue;break}var u=Va(a);u!==null&&(e.splice(t,3),t-=3,Ii(u,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Tn(e){function t(f){return Gu(f,e)}va!==null&&Gu(va,e),ba!==null&&Gu(ba,e),ya!==null&&Gu(ya,e),zn.forEach(t),En.forEach(t);for(var a=0;a<xa.length;a++){var l=xa[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<xa.length&&(a=xa[0],a.blockedOn===null);)Io(a),a.blockedOn===null&&xa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],u=a[l+1],i=n[lt]||null;if(typeof u=="function")i||td(a);else if(i){var c=null;if(u&&u.hasAttribute("formAction")){if(n=u,i=u[lt]||null)c=i.formAction;else if(Ic(n)!==null)continue}else c=i.action;typeof c=="function"?a[l+1]=c:(a.splice(l,3),l-=3),td(a)}}}function tr(e){this._internalRoot=e}Xu.prototype.render=tr.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(g(409));var a=t.current,l=gt();ko(a,l,e,t,null,null)},Xu.prototype.unmount=tr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ko(e.current,2,null,e,null,null),zu(),t[Za]=null}};function Xu(e){this._internalRoot=e}Xu.prototype.unstable_scheduleHydration=function(e){if(e){var t=pr();e={blockedOn:null,target:e,priority:t};for(var a=0;a<xa.length&&t!==0&&t<xa[a].priority;a++);xa.splice(a,0,e),a===0&&Io(e)}};var ad=M.version;if(ad!=="19.1.0")throw Error(g(527,ad,"19.1.0"));A.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(g(188)):(e=Object.keys(e).join(","),Error(g(268,e)));return e=j(t),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var _0={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:b,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zu.isDisabled&&Zu.supportsFiber)try{Dl=Zu.inject(_0),rt=Zu}catch{}}return On.createRoot=function(e,t){if(!R(e))throw Error(g(299));var a=!1,l="",n=vs,u=bs,i=ys,c=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(c=t.unstable_transitionCallbacks)),t=Ko(e,1,!1,null,null,a,l,n,u,i,c,null),e[Za]=t.current,Hc(e),new tr(t)},On.hydrateRoot=function(e,t,a){if(!R(e))throw Error(g(299));var l=!1,n="",u=vs,i=bs,c=ys,f=null,h=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(f=a.unstable_transitionCallbacks),a.formState!==void 0&&(h=a.formState)),t=Ko(e,1,!0,t,a??null,l,n,u,i,c,f,h),t.context=Jo(null),a=t.current,l=gt(),l=Ku(l),n=la(l),n.callback=null,na(a,n,l),a=l,t.current.lanes=a,Ml(t,a),wt(t),e[Za]=t.current,Hc(e),new Xu(t)},On.version="19.1.0",On}var dd;function G0(){if(dd)return nr.exports;dd=1;function E(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E)}catch(M){console.error(M)}}return E(),nr.exports=Y0(),nr.exports}var Q0=G0();const Lu=F.createContext(null),X0=({message:E,type:M,onClose:U})=>{if(!E)return null;const g=M==="success"?"message-alert-success":"message-alert-error",R=M==="success"?"text-green-700":"text-red-700";return r.jsx("div",{className:"message-modal-overlay",children:r.jsxs("div",{className:"message-modal-content",children:[r.jsxs("div",{className:`message-alert ${g}`,role:"alert",children:[r.jsx("p",{className:"font-bold",children:M==="success"?"Sucesso!":"Erro!"}),r.jsx("p",{className:R,children:E})]}),r.jsx("div",{className:"message-modal-actions",children:r.jsx("button",{onClick:U,className:"message-button",children:"Fechar"})})]})})},je=({label:E,type:M="text",name:U,value:g,onChange:R,placeholder:G,required:K=!1,onFileChange:k,filePreview:j})=>r.jsxs("div",{className:"input-group",children:[r.jsxs("label",{htmlFor:U,className:"input-label",children:[E," ",K&&r.jsx("span",{className:"text-red-500",children:"*"})]}),M==="file"?r.jsxs(r.Fragment,{children:[r.jsx("input",{type:"file",id:U,name:U,onChange:k,required:K,className:"input-field",accept:"image/*"}),j&&r.jsx("div",{className:"file-preview-container",children:r.jsx("img",{src:j,alt:"Pré-visualização",className:"file-preview-image"})})]}):r.jsx("input",{type:M,id:U,name:U,value:g,onChange:R,placeholder:G,required:K,className:"input-field"})]}),ze=({onClick:E,children:M,className:U="",type:g="button",disabled:R=!1})=>r.jsx("button",{type:g,onClick:E,disabled:R,className:`btn ${U} ${R?"btn-disabled":""}`,children:M}),Z0=()=>{const{chef:E,logout:M}=F.useContext(Lu);return r.jsx("nav",{className:"navbar",children:r.jsxs("div",{className:"navbar-container",children:[r.jsx("a",{href:"/",className:"navbar-brand",children:"SaborBIT"}),r.jsx("div",{className:"navbar-links",children:E?r.jsxs(r.Fragment,{children:[r.jsx("a",{href:"/dashboard",className:"navbar-link",children:"Dashboard"}),r.jsx(ze,{onClick:M,className:"btn-red",children:"Sair"})]}):r.jsxs(r.Fragment,{children:[r.jsx("a",{href:"/login",className:"navbar-link",children:"Login"}),r.jsx("a",{href:"/register",className:"navbar-link",children:"Registrar"})]})})]})})},L0=({navigate:E,showMessage:M})=>{const[U,g]=F.useState({name:"",email:"",password:"",phone:"",address:"",restaurantName:"",profilePicture:""}),[R,G]=F.useState(""),[K,k]=F.useState(!1),j=Z=>{g({...U,[Z.target.name]:Z.target.value})},x=Z=>{const J=Z.target.files[0];if(J){const ie=new FileReader;ie.onloadend=()=>{g({...U,profilePicture:ie.result}),G(ie.result)},ie.readAsDataURL(J)}else g({...U,profilePicture:""}),G("")},D=async Z=>{Z.preventDefault(),k(!0);try{const J=await fetch("https://backend-saborbit.onrender.com/api/beAChef",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(U)}),ie=await J.json();J.ok?(M(ie.message,"success"),E("/login")):M(ie.message||"Erro ao registrar chef.","error")}catch(J){console.error("Erro de rede:",J),M("Erro de rede. Tente novamente.","error")}finally{k(!1)}};return r.jsx("div",{className:"page-container",children:r.jsxs("div",{className:"form-card",children:[r.jsx("h2",{className:"form-heading",children:"Registrar Chef"}),r.jsxs("form",{onSubmit:D,children:[r.jsx(je,{label:"Nome Completo",name:"name",value:U.name,onChange:j,placeholder:"Seu nome",required:!0}),r.jsx(je,{label:"Email",type:"email",name:"email",value:U.email,onChange:j,placeholder:"seu@email.com",required:!0}),r.jsx(je,{label:"Senha",type:"password",name:"password",value:U.password,onChange:j,placeholder:"********",required:!0}),r.jsx(je,{label:"Telefone (WhatsApp)",name:"phone",value:U.phone,onChange:j,placeholder:"Ex: 5511999998888",required:!0}),r.jsx(je,{label:"Endereço",name:"address",value:U.address,onChange:j,placeholder:"Rua, número, bairro, cidade",required:!0}),r.jsx(je,{label:"Nome do Restaurante",name:"restaurantName",value:U.restaurantName,onChange:j,placeholder:"Nome do seu estabelecimento",required:!0}),r.jsx(je,{label:"Foto de Perfil (Opcional)",type:"file",name:"profilePicture",onFileChange:x,filePreview:R}),r.jsx(ze,{type:"submit",className:"w-full mt-6",disabled:K,children:K?"Registrando...":"Registrar"})]}),r.jsxs("p",{className:"form-footer-text",children:["Já tem uma conta? ",r.jsx("a",{href:"/login",className:"form-footer-link",children:"Faça Login aqui"})]})]})})},V0=({navigate:E,showMessage:M})=>{const{login:U}=F.useContext(Lu),[g,R]=F.useState({email:"",password:""}),[G,K]=F.useState(!1),k=x=>{R({...g,[x.target.name]:x.target.value})},j=async x=>{x.preventDefault(),K(!0);try{const D=await fetch("https://backend-saborbit.onrender.com/api/loginChef",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(g)}),Z=await D.json();D.ok?(U(Z.chef),M(Z.message,"success"),E("/dashboard")):M(Z.message||"Erro ao fazer login.","error")}catch(D){console.error("Erro de rede:",D),M("Erro de rede. Tente novamente.","error")}finally{K(!1)}};return r.jsx("div",{className:"page-container",children:r.jsxs("div",{className:"form-card",children:[r.jsx("h2",{className:"form-heading",children:"Login Chef"}),r.jsxs("form",{onSubmit:j,children:[r.jsx(je,{label:"Email",type:"email",name:"email",value:g.email,onChange:k,placeholder:"seu@email.com",required:!0}),r.jsx(je,{label:"Senha",type:"password",name:"password",value:g.password,onChange:k,placeholder:"********",required:!0}),r.jsx(ze,{type:"submit",className:"w-full mt-6",disabled:G,children:G?"Entrando...":"Entrar"})]}),r.jsxs("p",{className:"form-footer-text",children:["Não tem uma conta? ",r.jsx("a",{href:"/register",className:"form-footer-link",children:"Registre-se aqui"})]})]})})},K0=({showMessage:E})=>{const{chef:M,updateChef:U,logout:g}=F.useContext(Lu),[R,G]=F.useState("profile"),[K,k]=F.useState(!1),[j,x]=F.useState(M),[D,Z]=F.useState(!1),[J,ie]=F.useState(M?.profilePicture||""),[se,le]=F.useState([]),[_e,at]=F.useState(!1),[Ke,Te]=F.useState(null),[Ae,$]=F.useState({name:"",description:"",price:"",category:"",imageUrl:""}),[Je,Me]=F.useState(""),[Ge,Qe]=F.useState([]),[Dt,C]=F.useState(!1),[H,Re]=F.useState(null),[ce,Se]=F.useState(""),[b,A]=F.useState(!1);F.useEffect(()=>{M&&(x(M),ie(M.profilePicture||""),R==="menu"?z():R==="orders"&&Fe())},[M,R]);const B=T=>{x({...j,[T.target.name]:T.target.value})},oe=T=>{const ae=T.target.files[0];if(ae){const he=new FileReader;he.onloadend=()=>{x({...j,profilePicture:he.result}),ie(he.result)},he.readAsDataURL(ae)}else x({...j,profilePicture:""}),ie("")},s=async()=>{k(!0);try{const T=await fetch(`https://backend-saborbit.onrender.com/api/chefs/${M._id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(j)}),ae=await T.json();T.ok?(U(ae.chef),E(ae.message,"success"),Z(!1)):E(ae.message||"Erro ao atualizar perfil.","error")}catch(T){console.error("Erro de rede:",T),E("Erro de rede. Tente novamente.","error")}finally{k(!1)}},z=async()=>{k(!0);try{const T=await fetch(`https://backend-saborbit.onrender.com/api/chefs/${M._id}/menuItems`),ae=await T.json();T.ok?le(ae.menuItems):(le([]),E(ae.message||"Nenhum item de cardápio encontrado.","info"))}catch(T){console.error("Erro ao buscar itens do cardápio:",T),E("Erro ao buscar itens do cardápio.","error")}finally{k(!1)}},_=T=>{$({...Ae,[T.target.name]:T.target.value})},O=T=>{const ae=T.target.files[0];if(ae){const he=new FileReader;he.onloadend=()=>{$({...Ae,imageUrl:he.result}),Me(he.result)},he.readAsDataURL(ae)}else $({...Ae,imageUrl:""}),Me("")},Y=async T=>{T.preventDefault(),k(!0);const ae=Ke?`https://backend-saborbit.onrender.com/api/menuItems/${Ke._id}`:`https://backend-saborbit.onrender.com/api/chefs/${M._id}/menuItems`,he=Ke?"PUT":"POST";try{const we=await fetch(ae,{method:he,headers:{"Content-Type":"application/json"},body:JSON.stringify({...Ae,chefId:M._id})}),Xa=await we.json();we.ok?(E(Xa.message,"success"),z(),at(!1),$({name:"",description:"",price:"",category:"",imageUrl:""}),Te(null),Me("")):E(Xa.message||"Erro ao salvar item do cardápio.","error")}catch(we){console.error("Erro de rede:",we),E("Erro de rede. Tente novamente.","error")}finally{k(!1)}},ne=async T=>{if(confirm("Tem certeza que deseja excluir este item?")){k(!0);try{const ae=await fetch(`https://backend-saborbit.onrender.com/api/menuItems/${T}`,{method:"DELETE"}),he=await ae.json();ae.ok?(E(he.message,"success"),z()):E(he.message||"Erro ao excluir item do cardápio.","error")}catch(ae){console.error("Erro de rede:",ae),E("Erro de rede. Tente novamente.","error")}finally{k(!1)}}},V=(T=null)=>{Te(T),T?($({name:T.name,description:T.description,price:T.price,category:T.category,imageUrl:T.imageUrl||""}),Me(T.imageUrl||"")):($({name:"",description:"",price:"",category:"",imageUrl:""}),Me("")),at(!0)},Fe=async()=>{k(!0);try{const T=await fetch(`https://backend-saborbit.onrender.com/api/chefs/${M._id}/orders`),ae=await T.json();T.ok?Qe(ae.orders):(Qe([]),E(ae.message||"Nenhum pedido encontrado.","info"))}catch(T){console.error("Erro ao buscar pedidos:",T),E("Erro ao buscar pedidos.","error")}finally{k(!1)}},be=async(T,ae)=>{k(!0);try{const he=await fetch(`https://backend-saborbit.onrender.com/api/orders/${T}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:ae})}),we=await he.json();he.ok?(E(we.message,"success"),Fe()):E(we.message||"Erro ao atualizar status do pedido.","error")}catch(he){console.error("Erro de rede:",he),E("Erro de rede. Tente novamente.","error")}finally{k(!1)}},_t=T=>{Re(T),C(!0)},Ol=async()=>{A(!0);const T=`${window.location.origin}/public-menu/${M._id}`;try{const ae=await fetch("https://backend-saborbit.onrender.com/api/generate-qr",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:T})}),he=await ae.json();ae.ok?(Se(he.qrCodeUrl),E("QR Code gerado com sucesso!","success")):E(he.message||"Erro ao gerar QR Code.","error")}catch(ae){console.error("Erro de rede:",ae),E("Erro de rede. Tente novamente.","error")}finally{A(!1)}},Na=async T=>{k(!0);try{const he=await fetch(`https://backend-saborbit.onrender.com/api${T==="mensal"?"/planMensal":"/planAnual"}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({emailChef:M.email})}),we=await he.text();if(he.ok)window.location.href=we;else{const Xa=await he.json();E(Xa.message||`Erro ao assinar plano ${T}.`,"error")}}catch(ae){console.error("Erro de rede:",ae),E("Erro de rede. Tente novamente.","error")}finally{k(!1)}};if(!M)return r.jsx("div",{className:"page-container",children:r.jsx("p",{className:"text-gray-700 text-lg",children:"Você precisa estar logado para acessar o Dashboard."})});const Ct=j.planoAtivo&&(!j.dataExpiracaoPlano||new Date(j.dataExpiracaoPlano)>new Date),Qa=j.dataExpiracaoPlano?new Date(j.dataExpiracaoPlano).toLocaleDateString("pt-BR"):"N/A";return r.jsx("div",{className:"dashboard-container",children:r.jsxs("div",{className:"main-content",children:[r.jsx("h1",{className:"dashboard-heading",children:"Dashboard do Chef"}),r.jsxs("div",{className:"dashboard-card",children:[r.jsxs("div",{className:"tab-buttons-container",children:[r.jsx(Dn,{label:"Perfil",active:R==="profile",onClick:()=>G("profile")}),r.jsx(Dn,{label:"Cardápio",active:R==="menu",onClick:()=>G("menu")}),r.jsx(Dn,{label:"Pedidos",active:R==="orders",onClick:()=>G("orders")}),r.jsx(Dn,{label:"QR Code",active:R==="qr",onClick:()=>G("qr")}),r.jsx(Dn,{label:"Planos",active:R==="plans",onClick:()=>G("plans")})]}),R==="profile"&&r.jsxs("div",{className:"profile-section",children:[r.jsx("h2",{className:"section-heading",children:"Meu Perfil"}),r.jsxs("div",{className:"profile-grid",children:[r.jsxs("div",{className:"profile-avatar-container",children:[r.jsx("div",{className:"profile-avatar",children:j.profilePicture?r.jsx("img",{src:j.profilePicture,alt:"Foto de Perfil",className:"profile-image"}):r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"profile-icon",viewBox:"0 0 20 20",fill:"currentColor",children:r.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a4 4 0 00-4 4v1a2 2 0 002 2h8a2 2 0 002-2v-1a4 4 0 00-4-4h-4z",clipRule:"evenodd"})})}),r.jsx("p",{className:"profile-restaurant-name",children:j.restaurantName}),r.jsx("p",{className:"profile-email",children:j.email})]}),r.jsxs("div",{className:"profile-info",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Nome:"})," ",D?r.jsx(je,{name:"name",value:j.name,onChange:B}):j.name]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Telefone:"})," ",D?r.jsx(je,{name:"phone",value:j.phone,onChange:B}):j.phone]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Endereço:"})," ",D?r.jsx(je,{name:"address",value:j.address,onChange:B}):j.address]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Foto de Perfil:"})," ",D?r.jsx(je,{type:"file",name:"profilePicture",onFileChange:oe,filePreview:J}):j.profilePicture&&r.jsx("a",{href:j.profilePicture,target:"_blank",rel:"noopener noreferrer",children:"Ver Imagem"})||"N/A"]}),r.jsxs("p",{className:`profile-status ${Ct?"profile-status-active":"profile-status-inactive"}`,children:["Plano Ativo: ",Ct?"Sim":"Não"]}),r.jsxs("p",{className:"profile-expiration-date",children:["Data de Expiração: ",Qa]}),r.jsx("div",{className:"profile-actions",children:D?r.jsxs(r.Fragment,{children:[r.jsx(ze,{onClick:s,disabled:K,children:K?"Salvando...":"Salvar Alterações"}),r.jsx(ze,{onClick:()=>Z(!1),className:"btn-gray",children:"Cancelar"})]}):r.jsx(ze,{onClick:()=>Z(!0),children:"Editar Perfil"})})]})]})]}),R==="menu"&&r.jsxs("div",{className:"menu-section",children:[r.jsx("h2",{className:"section-heading",children:"Gerenciar Cardápio"}),r.jsx(ze,{onClick:()=>V(),className:"mb-6",children:"Adicionar Novo Item"}),K?r.jsx("p",{className:"loading-text",children:"Carregando itens do cardápio..."}):se.length===0?r.jsx("p",{className:"empty-state-text",children:"Nenhum item no cardápio ainda. Adicione um!"}):r.jsx("div",{className:"menu-grid",children:se.map(T=>r.jsxs("div",{className:"menu-item",children:[r.jsxs("div",{children:[T.imageUrl?r.jsx("img",{src:T.imageUrl,alt:T.name,className:"menu-item-image"}):r.jsx("div",{className:"menu-item-image-placeholder",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"menu-item-icon",viewBox:"0 0 20 20",fill:"currentColor",children:r.jsx("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-4 3 3 5-5V15z",clipRule:"evenodd"})})}),r.jsx("h3",{className:"menu-item-name",children:T.name}),r.jsx("p",{className:"menu-item-description",children:T.description}),r.jsxs("p",{className:"menu-item-price",children:["R$ ",T.price.toFixed(2)]}),r.jsxs("p",{className:"menu-item-category",children:["Categoria: ",T.category]})]}),r.jsxs("div",{className:"menu-item-actions",children:[r.jsx(ze,{onClick:()=>V(T),className:"btn-yellow btn-sm",children:"Editar"}),r.jsx(ze,{onClick:()=>ne(T._id),className:"btn-red btn-sm",children:"Excluir"})]})]},T._id))})]}),_e&&r.jsx("div",{className:"modal-overlay",children:r.jsxs("div",{className:"modal-content",children:[r.jsx("h3",{className:"modal-heading",children:Ke?"Editar Item do Cardápio":"Adicionar Novo Item"}),r.jsxs("form",{onSubmit:Y,children:[r.jsx(je,{label:"Nome",name:"name",value:Ae.name,onChange:_,required:!0}),r.jsx(je,{label:"Descrição",name:"description",value:Ae.description,onChange:_}),r.jsx(je,{label:"Preço",type:"number",name:"price",value:Ae.price,onChange:_,required:!0}),r.jsx(je,{label:"Categoria",name:"category",value:Ae.category,onChange:_}),r.jsx(je,{label:"Imagem do Item (Opcional)",type:"file",name:"imageUrl",onFileChange:O,filePreview:Je}),r.jsxs("div",{className:"modal-actions",children:[r.jsx(ze,{type:"button",onClick:()=>at(!1),className:"btn-gray",children:"Cancelar"}),r.jsx(ze,{type:"submit",disabled:K,children:K?"Salvando...":"Salvar"})]})]})]})}),R==="orders"&&r.jsxs("div",{className:"orders-section",children:[r.jsx("h2",{className:"section-heading",children:"Meus Pedidos"}),K?r.jsx("p",{className:"loading-text",children:"Carregando pedidos..."}):Ge.length===0?r.jsx("p",{className:"empty-state-text",children:"Nenhum pedido recebido ainda."}):r.jsx("div",{className:"orders-table-container",children:r.jsxs("table",{className:"orders-table",children:[r.jsx("thead",{className:"table-header",children:r.jsxs("tr",{children:[r.jsx("th",{className:"table-th",children:"ID do Pedido"}),r.jsx("th",{className:"table-th",children:"Cliente"}),r.jsx("th",{className:"table-th",children:"Total"}),r.jsx("th",{className:"table-th",children:"Status"}),r.jsx("th",{className:"table-th",children:"Data"}),r.jsx("th",{className:"table-th",children:"Ações"})]})}),r.jsx("tbody",{children:Ge.map(T=>r.jsxs("tr",{className:"table-row",children:[r.jsxs("td",{className:"table-td",children:[T._id.substring(0,8),"..."]}),r.jsx("td",{className:"table-td",children:T.clientName}),r.jsxs("td",{className:"table-td",children:["R$ ",T.total.toFixed(2)]}),r.jsx("td",{className:"table-td",children:r.jsx("span",{className:`status-badge ${T.status==="pending"?"status-pending":T.status==="preparing"?"status-preparing":T.status==="delivered"?"status-delivered":""}`,children:T.status})}),r.jsx("td",{className:"table-td",children:new Date(T.orderDate).toLocaleDateString("pt-BR")}),r.jsxs("td",{className:"table-td table-actions",children:[r.jsx(ze,{onClick:()=>_t(T),className:"btn-blue btn-xs",children:"Ver Detalhes"}),T.status==="pending"&&r.jsx(ze,{onClick:()=>be(T._id,"preparing"),className:"btn-indigo btn-xs",children:"Marcar como Preparando"}),T.status==="preparing"&&r.jsx(ze,{onClick:()=>be(T._id,"delivered"),className:"btn-green btn-xs",children:"Marcar como Entregue"})]})]},T._id))})]})})]}),Dt&&H&&r.jsx("div",{className:"modal-overlay",children:r.jsxs("div",{className:"modal-content",children:[r.jsxs("h3",{className:"modal-heading",children:["Detalhes do Pedido #",H._id.substring(0,8)]}),r.jsxs("div",{className:"order-details-content",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Cliente:"})," ",H.clientName]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Telefone:"})," ",H.clientPhone]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Endereço:"})," ",H.clientAddress||"Não informado"]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Observações:"})," ",H.observations||"N/A"]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Status:"})," ",r.jsx("span",{className:`status-badge ${H.status==="pending"?"status-pending":H.status==="preparing"?"status-preparing":H.status==="delivered"?"status-delivered":""}`,children:H.status})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Total:"})," R$ ",H.total.toFixed(2)]}),r.jsx("h4",{className:"order-items-heading",children:"Itens:"}),r.jsx("ul",{className:"order-items-list",children:H.items.map((T,ae)=>r.jsxs("li",{className:"order-item-list-item",children:[T.quantity,"x ",T.itemName," (R$ ",T.unitPrice.toFixed(2)," cada)",T.observations&&r.jsxs("span",{className:"order-item-observations",children:["(Obs: ",T.observations,")"]})]},ae))})]}),r.jsx("div",{className:"modal-actions",children:r.jsx(ze,{onClick:()=>C(!1),className:"btn-blue",children:"Fechar"})})]})}),R==="qr"&&r.jsxs("div",{className:"qr-section",children:[r.jsx("h2",{className:"section-heading",children:"Gerar QR Code do Cardápio"}),r.jsx("p",{className:"qr-description",children:"Compartilhe este QR Code com seus clientes para que eles acessem seu cardápio online!"}),r.jsx(ze,{onClick:Ol,disabled:b,children:b?"Gerando...":"Gerar QR Code"}),ce&&r.jsxs("div",{className:"qr-display-container",children:[r.jsx("p",{className:"qr-display-text",children:"Seu QR Code:"}),r.jsx("img",{src:ce,alt:"QR Code do Cardápio",className:"qr-image"}),r.jsxs("p",{className:"qr-url-text",children:["URL do seu cardápio: ",r.jsx("a",{href:`${window.location.origin}/public-menu/${M._id}`,target:"_blank",rel:"noopener noreferrer",className:"qr-url-link",children:`${window.location.origin}/public-menu/${M._id}`})]})]})]}),R==="plans"&&r.jsxs("div",{className:"plans-section",children:[r.jsx("h2",{className:"section-heading",children:"Meus Planos de Assinatura"}),r.jsxs("div",{className:"plan-status-card",children:[r.jsxs("p",{className:`plan-status-text ${Ct?"plan-status-active":"plan-status-inactive"}`,children:["Status do Plano: ",Ct?"Ativo":"Inativo"]}),r.jsxs("p",{className:"plan-expiration-text",children:["Data de Expiração: ",Qa]}),!Ct&&r.jsx("p",{className:"plan-inactive-message",children:"Seu plano está inativo ou expirou. Por favor, renove para continuar usando todos os recursos."})]}),r.jsxs("div",{className:"plans-grid",children:[r.jsxs("div",{className:"plan-card plan-card-monthly",children:[r.jsx("h3",{className:"plan-title",children:"Plano Mensal"}),r.jsxs("p",{className:"plan-price",children:["R$ 59,90",r.jsx("span",{className:"plan-price-suffix",children:"/mês"})]}),r.jsx("p",{className:"plan-description",children:"Ideal para começar e testar a plataforma."}),r.jsxs("ul",{className:"plan-features-list",children:[r.jsxs("li",{className:"plan-feature-item",children:[r.jsx("span",{className:"plan-feature-icon",children:"✓"})," Cardápio Online Personalizado"]}),r.jsxs("li",{className:"plan-feature-item",children:[r.jsx("span",{className:"plan-feature-icon",children:"✓"})," Gerenciamento de Pedidos"]}),r.jsxs("li",{className:"plan-feature-item",children:[r.jsx("span",{className:"plan-feature-icon",children:"✓"})," Geração de QR Code"]}),r.jsxs("li",{className:"plan-feature-item",children:[r.jsx("span",{className:"plan-feature-icon",children:"✓"})," Suporte Básico"]})]}),r.jsx(ze,{onClick:()=>Na("mensal"),disabled:K,className:"w-full",children:K?"Processando...":"Assinar Plano Mensal"})]}),r.jsxs("div",{className:"plan-card plan-card-annual",children:[r.jsx("span",{className:"plan-badge",children:"MAIS POPULAR!"}),r.jsx("h3",{className:"plan-title",children:"Plano Anual"}),r.jsxs("p",{className:"plan-price",children:["R$ 599,00",r.jsx("span",{className:"plan-price-suffix",children:"/ano"})]}),r.jsx("p",{className:"plan-description",children:"Economize e tenha acesso completo por 1 ano."}),r.jsxs("ul",{className:"plan-features-list",children:[r.jsxs("li",{className:"plan-feature-item",children:[r.jsx("span",{className:"plan-feature-icon",children:"✓"})," Todos os recursos do Plano Mensal"]}),r.jsxs("li",{className:"plan-feature-item",children:[r.jsx("span",{className:"plan-feature-icon",children:"✓"})," Suporte Prioritário"]}),r.jsxs("li",{className:"plan-feature-item",children:[r.jsx("span",{className:"plan-feature-icon",children:"✓"})," Novas funcionalidades exclusivas"]}),r.jsxs("li",{className:"plan-feature-item",children:[r.jsx("span",{className:"plan-feature-icon",children:"✓"})," Renovação automática opcional"]})]}),r.jsx(ze,{onClick:()=>Na("anual"),disabled:K,className:"w-full btn-purple",children:K?"Processando...":"Assinar Plano Anual"})]})]})]})]})]})})},Dn=({label:E,active:M,onClick:U})=>r.jsx("button",{onClick:U,className:`tab-button ${M?"tab-button-active":""}`,children:E}),J0=({chefId:E,showMessage:M})=>{const[U,g]=F.useState(null),[R,G]=F.useState([]),[K,k]=F.useState(!0),[j,x]=F.useState(""),[D,Z]=F.useState([]),[J,ie]=F.useState(!1),[se,le]=F.useState({clientName:"",clientPhone:"",clientAddress:"",observations:""}),[_e,at]=F.useState(!1),[Ke,Te]=F.useState("");F.useEffect(()=>{E&&(async()=>{k(!0),x("");try{const H=await fetch(`https://backend-saborbit.onrender.com/api/public/menu/${E}`),Re=await H.json();if(!H.ok)throw new Error(Re.message||"Erro ao buscar informações do restaurante.");g(Re);const ce=await fetch(`https://backend-saborbit.onrender.com/api/public/menu/${E}/items`),Se=await ce.json();if(!ce.ok)throw new Error(Se.message||"Erro ao buscar itens do cardápio.");G(Se.menuItems)}catch(H){console.error("Erro ao carregar cardápio público:",H),x(H.message||"Não foi possível carregar o cardápio. O restaurante pode estar inativo ou não existe.")}finally{k(!1)}})()},[E]);const Ae=C=>{Z(H=>H.find(ce=>ce.menuItemId===C._id)?H.map(ce=>ce.menuItemId===C._id?{...ce,quantity:ce.quantity+1}:ce):[...H,{menuItemId:C._id,name:C.name,price:C.price,quantity:1,observations:""}]),M(`${C.name} adicionado ao carrinho!`,"success")},$=(C,H)=>{Z(Re=>Re.map(ce=>ce.menuItemId===C?{...ce,quantity:Math.max(1,H)}:ce).filter(ce=>ce.quantity>0))},Je=(C,H)=>{Z(Re=>Re.map(ce=>ce.menuItemId===C?{...ce,observations:H}:ce))},Me=C=>{Z(H=>H.filter(Re=>Re.menuItemId!==C)),M("Item removido do carrinho.","info")},Ge=()=>D.reduce((C,H)=>C+H.price*H.quantity,0),Qe=C=>{le({...se,[C.target.name]:C.target.value})},Dt=async C=>{C.preventDefault(),at(!0),Te("");try{const H=D.map(b=>({menuItemId:b.menuItemId,quantity:b.quantity,observations:b.observations})),Re={chefId:E,items:H,clientName:se.clientName,clientPhone:se.clientPhone,clientAddress:se.clientAddress,observations:se.observations},ce=await fetch("https://backend-saborbit.onrender.com/api/public/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Re)}),Se=await ce.json();ce.ok?(M("Pedido realizado com sucesso!","success"),Te(Se.whatsappUrl),Z([]),ie(!1),le({clientName:"",clientPhone:"",clientAddress:"",observations:""})):M(Se.message||"Erro ao realizar pedido.","error")}catch(H){console.error("Erro de rede ao fazer pedido:",H),M("Erro de rede. Tente novamente.","error")}finally{at(!1)}};return K?r.jsx("div",{className:"page-container",children:r.jsx("p",{className:"loading-text",children:"Carregando cardápio..."})}):j?r.jsx("div",{className:"error-page-container",children:r.jsxs("div",{className:"error-card",children:[r.jsx("h2",{className:"error-heading",children:"Erro ao Carregar Cardápio"}),r.jsx("p",{className:"error-message",children:j}),r.jsx("p",{className:"error-suggestion",children:"Por favor, verifique o link ou tente novamente mais tarde."})]})}):U?r.jsxs("div",{className:"public-menu-page",children:[r.jsxs("header",{className:"public-header",children:[r.jsx("h1",{className:"public-restaurant-name",children:U.restaurantName}),r.jsx("p",{className:"public-address",children:U.address}),r.jsxs("p",{className:"public-phone",children:["Telefone: ",U.phone]}),U.profilePicture&&r.jsx("img",{src:U.profilePicture,alt:"Logo do Restaurante",className:"public-logo"})]}),r.jsxs("main",{className:"public-main-grid",children:[r.jsxs("section",{className:"public-menu-section",children:[r.jsx("h2",{className:"public-section-heading",children:"Nosso Cardápio"}),R.length===0?r.jsx("p",{className:"empty-state-text",children:"Nenhum item disponível no cardápio no momento."}):r.jsx("div",{className:"public-menu-grid",children:R.map(C=>r.jsxs("div",{className:"public-menu-item",children:[r.jsxs("div",{children:[C.imageUrl?r.jsx("img",{src:C.imageUrl,alt:C.name,className:"public-menu-item-image"}):r.jsx("div",{className:"public-menu-item-image-placeholder",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"public-menu-item-icon",viewBox:"0 0 20 20",fill:"currentColor",children:r.jsx("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-4 3 3 5-5V15z",clipRule:"evenodd"})})}),r.jsx("h3",{className:"public-menu-item-name",children:C.name}),r.jsx("p",{className:"public-menu-item-description",children:C.description}),r.jsxs("p",{className:"public-menu-item-price",children:["R$ ",C.price.toFixed(2)]}),r.jsxs("p",{className:"public-menu-item-category",children:["Categoria: ",C.category]})]}),r.jsx(ze,{onClick:()=>Ae(C),className:"public-add-to-cart-btn",children:"Adicionar ao Carrinho"})]},C._id))})]}),r.jsxs("aside",{className:"public-cart-aside",children:[r.jsx("h2",{className:"public-cart-heading",children:"Seu Pedido"}),D.length===0?r.jsx("p",{className:"empty-state-text",children:"Seu carrinho está vazio."}):r.jsxs(r.Fragment,{children:[r.jsx("ul",{className:"cart-items-list",children:D.map(C=>r.jsxs("li",{className:"cart-item",children:[r.jsxs("div",{className:"cart-item-details",children:[r.jsx("p",{className:"cart-item-name",children:C.name}),r.jsxs("p",{className:"cart-item-price",children:["R$ ",C.price.toFixed(2)," x ",C.quantity]}),r.jsx(je,{type:"text",placeholder:"Observações do item (ex: sem cebola)",value:C.observations,onChange:H=>Je(C.menuItemId,H.target.value),className:"cart-item-observations-input"})]}),r.jsxs("div",{className:"cart-item-controls",children:[r.jsx("button",{onClick:()=>$(C.menuItemId,C.quantity-1),className:"cart-control-btn cart-control-btn-minus",children:"-"}),r.jsx("span",{className:"cart-item-quantity",children:C.quantity}),r.jsx("button",{onClick:()=>$(C.menuItemId,C.quantity+1),className:"cart-control-btn cart-control-btn-plus",children:"+"}),r.jsx("button",{onClick:()=>Me(C.menuItemId),className:"cart-control-btn cart-control-btn-remove",children:"×"})]})]},C.menuItemId))}),r.jsxs("div",{className:"cart-total",children:["Total: R$ ",Ge().toFixed(2)]}),r.jsx(ze,{onClick:()=>ie(!0),className:"public-checkout-btn",children:"Finalizar Pedido"})]}),J&&r.jsx("div",{className:"modal-overlay",children:r.jsxs("div",{className:"modal-content",children:[r.jsx("h3",{className:"modal-heading",children:"Seus Dados para o Pedido"}),r.jsxs("form",{onSubmit:Dt,children:[r.jsx(je,{label:"Seu Nome",name:"clientName",value:se.clientName,onChange:Qe,required:!0}),r.jsx(je,{label:"Seu Telefone (WhatsApp)",name:"clientPhone",value:se.clientPhone,onChange:Qe,placeholder:"Ex: 5511999998888",required:!0}),r.jsx(je,{label:"Seu Endereço (Opcional)",name:"clientAddress",value:se.clientAddress,onChange:Qe,placeholder:"Rua, número, bairro, cidade"}),r.jsx(je,{label:"Observações Gerais do Pedido (Opcional)",name:"observations",value:se.observations,onChange:Qe}),r.jsxs("div",{className:"modal-actions",children:[r.jsx(ze,{type:"button",onClick:()=>ie(!1),className:"btn-gray",children:"Cancelar"}),r.jsx(ze,{type:"submit",disabled:_e,children:_e?"Enviando...":"Enviar Pedido"})]})]}),Ke&&r.jsxs("div",{className:"whatsapp-link-container",children:[r.jsx("p",{className:"whatsapp-link-text",children:"Pedido enviado! Clique para abrir no WhatsApp:"}),r.jsx("a",{href:Ke,target:"_blank",rel:"noopener noreferrer",className:"whatsapp-link",children:"Abrir WhatsApp com o Pedido"})]})]})})]})]})]}):r.jsx("div",{className:"page-container",children:r.jsx("p",{className:"loading-text",children:"Chef/Restaurante não encontrado."})})},k0=()=>{const[E,M]=F.useState(JSON.parse(localStorage.getItem("chef"))||null),[U,g]=F.useState(window.location.pathname),[R,G]=F.useState(""),[K,k]=F.useState("info");F.useEffect(()=>{const le=()=>{g(window.location.pathname)};return window.addEventListener("popstate",le),()=>window.removeEventListener("popstate",le)},[]);const j=le=>{window.history.pushState({},"",le),g(le)},x=le=>{M(le),localStorage.setItem("chef",JSON.stringify(le))},D=()=>{M(null),localStorage.removeItem("chef"),j("/login"),J("Você foi desconectado.","info")},Z=le=>{M(le),localStorage.setItem("chef",JSON.stringify(le))},J=(le,_e)=>{G(le),k(_e),setTimeout(()=>{G("")},5e3)},ie=()=>{G("")},se=()=>{const le=U.split("/").filter(Boolean);switch(le[0]){case"register":return r.jsx(L0,{navigate:j,showMessage:J});case"login":return r.jsx(V0,{navigate:j,showMessage:J});case"dashboard":return r.jsx(K0,{showMessage:J});case"public-menu":return le[1]?r.jsx(J0,{chefId:le[1],showMessage:J}):r.jsx("div",{className:"page-container",children:r.jsx("p",{className:"empty-state-text",children:"URL de cardápio público inválida."})});default:return r.jsxs("div",{className:"welcome-page-container",children:[r.jsx("h1",{className:"welcome-heading",children:"Bem-vindo ao SaborBIT!"}),r.jsx("p",{className:"welcome-description",children:"A plataforma definitiva para chefs e restaurantes gerenciarem seus cardápios e pedidos online."}),r.jsxs("div",{className:"welcome-actions",children:[r.jsx(ze,{onClick:()=>j("/login"),className:"welcome-btn-login",children:"Entrar como Chef"}),r.jsx(ze,{onClick:()=>j("/register"),className:"welcome-btn-register",children:"Quero ser um Chef SaborBIT"})]}),r.jsx("p",{className:"welcome-footer-text",children:"Para acessar um cardápio público, utilize a URL fornecida pelo seu chef (ex: /public-menu/ID_DO_CHEF)."})]})}};return r.jsxs(Lu.Provider,{value:{chef:E,login:x,logout:D,updateChef:Z},children:[r.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap');

        :root {
            --primary-blue: #2563eb; /* blue-600 */
            --primary-blue-dark: #1d4ed8; /* blue-700 */
            --secondary-purple: #8b5cf6; /* purple-500 */
            --secondary-purple-dark: #7c3aed; /* purple-600 */
            --accent-green: #22c55e; /* green-500 */
            --accent-green-dark: #16a34a; /* green-600 */
            --accent-red: #ef4444; /* red-500 */
            --accent-red-dark: #dc2626; /* red-600 */
            --accent-yellow: #f59e0b; /* yellow-500 */
            --accent-yellow-dark: #d97706; /* yellow-600 */
            --gray-light: #f8fafc; /* gray-50 */
            --gray-medium: #e5e7eb; /* gray-200 */
            --gray-dark: #6b7280; /* gray-500 */
            --text-color: #1f2937; /* gray-800 */
            --text-light: #4b5563; /* gray-600 */
        }

        body {
          font-family: 'Inter', sans-serif;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          background-color: var(--gray-light);
          color: var(--text-color);
        }

        .container {
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          padding: 0 1rem; /* Adicionado padding para telas menores */
        }

        /* Estilos para o input de número (para remover setas) */
        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type=number] {
          -moz-appearance: textfield;
        }

        /* Reusable Components Styles */
        .message-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(107, 114, 128, 0.5); /* gray-600 with opacity */
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 50;
            padding: 1rem;
        }

        .message-modal-content {
            background-color: white;
            border-radius: 0.5rem;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1); /* shadow-xl */
            padding: 1.5rem;
            max-width: 24rem; /* max-w-sm */
            width: 100%;
        }

        .message-alert {
            border-left-width: 4px;
            padding: 1rem;
            border-radius: 0.25rem;
        }

        .message-alert-success {
            background-color: #dcfce7; /* green-100 */
            border-color: #4ade80; /* green-400 */
            color: #15803d; /* green-700 */
        }

        .message-alert-error {
            background-color: #fee2e2; /* red-100 */
            border-color: #f87171; /* red-400 */
            color: #b91c1c; /* red-700 */
        }

        .message-modal-actions {
            margin-top: 1rem;
            display: flex;
            justify-content: flex-end;
        }

        .message-button {
            padding: 0.5rem 1rem;
            background-color: var(--primary-blue);
            color: white;
            border-radius: 0.375rem;
            font-weight: 700;
            transition: background-color 0.15s ease-in-out;
            border: none; /* Adicionado */
            cursor: pointer; /* Adicionado */
        }

        .message-button:hover {
            background-color: var(--primary-blue-dark);
        }

        .input-group {
            margin-bottom: 1rem;
        }

        .input-label {
            display: block;
            color: var(--text-light);
            font-size: 0.875rem; /* text-sm */
            font-weight: 700;
            margin-bottom: 0.5rem;
        }

        .input-field {
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow */
            appearance: none;
            border: 1px solid #d1d5db; /* border-gray-300 */
            border-radius: 0.5rem;
            width: 100%;
            padding: 0.5rem 0.75rem;
            color: var(--text-color);
            line-height: 1.25;
            transition: all 0.15s ease-in-out;
        }

        .input-field:focus {
            outline: none;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5); /* ring-blue-500 */
            border-color: transparent;
        }

        .file-preview-container {
            margin-top: 0.5rem;
            border: 1px solid var(--gray-medium);
            border-radius: 0.5rem;
            padding: 0.5rem;
            display: inline-block; /* Para que o container se ajuste à imagem */
        }

        .file-preview-image {
            max-width: 100px;
            max-height: 100px;
            border-radius: 0.25rem;
            object-fit: cover;
        }

        .btn {
            background-color: var(--primary-blue);
            color: white;
            font-weight: 700;
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            transition: background-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
            cursor: pointer;
            border: none;
        }

        .btn:hover {
            background-color: var(--primary-blue-dark);
        }

        .btn:focus {
            outline: none;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5), 0 0 0 2px rgba(0, 0, 0, 0.06); /* focus:ring-blue-500 focus:ring-offset-2 */
        }

        .btn-disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .btn-red {
            background-color: var(--accent-red);
        }
        .btn-red:hover {
            background-color: var(--accent-red-dark);
        }

        .btn-gray {
            background-color: var(--gray-dark);
        }
        .btn-gray:hover {
            background-color: #4b5563; /* gray-700 */
        }

        .btn-yellow {
            background-color: var(--accent-yellow);
        }
        .btn-yellow:hover {
            background-color: var(--accent-yellow-dark);
        }

        .btn-indigo {
            background-color: #6366f1; /* indigo-500 */
        }
        .btn-indigo:hover {
            background-color: #4f46e5; /* indigo-600 */
        }

        .btn-green {
            background-color: var(--accent-green);
        }
        .btn-green:hover {
            background-color: var(--accent-green-dark);
        }

        .btn-sm {
            padding: 0.25rem 0.75rem;
            font-size: 0.875rem; /* text-sm */
        }

        .btn-xs {
            padding: 0.125rem 0.5rem;
            font-size: 0.75rem; /* text-xs */
        }

        .btn-purple {
            background-color: var(--secondary-purple);
        }
        .btn-purple:hover {
            background-color: var(--secondary-purple-dark);
        }

        /* Navbar Styles */
        .navbar {
            background-image: linear-gradient(to right, var(--primary-blue), var(--secondary-purple-dark));
            padding: 1rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-lg */
        }

        .navbar-container {
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 1rem; /* Adicionado padding para telas menores */
        }

        .navbar-brand {
            color: white;
            font-size: 1.875rem; /* text-3xl */
            font-weight: 800;
            letter-spacing: -0.025em; /* tracking-tight */
            text-decoration: none;
            white-space: nowrap; /* Evita quebra de linha */
        }

        .navbar-links {
            display: flex;
            align-items: center;
            gap: 1rem; /* space-x-4 */
        }

        .navbar-link {
            color: white;
            text-decoration: none;
            font-size: 1.125rem; /* text-lg */
            transition: color 0.15s ease-in-out;
            white-space: nowrap; /* Evita quebra de linha */
        }

        .navbar-link:hover {
            color: #bfdbfe; /* blue-200 */
        }

        /* Page Containers */
        .page-container {
            min-height: calc(100vh - 64px); /* Full height minus navbar height */
            background-color: #f3f4f6; /* gray-100 */
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
        }

        .form-card {
            background-color: white;
            padding: 2rem;
            border-radius: 0.75rem; /* rounded-xl */
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1); /* shadow-2xl */
            width: 100%;
            max-width: 28rem; /* max-w-md */
        }

        .form-heading {
            font-size: 2.25rem; /* text-4xl */
            font-weight: 800;
            text-align: center;
            color: var(--text-color);
            margin-bottom: 2rem;
        }
        @media (max-width: 640px) { /* Pequenas telas */
            .form-heading {
                font-size: 1.75rem; /* text-3xl */
            }
        }

        .form-footer-text {
            text-align: center;
            color: var(--text-light);
            font-size: 0.875rem; /* text-sm */
            margin-top: 1.5rem;
        }

        .form-footer-link {
            color: var(--primary-blue);
            text-decoration: none;
            font-weight: 600;
        }

        .form-footer-link:hover {
            text-decoration: underline;
        }

        /* Dashboard Styles */
        .dashboard-container {
            min-height: calc(100vh - 64px);
            background-color: var(--gray-light);
            display: flex;
            flex-direction: column;
        }

        .main-content {
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
            padding: 1.5rem;
            flex-grow: 1;
            width: 100%; /* Garante que o conteúdo ocupe a largura total disponível */
        }

        .dashboard-heading {
            font-size: 3rem; /* text-5xl */
            font-weight: 800;
            color: var(--text-color);
            text-align: center;
            margin-bottom: 2.5rem;
        }
        @media (max-width: 768px) { /* Telas médias e pequenas */
            .dashboard-heading {
                font-size: 2.25rem; /* text-4xl */
            }
        }
        @media (max-width: 480px) { /* Telas muito pequenas */
            .dashboard-heading {
                font-size: 1.75rem; /* text-3xl */
            }
        }

        .dashboard-card {
            background-color: white;
            border-radius: 0.75rem; /* rounded-xl */
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1); /* shadow-2xl */
            padding: 1.5rem;
            margin-bottom: 2rem;
        }

        .tab-buttons-container {
            display: flex;
            border-bottom: 1px solid var(--gray-medium);
            margin-bottom: 1.5rem;
            overflow-x: auto; /* Permite rolagem horizontal para tabs em telas pequenas */
            -webkit-overflow-scrolling: touch; /* Melhora a rolagem em iOS */
            white-space: nowrap; /* Evita quebra de linha das tabs */
        }

        .tab-button {
            padding: 0.75rem 1.5rem;
            font-size: 1.125rem; /* text-lg */
            font-weight: 600;
            border-top-left-radius: 0.5rem;
            border-top-right-radius: 0.5rem;
            transition: all 0.2s ease-in-out;
            cursor: pointer;
            border: none;
            background: transparent;
            flex-shrink: 0; /* Impede que os botões encolham */
        }
        @media (max-width: 640px) { /* Pequenas telas */
            .tab-button {
                font-size: 1rem; /* text-base */
                padding: 0.75rem 1rem;
            }
        }

        .tab-button-active {
            background-color: var(--primary-blue);
            color: white;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
        }

        .tab-button:not(.tab-button-active):hover {
            background-color: #f3f4f6; /* gray-100 */
        }

        .section-heading {
            font-size: 1.875rem; /* text-3xl */
            font-weight: 700;
            color: var(--text-color);
            margin-bottom: 1.5rem;
        }
        @media (max-width: 640px) { /* Pequenas telas */
            .section-heading {
                font-size: 1.5rem; /* text-2xl */
            }
        }

        /* Profile Section */
        .profile-section {
            /* No specific container styles, uses dashboard-card padding */
        }

        .profile-grid {
            display: grid;
            grid-template-columns: 1fr; /* Padrão para telas pequenas: uma coluna */
            gap: 1.5rem;
        }
        @media (min-width: 768px) { /* md breakpoint */
            .profile-grid {
                grid-template-columns: 1fr 1fr; /* Duas colunas em telas médias e maiores */
            }
        }

        .profile-avatar-container {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .profile-avatar {
            width: 8rem; /* w-32 */
            height: 8rem; /* h-32 */
            border-radius: 9999px; /* rounded-full */
            overflow: hidden;
            border: 4px solid #60a5fa; /* blue-400 */
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #e5e7eb; /* gray-200 */
            color: #6b7280; /* gray-600 */
            font-size: 3.75rem; /* text-6xl */
            font-weight: 700;
        }

        .profile-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .profile-icon {
            height: 5rem; /* h-20 */
            width: 5rem; /* w-20 */
            color: var(--gray-dark);
        }

        .profile-restaurant-name {
            font-size: 1.25rem; /* text-xl */
            font-weight: 600;
            color: var(--text-color);
        }
        @media (max-width: 640px) {
            .profile-restaurant-name {
                font-size: 1.125rem; /* text-lg */
            }
        }

        .profile-email {
            color: var(--text-light);
            font-size: 0.875rem; /* text-sm */
        }

        .profile-info {
            line-height: 1.5; /* space-y-4 */
        }

        .profile-info p {
            margin-bottom: 1rem;
        }

        .profile-status {
            font-weight: 700;
        }

        .profile-status-active {
            color: var(--accent-green-dark);
        }

        .profile-status-inactive {
            color: var(--accent-red-dark);
        }

        .profile-expiration-date {
            color: var(--text-light);
        }

        .profile-actions {
            display: flex;
            flex-wrap: wrap; /* Permite que os botões quebrem para a próxima linha */
            gap: 1rem; /* space-x-4 */
            margin-top: 1.5rem;
            justify-content: center; /* Centraliza botões em telas pequenas */
        }

        /* Menu Section */
        .menu-section {
            /* No specific container styles */
        }

        .menu-grid {
            display: grid;
            grid-template-columns: 1fr; /* Padrão para telas pequenas: uma coluna */
            gap: 1.5rem;
        }
        @media (min-width: 768px) { /* md breakpoint */
            .menu-grid {
                grid-template-columns: repeat(2, 1fr); /* Duas colunas em telas médias */
            }
        }
        @media (min-width: 1024px) { /* lg breakpoint */
            .menu-grid {
                grid-template-columns: repeat(3, 1fr); /* Três colunas em telas grandes */
            }
        }

        .menu-item {
            background-color: #f9fafb; /* gray-50 */
            border-radius: 0.5rem; /* rounded-lg */
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
            padding: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .menu-item-image {
            width: 100%;
            height: 10rem; /* h-40 */
            object-fit: cover;
            border-radius: 0.375rem; /* rounded-md */
            margin-bottom: 1rem;
        }

        .menu-item-image-placeholder {
            width: 100%;
            height: 10rem; /* h-40 */
            background-color: var(--gray-medium);
            border-radius: 0.375rem; /* rounded-md */
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--gray-dark);
        }

        .menu-item-icon {
            height: 4rem; /* h-16 */
            width: 4rem; /* w-16 */
        }

        .menu-item-name {
            font-size: 1.25rem; /* text-xl */
            font-weight: 600;
            color: var(--text-color);
            margin-bottom: 0.5rem;
        }

        .menu-item-description {
            color: var(--text-light);
            font-size: 0.875rem; /* text-sm */
            margin-bottom: 0.5rem;
        }

        .menu-item-price {
            color: var(--primary-blue);
            font-weight: 700;
            font-size: 1.125rem; /* text-lg */
            margin-bottom: 1rem;
        }

        .menu-item-category {
            color: var(--gray-dark);
            font-size: 0.75rem; /* text-xs */
        }

        .menu-item-actions {
            display: flex;
            flex-wrap: wrap; /* Permite que os botões quebrem */
            gap: 0.5rem; /* space-x-2 */
            margin-top: 1rem;
            justify-content: center; /* Centraliza botões em telas pequenas */
        }

        /* Modals (General) */
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(107, 114, 128, 0.5); /* gray-600 with opacity */
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 50;
            padding: 1rem;
        }

        .modal-content {
            background-color: white;
            border-radius: 0.5rem; /* rounded-lg */
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1); /* shadow-xl */
            padding: 1.5rem;
            max-width: 32rem; /* max-w-lg */
            width: 100%;
            max-height: 90vh; /* Limita a altura do modal */
            overflow-y: auto; /* Adiciona scroll se o conteúdo for muito grande */
        }
        @media (max-width: 640px) {
            .modal-content {
                padding: 1rem;
            }
        }

        .modal-heading {
            font-size: 1.5rem; /* text-2xl */
            font-weight: 700;
            color: var(--text-color);
            margin-bottom: 1.5rem;
        }
        @media (max-width: 640px) {
            .modal-heading {
                font-size: 1.25rem; /* text-xl */
            }
        }

        .modal-actions {
            display: flex;
            justify-content: flex-end;
            gap: 1rem; /* space-x-4 */
            margin-top: 1.5rem;
            flex-wrap: wrap; /* Permite que os botões quebrem */
        }

        /* Orders Section */
        .orders-section {
            /* No specific container styles */
        }

        .orders-table-container {
            overflow-x: auto; /* Essencial para tabelas responsivas */
            -webkit-overflow-scrolling: touch; /* Melhora a rolagem em iOS */
        }

        .orders-table {
            min-width: 600px; /* Largura mínima para a tabela */
            width: 100%; /* Ocupa 100% da largura disponível no contêiner */
            background-color: white;
            border-radius: 0.5rem; /* rounded-lg */
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
            border-collapse: collapse; /* Ensure borders collapse for clean table */
        }

        .table-header {
            background-color: var(--gray-medium);
        }

        .table-th {
            padding: 0.75rem 1rem;
            text-align: left;
            font-size: 0.875rem; /* text-sm */
            font-weight: 600;
            color: #374151; /* gray-700 */
            white-space: nowrap; /* Evita quebra de linha no cabeçalho */
        }
        @media (max-width: 640px) {
            .table-th {
                font-size: 0.75rem; /* text-xs */
                padding: 0.5rem 0.75rem;
            }
        }

        .table-row {
            border-bottom: 1px solid var(--gray-medium);
        }

        .table-row:hover {
            background-color: #f9fafb; /* gray-50 */
        }

        .table-td {
            padding: 0.75rem 1rem;
            color: var(--text-color);
            font-size: 0.875rem; /* text-sm */
            white-space: nowrap; /* Evita quebra de linha no conteúdo da célula */
        }
        @media (max-width: 640px) {
            .table-td {
                font-size: 0.75rem; /* text-xs */
                padding: 0.5rem 0.75rem;
            }
        }

        .status-badge {
            padding: 0.25rem 0.5rem;
            border-radius: 9999px; /* rounded-full */
            font-size: 0.75rem; /* text-xs */
            font-weight: 600;
            display: inline-block;
        }

        .status-pending {
            background-color: #fef3c7; /* yellow-100 */
            color: #92400e; /* yellow-800 */
        }

        .status-preparing {
            background-color: #e0f2fe; /* blue-100 */
            color: #1e40af; /* blue-800 */
        }

        .status-delivered {
            background-color: #d1fae5; /* green-100 */
            color: #065f46; /* green-800 */
        }

        .table-actions {
            display: flex;
            flex-wrap: wrap; /* Permite que os botões quebrem */
            gap: 0.5rem; /* space-x-2 */
            justify-content: center; /* Centraliza em telas pequenas */
        }

        /* Order Details Modal */
        .order-details-content {
            line-height: 1.5; /* space-y-4 */
            color: var(--text-light);
            font-size: 0.875rem; /* text-sm */
        }
        @media (max-width: 640px) {
            .order-details-content {
                font-size: 0.8rem; /* Ajuste para telas menores */
            }
        }

        .order-details-content p {
            margin-bottom: 0.5rem;
        }

        .order-items-heading {
            font-size: 1.25rem; /* text-xl */
            font-weight: 600;
            margin-top: 1rem;
        }
        @media (max-width: 640px) {
            .order-items-heading {
                font-size: 1rem; /* text-lg */
            }
        }

        .order-items-list {
            list-style: disc;
            list-style-position: inside;
            margin-left: 1rem; /* ml-4 */
        }

        .order-item-list-item {
            margin-bottom: 0.25rem;
        }

        .order-item-observations {
            font-size: 0.875rem; /* text-sm */
            color: var(--gray-dark);
            margin-left: 0.5rem;
        }

        /* QR Code Section */
        .qr-section {
            /* No specific container styles */
        }

        .qr-description {
            color: var(--text-light);
            margin-bottom: 1rem;
            text-align: center; /* Centraliza a descrição */
        }

        .qr-display-container {
            margin-top: 2rem;
            text-align: center;
            background-color: #f9fafb; /* gray-50 */
            padding: 1.5rem;
            border-radius: 0.5rem; /* rounded-lg */
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
        }
        @media (max-width: 640px) {
            .qr-display-container {
                padding: 1rem;
            }
        }

        .qr-display-text {
            color: var(--text-light);
            margin-bottom: 1rem;
        }

        .qr-image {
            margin-left: auto;
            margin-right: auto;
            border: 4px solid var(--gray-medium);
            border-radius: 0.5rem; /* rounded-lg */
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
            max-width: 250px;
            width: 100%; /* Garante que a imagem se ajuste ao contêiner */
            height: auto;
        }

        .qr-url-text {
            margin-top: 1rem;
            font-size: 0.875rem; /* text-sm */
            color: var(--gray-dark);
            word-break: break-all; /* break-words */
        }
        @media (max-width: 640px) {
            .qr-url-text {
                font-size: 0.75rem; /* text-xs */
            }
        }

        .qr-url-link {
            color: var(--primary-blue);
            text-decoration: none;
        }

        .qr-url-link:hover {
            text-decoration: underline;
        }

        /* Plans Section */
        .plans-section {
            /* No specific container styles */
        }

        .plan-status-card {
            background-color: #f9fafb; /* gray-50 */
            padding: 1.5rem;
            border-radius: 0.5rem; /* rounded-lg */
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
            margin-bottom: 1.5rem;
            text-align: center; /* Centraliza o texto */
        }
        @media (max-width: 640px) {
            .plan-status-card {
                padding: 1rem;
            }
        }

        .plan-status-text {
            font-size: 1.25rem; /* text-xl */
            font-weight: 600;
            margin-bottom: 0.5rem;
        }
        @media (max-width: 640px) {
            .plan-status-text {
                font-size: 1.125rem; /* text-lg */
            }
        }

        .plan-status-active {
            color: var(--accent-green-dark);
        }

        .plan-status-inactive {
            color: var(--accent-red-dark);
        }

        .plan-expiration-text {
            color: var(--text-light);
            font-size: 0.875rem; /* text-sm */
        }

        .plan-inactive-message {
            color: var(--accent-red);
            margin-top: 0.5rem;
            font-weight: 500;
            font-size: 0.875rem; /* text-sm */
        }

        .plans-grid {
            display: grid;
            grid-template-columns: 1fr; /* Padrão para telas pequenas: uma coluna */
            gap: 2rem; /* gap-8 */
        }
        @media (min-width: 768px) { /* md breakpoint */
            .plans-grid {
                grid-template-columns: repeat(2, 1fr); /* Duas colunas em telas médias e maiores */
            }
        }

        .plan-card {
            background-color: white;
            border-radius: 0.75rem; /* rounded-xl */
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            position: relative;
        }
        @media (max-width: 640px) {
            .plan-card {
                padding: 1rem;
            }
        }

        .plan-card-monthly {
            border: 1px solid #bfdbfe; /* blue-200 */
        }

        .plan-card-annual {
            border: 1px solid #ddd6fe; /* purple-200 */
        }

        .plan-badge {
            position: absolute;
            top: 0;
            right: 0;
            background-color: #facc15; /* yellow-400 */
            color: #78350f; /* yellow-900 */
            font-size: 0.75rem; /* text-xs */
            font-weight: 700;
            padding: 0.25rem 0.75rem;
            border-bottom-left-radius: 0.5rem;
            border-top-right-radius: 0.75rem;
        }

        .plan-title {
            font-size: 1.875rem; /* text-3xl */
            font-weight: 700;
            margin-bottom: 1rem;
        }
        @media (max-width: 640px) {
            .plan-title {
                font-size: 1.5rem; /* text-2xl */
            }
        }

        .plan-card-monthly .plan-title {
            color: #1e40af; /* blue-700 */
        }

        .plan-card-annual .plan-title {
            color: #6d28d9; /* purple-700 */
        }

        .plan-price {
            font-size: 3rem; /* text-5xl */
            font-weight: 800;
            color: var(--text-color);
            margin-bottom: 1rem;
        }
        @media (max-width: 640px) {
            .plan-price {
                font-size: 2.5rem; /* text-4xl */
            }
        }

        .plan-price-suffix {
            font-size: 1.25rem; /* text-xl */
            font-weight: 400;
            color: var(--text-light);
        }

        .plan-description {
            color: var(--text-light);
            margin-bottom: 1.5rem;
            font-size: 0.875rem; /* text-sm */
        }

        .plan-features-list {
            text-align: left;
            color: var(--text-light);
            line-height: 1.5; /* space-y-2 */
            margin-bottom: 2rem;
            font-size: 0.875rem; /* text-sm */
        }

        .plan-feature-item {
            display: flex;
            align-items: center;
            margin-bottom: 0.5rem;
        }

        .plan-feature-icon {
            color: var(--accent-green);
            margin-right: 0.5rem;
        }

        /* Public Menu Page Styles */
        .public-menu-page {
            min-height: 100vh;
            background-color: var(--gray-light);
            display: flex;
            flex-direction: column;
        }

        .public-header {
            background-image: linear-gradient(to right, var(--primary-blue), var(--secondary-purple-dark));
            padding: 1.5rem;
            color: white;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-lg */
            text-align: center;
        }
        @media (max-width: 640px) {
            .public-header {
                padding: 1rem;
            }
        }

        .public-restaurant-name {
            font-size: 3rem; /* text-5xl */
            font-weight: 800;
            letter-spacing: -0.025em; /* tracking-tight */
            margin-bottom: 0.5rem;
        }
        @media (max-width: 768px) {
            .public-restaurant-name {
                font-size: 2.25rem; /* text-4xl */
            }
        }
        @media (max-width: 480px) {
            .public-restaurant-name {
                font-size: 1.75rem; /* text-3xl */
            }
        }

        .public-address {
            font-size: 1.25rem; /* text-xl */
            font-weight: 300;
        }
        @media (max-width: 640px) {
            .public-address {
                font-size: 1rem; /* text-base */
            }
        }

        .public-phone {
            font-size: 1.125rem; /* text-lg */
            font-weight: 300;
        }
        @media (max-width: 640px) {
            .public-phone {
                font-size: 0.875rem; /* text-sm */
            }
        }

        .public-logo {
            margin-left: auto;
            margin-right: auto;
            margin-top: 1rem;
            width: 6rem; /* w-24 */
            height: 6rem; /* h-24 */
            border-radius: 9999px; /* rounded-full */
            border: 4px solid white;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
            object-fit: cover;
        }

        .public-main-grid {
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
            padding: 1.5rem;
            flex-grow: 1;
            display: grid;
            grid-template-columns: 1fr; /* Padrão para telas pequenas: uma coluna */
            gap: 2rem; /* gap-8 */
        }
        @media (min-width: 1024px) { /* lg breakpoint */
            .public-main-grid {
                grid-template-columns: 2fr 1fr; /* Duas colunas em telas grandes */
            }
        }
        @media (max-width: 640px) {
            .public-main-grid {
                padding: 1rem;
            }
        }

        .public-menu-section {
            background-color: white;
            border-radius: 0.75rem; /* rounded-xl */
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1); /* shadow-2xl */
            padding: 1.5rem;
        }
        @media (max-width: 640px) {
            .public-menu-section {
                padding: 1rem;
            }
        }

        .public-section-heading {
            font-size: 2.25rem; /* text-4xl */
            font-weight: 800;
            color: var(--text-color);
            margin-bottom: 2rem;
            text-align: center;
        }
        @media (max-width: 640px) {
            .public-section-heading {
                font-size: 1.75rem; /* text-3xl */
            }
        }

        .public-menu-grid {
            display: grid;
            grid-template-columns: 1fr; /* Padrão para telas pequenas: uma coluna */
            gap: 1.5rem;
        }
        @media (min-width: 768px) { /* md breakpoint */
            .public-menu-grid {
                grid-template-columns: repeat(2, 1fr); /* Duas colunas em telas médias */
            }
        }

        .public-menu-item {
            background-color: #f9fafb; /* gray-50 */
            border-radius: 0.5rem; /* rounded-lg */
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
            padding: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .public-menu-item-image {
            width: 100%;
            height: 10rem; /* h-40 */
            object-fit: cover;
            border-radius: 0.375rem; /* rounded-md */
            margin-bottom: 1rem;
        }

        .public-menu-item-image-placeholder {
            width: 100%;
            height: 10rem; /* h-40 */
            background-color: var(--gray-medium);
            border-radius: 0.375rem; /* rounded-md */
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--gray-dark);
        }

        .public-menu-item-icon {
            height: 4rem; /* h-16 */
            width: 4rem; /* w-16 */
        }

        .public-menu-item-name {
            font-size: 1.5rem; /* text-2xl */
            font-weight: 600;
            color: var(--text-color);
            margin-bottom: 0.5rem;
        }
        @media (max-width: 640px) {
            .public-menu-item-name {
                font-size: 1.25rem; /* text-xl */
            }
        }

        .public-menu-item-description {
            color: var(--text-light);
            font-size: 0.875rem; /* text-sm */
            margin-bottom: 0.5rem;
        }

        .public-menu-item-price {
            color: var(--primary-blue);
            font-weight: 700;
            font-size: 1.25rem; /* text-xl */
            margin-bottom: 1rem;
        }
        @media (max-width: 640px) {
            .public-menu-item-price {
                font-size: 1.125rem; /* text-lg */
            }
        }

        .public-menu-item-category {
            color: var(--gray-dark);
            font-size: 0.75rem; /* text-xs */
        }

        .public-add-to-cart-btn {
            margin-top: 1rem;
            width: 100%;
        }

        /* Cart Section */
        .public-cart-aside {
            background-color: white;
            border-radius: 0.75rem; /* rounded-xl */
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1); /* shadow-2xl */
            padding: 1.5rem;
            height: fit-content;
            position: sticky;
            top: 1.5rem; /* top-6 */
        }
        @media (max-width: 1023px) { /* Em telas menores que lg, remove o sticky e ajusta padding */
            .public-cart-aside {
                position: static;
                padding: 1rem;
            }
        }

        .public-cart-heading {
            font-size: 1.875rem; /* text-3xl */
            font-weight: 800;
            color: var(--text-color);
            margin-bottom: 1.5rem;
            text-align: center;
        }
        @media (max-width: 640px) {
            .public-cart-heading {
                font-size: 1.5rem; /* text-2xl */
            }
        }

        .cart-items-list {
            list-style: none;
            padding: 0;
            margin-bottom: 1.5rem;
            line-height: 1.5; /* space-y-4 */
        }

        .cart-item {
            display: flex;
            flex-direction: column; /* Coloca itens em coluna em telas pequenas */
            align-items: flex-start; /* Alinha itens à esquerda */
            justify-content: space-between;
            background-color: #f9fafb; /* gray-50 */
            padding: 0.75rem;
            border-radius: 0.5rem; /* rounded-lg */
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-sm */
            margin-bottom: 1rem;
        }
        @media (min-width: 641px) { /* A partir de telas médias, volta para linha */
            .cart-item {
                flex-direction: row;
                align-items: center;
            }
        }

        .cart-item-details {
            flex-grow: 1;
            width: 100%; /* Ocupa largura total em coluna */
        }

        .cart-item-name {
            font-weight: 600;
            color: var(--text-color);
            font-size: 1rem; /* text-base */
        }

        .cart-item-price {
            font-size: 0.875rem; /* text-sm */
            color: var(--text-light);
        }

        .cart-item-observations-input {
            margin-top: 0.5rem;
            font-size: 0.875rem; /* text-sm */
            width: 100%;
            border: 1px solid #d1d5db;
            border-radius: 0.25rem;
            padding: 0.25rem 0.5rem;
        }

        .cart-item-controls {
            display: flex;
            align-items: center;
            gap: 0.5rem; /* space-x-2 */
            margin-top: 0.75rem; /* Espaçamento quando em coluna */
            margin-left: 0; /* Remove margin-left em coluna */
            width: 100%; /* Ocupa largura total em coluna */
            justify-content: flex-end; /* Alinha controles à direita em coluna */
        }
        @media (min-width: 641px) { /* A partir de telas médias, volta para linha */
            .cart-item-controls {
                margin-top: 0;
                margin-left: 1rem; /* ml-4 */
                width: auto;
                justify-content: flex-start;
            }
        }

        .cart-control-btn {
            background-color: #e5e7eb; /* gray-200 */
            color: #374151; /* gray-700 */
            border-radius: 9999px; /* rounded-full */
            width: 2rem; /* w-8 */
            height: 2rem; /* h-8 */
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color 0.15s ease-in-out;
            cursor: pointer;
            border: none;
            font-weight: 700;
        }

        .cart-control-btn:hover {
            background-color: #d1d5db; /* gray-300 */
        }

        .cart-control-btn-minus {
            background-color: #fee2e2; /* red-200 */
            color: #b91c1c; /* red-700 */
        }
        .cart-control-btn-minus:hover {
            background-color: #fca5a5; /* red-300 */
        }

        .cart-control-btn-plus {
            background-color: #d1fae5; /* green-200 */
            color: #065f46; /* green-700 */
        }
        .cart-control-btn-plus:hover {
            background-color: #a7f3d0; /* green-300 */
        }

        .cart-item-quantity {
            font-weight: 700;
            color: var(--text-color);
        }

        .cart-total {
            text-align: right;
            font-size: 1.5rem; /* text-2xl */
            font-weight: 700;
            color: var(--text-color);
            margin-bottom: 1.5rem;
        }
        @media (max-width: 640px) {
            .cart-total {
                font-size: 1.25rem; /* text-xl */
            }
        }

        .public-checkout-btn {
            width: 100%;
        }

        /* Error Page Styles */
        .error-page-container {
            min-height: calc(100vh - 64px);
            background-color: #fef2f2; /* red-100 */
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
        }

        .error-card {
            background-color: white;
            padding: 2rem;
            border-radius: 0.75rem; /* rounded-xl */
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1); /* shadow-2xl */
            text-align: center;
            width: 100%;
            max-width: 28rem; /* max-w-md */
        }
        @media (max-width: 640px) {
            .error-card {
                padding: 1.5rem;
            }
        }

        .error-heading {
            font-size: 1.875rem; /* text-3xl */
            font-weight: 700;
            color: #b91c1c; /* red-700 */
            margin-bottom: 1rem;
        }
        @media (max-width: 640px) {
            .error-heading {
                font-size: 1.5rem; /* text-2xl */
            }
        }

        .error-message {
            color: #dc2626; /* red-600 */
            font-size: 1rem; /* text-base */
        }

        .error-suggestion {
            color: var(--text-light);
            margin-top: 1rem;
            font-size: 0.875rem; /* text-sm */
        }

        /* Welcome Page Styles */
        .welcome-page-container {
            min-height: calc(100vh - 64px);
            background-color: #f3f4f6; /* gray-100 */
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 1rem;
            text-align: center;
        }

        .welcome-heading {
            font-size: 3.75rem; /* text-6xl */
            font-weight: 800;
            color: var(--primary-blue-dark);
            margin-bottom: 1.5rem;
        }
        @media (max-width: 768px) {
            .welcome-heading {
                font-size: 3rem; /* text-5xl */
            }
        }
        @media (max-width: 480px) {
            .welcome-heading {
                font-size: 2.25rem; /* text-4xl */
            }
        }

        .welcome-description {
            font-size: 1.25rem; /* text-xl */
            color: var(--text-light);
            margin-bottom: 2rem;
            max-width: 80%; /* Limita a largura da descrição */
        }
        @media (max-width: 640px) {
            .welcome-description {
                font-size: 1rem; /* text-base */
            }
        }

        .welcome-actions {
            display: flex;
            gap: 1rem; /* space-x-4 */
            flex-wrap: wrap; /* Permite que os botões quebrem para a próxima linha */
            justify-content: center;
        }

        .welcome-btn-login, .welcome-btn-register {
            padding: 0.75rem 2rem; /* px-8 py-3 */
            font-size: 1.25rem; /* text-xl */
        }
        @media (max-width: 640px) {
            .welcome-btn-login, .welcome-btn-register {
                width: 100%; /* Botões ocupam largura total em telas pequenas */
                padding: 0.75rem 1.5rem;
                font-size: 1rem; /* text-base */
            }
        }

        .welcome-btn-register {
            background-color: var(--accent-green);
        }
        .welcome-btn-register:hover {
            background-color: var(--accent-green-dark);
        }

        .welcome-footer-text {
            color: var(--gray-dark);
            font-size: 0.875rem; /* text-sm */
            margin-top: 3rem;
            max-width: 80%; /* Limita a largura */
        }
        @media (max-width: 640px) {
            .welcome-footer-text {
                font-size: 0.75rem; /* text-xs */
            }
        }

        /* WhatsApp Link Container */
        .whatsapp-link-container {
            margin-top: 1.5rem;
            padding: 1rem;
            background-color: #d1fae5; /* green-100 */
            color: #065f46; /* green-800 */
            border-radius: 0.5rem; /* rounded-lg */
            font-size: 0.875rem; /* text-sm */
        }

        .whatsapp-link-text {
            font-weight: 600;
            margin-bottom: 0.5rem;
        }

        .whatsapp-link {
            color: var(--primary-blue);
            text-decoration: underline;
            word-break: break-all;
        }
        .whatsapp-link:hover {
            color: var(--primary-blue-dark);
        }

        /* Common Utility Classes (mantidas para compatibilidade e clareza, mas com media queries para responsividade) */
        .w-full { width: 100%; }
        .mt-6 { margin-top: 1.5rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-2 { margin-bottom: 0.5rem; }
        .mt-4 { margin-top: 1rem; }
        .ml-4 { margin-left: 1rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .text-center { text-align: center; }
        .font-bold { font-weight: 700; }
        .font-semibold { font-weight: 600; }
        .font-extrabold { font-weight: 800; }
        .text-lg { font-size: 1.125rem; }
        .text-xl { font-size: 1.25rem; }
        .text-3xl { font-size: 1.875rem; }
        .text-4xl { font-size: 2.25rem; }
        .text-sm { font-size: 0.875rem; }
        .text-xs { font-size: 0.75rem; }
        .text-gray-700 { color: #374151; }
        .text-gray-600 { color: #4b5563; }
        .text-gray-800 { color: #1f2937; }
        .text-red-500 { color: #ef4444; }
        .text-red-700 { color: #b91c1c; }
        .text-green-500 { color: #22c55e; }
        .text-green-700 { color: #15803d; }
        .list-disc { list-style-type: disc; }
        .list-inside { list-style-position: inside; }
        .flex { display: flex; }
        .flex-col { flex-direction: column; }
        .items-center { align-items: center; }
        .justify-center { justify-content: center; }
        .justify-between { justify-content: space-between; }
        .justify-end { justify-content: flex-end; }
        .grid { display: grid; }
        .gap-6 { gap: 1.5rem; }
        .gap-8 { gap: 2rem; }
        /* Ajustes para space-x e space-y para serem mais responsivos */
        .space-x-4 > *:not([hidden]) ~ *:not([hidden]) { margin-left: 1rem; }
        .space-y-4 > *:not([hidden]) ~ *:not([hidden]) { margin-top: 1rem; }
        .space-x-2 > *:not([hidden]) ~ *:not([hidden]) { margin-left: 0.5rem; }
        .space-y-2 > *:not([hidden]) ~ *:not([hidden]) { margin-top: 0.5rem; }
        @media (max-width: 640px) { /* Em telas pequenas, remove margens horizontais para empilhamento */
            .space-x-4 > *:not([hidden]) ~ *:not([hidden]),
            .space-x-2 > *:not([hidden]) ~ *:not([hidden]) {
                margin-left: 0;
            }
        }

        .overflow-hidden { overflow: hidden; }
        .overflow-x-auto { overflow-x: auto; }
        .h-fit { height: fit-content; }
        .sticky { position: sticky; }
        .top-6 { top: 1.5rem; }
      `}),r.jsx(Z0,{}),se(),r.jsx(X0,{message:R,type:K,onClose:ie})]})};Q0.createRoot(document.getElementById("root")).render(r.jsx(F.StrictMode,{children:r.jsx(k0,{})}));

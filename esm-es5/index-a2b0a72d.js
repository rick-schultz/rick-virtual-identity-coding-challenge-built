var __extends=this&&this.__extends||function(){var e=function(t,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n))e[n]=t[n]};return e(t,n)};return function(t,n){e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();var __awaiter=this&&this.__awaiter||function(e,t,n,r){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,s){function o(e){try{l(r.next(e))}catch(t){s(t)}}function i(e){try{l(r["throw"](e))}catch(t){s(t)}}function l(e){e.done?n(e.value):a(e.value).then(o,i)}l((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,a,s,o;return o={next:i(0),throw:i(1),return:i(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function i(e){return function(t){return l([e,t])}}function l(o){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,a&&(s=o[0]&2?a["return"]:o[0]?a["throw"]||((s=a["return"])&&s.call(a),0):a.next)&&!(s=s.call(a,o[1])).done)return s;if(a=0,s)o=[o[0]&2,s.value];switch(o[0]){case 0:case 1:s=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;a=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(s=n.trys,s=s.length>0&&s[s.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!s||o[1]>s[0]&&o[1]<s[3])){n.label=o[1];break}if(o[0]===6&&n.label<s[1]){n.label=s[1];s=o;break}if(s&&n.label<s[2]){n.label=s[2];n.ops.push(o);break}if(s[2])n.ops.pop();n.trys.pop();continue}o=t.call(e,n)}catch(i){o=[6,i];a=0}finally{r=s=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),a=0,t=0;t<n;t++)for(var s=arguments[t],o=0,i=s.length;o<i;o++,a++)r[a]=s[o];return r};var NAMESPACE="rick-challenge";var scopeId;var hostTagName;var isSvgMode=false;var queuePending=false;var win=typeof window!=="undefined"?window:{};var CSS=win.CSS;var doc=win.document||{head:{}};var plt={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,n,r){return e.addEventListener(t,n,r)},rel:function(e,t,n,r){return e.removeEventListener(t,n,r)},ce:function(e,t){return new CustomEvent(e,t)}};var supportsShadow=function(){return(doc.head.attachShadow+"").indexOf("[native")>-1}();var promiseResolve=function(e){return Promise.resolve(e)};var supportsConstructibleStylesheets=function(){try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replace==="function"}catch(e){}return false}();var HYDRATED_CSS="{visibility:hidden}.hydrated{visibility:inherit}";var createTime=function(e,t){if(t===void 0){t=""}{return function(){return}}};var uniqueTime=function(e,t){{return function(){return}}};var rootAppliedStyles=new WeakMap;var registerStyle=function(e,t,n){var r=styles.get(e);if(supportsConstructibleStylesheets&&n){r=r||new CSSStyleSheet;r.replace(t)}else{r=t}styles.set(e,r)};var addStyle=function(e,t,n,r){var a=getScopeId(t);var s=styles.get(a);e=e.nodeType===11?e:doc;if(s){if(typeof s==="string"){e=e.head||e;var o=rootAppliedStyles.get(e);var i=void 0;if(!o){rootAppliedStyles.set(e,o=new Set)}if(!o.has(a)){{if(plt.$cssShim$){i=plt.$cssShim$.createHostStyle(r,a,s,!!(t.$flags$&10));var l=i["s-sc"];if(l){a=l;o=null}}else{i=doc.createElement("style");i.innerHTML=s}e.insertBefore(i,e.querySelector("link"))}if(o){o.add(a)}}}else if(!e.adoptedStyleSheets.includes(s)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[s])}}return a};var attachStyles=function(e){var t=e.$cmpMeta$;var n=e.$hostElement$;var r=t.$flags$;var a=createTime("attachStyles",t.$tagName$);var s=addStyle(supportsShadow&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t,e.$modeName$,n);if(r&10){n["s-sc"]=s;n.classList.add(s+"-h")}a()};var getScopeId=function(e,t){return"sc-"+e.$tagName$};var EMPTY_OBJ={};var isDef=function(e){return e!=null};var isComplexType=function(e){e=typeof e;return e==="object"||e==="function"};var h=function(e,t){var n=[];for(var r=2;r<arguments.length;r++){n[r-2]=arguments[r]}var a=null;var s=false;var o=false;var i=[];var l=function(t){for(var n=0;n<t.length;n++){a=t[n];if(Array.isArray(a)){l(a)}else if(a!=null&&typeof a!=="boolean"){if(s=typeof e!=="function"&&!isComplexType(a)){a=String(a)}if(s&&o){i[i.length-1].$text$+=a}else{i.push(s?newVNode(null,a):a)}o=s}}};l(n);if(t){{var u=t.className||t.class;if(u){t.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}var c=newVNode(e,null);c.$attrs$=t;if(i.length>0){c.$children$=i}return c};var newVNode=function(e,t){var n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};{n.$attrs$=null}return n};var Host={};var isHost=function(e){return e&&e.$tag$===Host};var setAccessor=function(e,t,n,r,a,s){if(n!==r){var o=isMemberInElement(e,t);var i=t.toLowerCase();if(t==="class"){var l=e.classList;var u=parseClassList(n);var c=parseClassList(r);l.remove.apply(l,u.filter((function(e){return e&&!c.includes(e)})));l.add.apply(l,c.filter((function(e){return e&&!u.includes(e)})))}else if(!o&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(isMemberInElement(win,i)){t=i.slice(2)}else{t=i[2]+t.slice(3)}if(n){plt.rel(e,t,n,false)}if(r){plt.ael(e,t,r,false)}}else{var f=isComplexType(r);if((o||f&&r!==null)&&!a){try{if(!e.tagName.includes("-")){var $=r==null?"":r;if(t==="list"){o=false}else if(n==null||e[t]!=$){e[t]=$}}else{e[t]=r}}catch(d){}}if(r==null||r===false){if(r!==false||e.getAttribute(t)===""){{e.removeAttribute(t)}}}else if((!o||s&4||a)&&!f){r=r===true?"":r;{e.setAttribute(t,r)}}}}};var parseClassListRegex=/\s/;var parseClassList=function(e){return!e?[]:e.split(parseClassListRegex)};var updateElement=function(e,t,n,r){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var s=e&&e.$attrs$||EMPTY_OBJ;var o=t.$attrs$||EMPTY_OBJ;{for(r in s){if(!(r in o)){setAccessor(a,r,s[r],undefined,n,t.$flags$)}}}for(r in o){setAccessor(a,r,s[r],o[r],n,t.$flags$)}};var createElm=function(e,t,n,r){var a=t.$children$[n];var s=0;var o;var i;if(a.$text$!==null){o=a.$elm$=doc.createTextNode(a.$text$)}else{o=a.$elm$=doc.createElement(a.$tag$);{updateElement(null,a,isSvgMode)}if(isDef(scopeId)&&o["s-si"]!==scopeId){o.classList.add(o["s-si"]=scopeId)}if(a.$children$){for(s=0;s<a.$children$.length;++s){i=createElm(e,a,s);if(i){o.appendChild(i)}}}}return o};var addVnodes=function(e,t,n,r,a,s){var o=e;var i;if(o.shadowRoot&&o.tagName===hostTagName){o=o.shadowRoot}for(;a<=s;++a){if(r[a]){i=createElm(null,n,a);if(i){r[a].$elm$=i;o.insertBefore(i,t)}}}};var removeVnodes=function(e,t,n,r,a){for(;t<=n;++t){if(r=e[t]){a=r.$elm$;a.remove()}}};var updateChildren=function(e,t,n,r){var a=0;var s=0;var o=t.length-1;var i=t[0];var l=t[o];var u=r.length-1;var c=r[0];var f=r[u];var $;while(a<=o&&s<=u){if(i==null){i=t[++a]}else if(l==null){l=t[--o]}else if(c==null){c=r[++s]}else if(f==null){f=r[--u]}else if(isSameVnode(i,c)){patch(i,c);i=t[++a];c=r[++s]}else if(isSameVnode(l,f)){patch(l,f);l=t[--o];f=r[--u]}else if(isSameVnode(i,f)){patch(i,f);e.insertBefore(i.$elm$,l.$elm$.nextSibling);i=t[++a];f=r[--u]}else if(isSameVnode(l,c)){patch(l,c);e.insertBefore(l.$elm$,i.$elm$);l=t[--o];c=r[++s]}else{{$=createElm(t&&t[s],n,s);c=r[++s]}if($){{i.$elm$.parentNode.insertBefore($,i.$elm$)}}}}if(a>o){addVnodes(e,r[u+1]==null?null:r[u+1].$elm$,n,r,s,u)}else if(s>u){removeVnodes(t,a,o)}};var isSameVnode=function(e,t){if(e.$tag$===t.$tag$){return true}return false};var patch=function(e,t){var n=t.$elm$=e.$elm$;var r=e.$children$;var a=t.$children$;var s=t.$text$;if(s===null){{{updateElement(e,t,isSvgMode)}}if(r!==null&&a!==null){updateChildren(n,r,t,a)}else if(a!==null){if(e.$text$!==null){n.textContent=""}addVnodes(n,null,t,a,0,a.length-1)}else if(r!==null){removeVnodes(r,0,r.length-1)}}else if(e.$text$!==s){n.data=s}};var renderVdom=function(e,t){var n=e.$hostElement$;var r=e.$vnode$||newVNode(null,null);var a=isHost(t)?t:h(null,null,t);hostTagName=n.tagName;a.$tag$=null;a.$flags$|=4;e.$vnode$=a;a.$elm$=r.$elm$=n.shadowRoot||n;{scopeId=n["s-sc"]}patch(r,a)};var emitEvent=function(e,t,n){var r=plt.ce(t,n);e.dispatchEvent(r);return r};var attachToAncestor=function(e,t){if(t&&!e.$onRenderResolve$&&t["s-p"]){t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))}};var scheduleUpdate=function(e,t){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}attachToAncestor(e,e.$ancestorComponent$);var n=function(){return dispatchHooks(e,t)};return writeTask(n)};var dispatchHooks=function(e,t){var n=createTime("scheduleUpdate",e.$cmpMeta$.$tagName$);var r=e.$lazyInstance$;var a;n();return then(a,(function(){return updateComponent(e,r,t)}))};var updateComponent=function(e,t,n){return __awaiter(void 0,void 0,void 0,(function(){var r,a,s,o,i,l;return __generator(this,(function(u){r=e.$hostElement$;a=createTime("update",e.$cmpMeta$.$tagName$);s=r["s-rc"];if(n){attachStyles(e)}o=createTime("render",e.$cmpMeta$.$tagName$);{callRender(e,t)}if(plt.$cssShim$){plt.$cssShim$.updateHost(r)}if(s){s.map((function(e){return e()}));r["s-rc"]=undefined}o();a();{i=r["s-p"];l=function(){return postUpdateComponent(e)};if(i.length===0){l()}else{Promise.all(i).then(l);e.$flags$|=4;i.length=0}}return[2]}))}))};var callRender=function(e,t,n){try{t=t.render();{e.$flags$&=~16}{e.$flags$|=2}{{{renderVdom(e,t)}}}}catch(r){consoleError(r,e.$hostElement$)}return null};var postUpdateComponent=function(e){var t=e.$cmpMeta$.$tagName$;var n=e.$hostElement$;var r=createTime("postUpdate",t);var a=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{addHydratedFlag(n)}r();{e.$onReadyResolve$(n);if(!a){appDidLoad()}}}else{r()}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){nextTick((function(){return scheduleUpdate(e,false)}))}e.$flags$&=~(4|512)}};var appDidLoad=function(e){{addHydratedFlag(doc.documentElement)}nextTick((function(){return emitEvent(win,"appload",{detail:{namespace:NAMESPACE}})}))};var then=function(e,t){return e&&e.then?e.then(t):t()};var addHydratedFlag=function(e){return e.classList.add("hydrated")};var parsePropertyValue=function(e,t){if(e!=null&&!isComplexType(e)){if(t&1){return String(e)}return e}return e};var getValue=function(e,t){return getHostRef(e).$instanceValues$.get(t)};var setValue=function(e,t,n,r){var a=getHostRef(e);var s=a.$instanceValues$.get(t);var o=a.$flags$;var i=a.$lazyInstance$;n=parsePropertyValue(n,r.$members$[t][0]);if((!(o&8)||s===undefined)&&n!==s){a.$instanceValues$.set(t,n);if(i){if((o&(2|16))===2){scheduleUpdate(a,false)}}}};var proxyComponent=function(e,t,n){if(t.$members$){var r=Object.entries(t.$members$);var a=e.prototype;r.map((function(e){var r=e[0],s=e[1][0];if(s&31||n&2&&s&32){Object.defineProperty(a,r,{get:function(){return getValue(this,r)},set:function(e){setValue(this,r,e,t)},configurable:true,enumerable:true})}}));if(n&1){var s=new Map;a.attributeChangedCallback=function(e,t,n){var r=this;plt.jmp((function(){var t=s.get(e);r[t]=n===null&&typeof r[t]==="boolean"?false:n}))};e.observedAttributes=r.filter((function(e){var t=e[0],n=e[1];return n[0]&15})).map((function(e){var t=e[0],n=e[1];var r=n[1]||t;s.set(r,t);return r}))}}return e};var initializeComponent=function(e,t,n,r,a){return __awaiter(void 0,void 0,void 0,(function(){var e,r,s,o,i,l,u;return __generator(this,(function(c){switch(c.label){case 0:if(!((t.$flags$&32)===0))return[3,5];t.$flags$|=32;a=loadModule(n);if(!a.then)return[3,2];e=uniqueTime();return[4,a];case 1:a=c.sent();e();c.label=2;case 2:if(!a.isProxied){proxyComponent(a,n,2);a.isProxied=true}r=createTime("createInstance",n.$tagName$);{t.$flags$|=8}try{new a(t)}catch(f){consoleError(f)}{t.$flags$&=~8}r();if(!a.style)return[3,5];s=a.style;o=getScopeId(n);if(!!styles.has(o))return[3,5];i=createTime("registerStyles",n.$tagName$);if(!(n.$flags$&8))return[3,4];return[4,import("./shadow-css-23c95dd7.js").then((function(e){return e.scopeCss(s,o,false)}))];case 3:s=c.sent();c.label=4;case 4:registerStyle(o,s,!!(n.$flags$&1));i();c.label=5;case 5:l=t.$ancestorComponent$;u=function(){return scheduleUpdate(t,true)};if(l&&l["s-rc"]){l["s-rc"].push(u)}else{u()}return[2]}}))}))};var connectedCallback=function(e){if((plt.$flags$&1)===0){var t=getHostRef(e);var n=t.$cmpMeta$;var r=createTime("connectedCallback",n.$tagName$);if(!(t.$flags$&1)){t.$flags$|=1;{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){attachToAncestor(t,t.$ancestorComponent$=a);break}}}if(n.$members$){Object.entries(n.$members$).map((function(t){var n=t[0],r=t[1][0];if(r&31&&e.hasOwnProperty(n)){var a=e[n];delete e[n];e[n]=a}}))}{initializeComponent(e,t,n)}}r()}};var disconnectedCallback=function(e){if((plt.$flags$&1)===0){var t=getHostRef(e);if(plt.$cssShim$){plt.$cssShim$.removeHost(e)}}};var bootstrapLazy=function(e,t){if(t===void 0){t={}}var n=createTime();var r=[];var a=t.exclude||[];var s=win.customElements;var o=doc.head;var i=o.querySelector("meta[charset]");var l=doc.createElement("style");var u=[];var c;var f=true;Object.assign(plt,t);plt.$resourcesUrl$=new URL(t.resourcesUrl||"./",doc.baseURI).href;e.map((function(e){return e[1].map((function(t){var n={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{n.$members$=t[2]}if(!supportsShadow&&n.$flags$&1){n.$flags$|=8}var o=n.$tagName$;var i=function(e){__extends(t,e);function t(t){var r=e.call(this,t)||this;t=r;registerHost(t,n);if(n.$flags$&1){if(supportsShadow){{t.attachShadow({mode:"open"})}}else if(!("shadowRoot"in t)){t.shadowRoot=t}}return r}t.prototype.connectedCallback=function(){var e=this;if(c){clearTimeout(c);c=null}if(f){u.push(this)}else{plt.jmp((function(){return connectedCallback(e)}))}};t.prototype.disconnectedCallback=function(){var e=this;plt.jmp((function(){return disconnectedCallback(e)}))};t.prototype.componentOnReady=function(){return getHostRef(this).$onReadyPromise$};return t}(HTMLElement);n.$lazyBundleId$=e[0];if(!a.includes(o)&&!s.get(o)){r.push(o);s.define(o,proxyComponent(i,n,1))}}))}));{l.innerHTML=r+HYDRATED_CSS;l.setAttribute("data-styles","");o.insertBefore(l,i?i.nextSibling:o.firstChild)}f=false;if(u.length){u.map((function(e){return e.connectedCallback()}))}else{{plt.jmp((function(){return c=setTimeout(appDidLoad,30)}))}}n()};var hostRefs=new WeakMap;var getHostRef=function(e){return hostRefs.get(e)};var registerInstance=function(e,t){return hostRefs.set(t.$lazyInstance$=e,t)};var registerHost=function(e,t){var n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};{n.$onReadyPromise$=new Promise((function(e){return n.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return hostRefs.set(e,n)};var isMemberInElement=function(e,t){return t in e};var consoleError=function(e,t){return(0,console.error)(e,t)};var cmpModules=new Map;var loadModule=function(e,t,n){var r=e.$tagName$.replace(/-/g,"_");var a=e.$lazyBundleId$;var s=cmpModules.get(a);if(s){return s[r]}return import("./"+a+".entry.js"+"").then((function(e){{cmpModules.set(a,e)}return e[r]}),consoleError)};var styles=new Map;var queueDomReads=[];var queueDomWrites=[];var queueTask=function(e,t){return function(n){e.push(n);if(!queuePending){queuePending=true;if(t&&plt.$flags$&4){nextTick(flush)}else{plt.raf(flush)}}}};var consume=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(n){consoleError(n)}}e.length=0};var flush=function(){consume(queueDomReads);{consume(queueDomWrites);if(queuePending=queueDomReads.length>0){plt.raf(flush)}}};var nextTick=function(e){return promiseResolve().then(e)};var writeTask=queueTask(queueDomWrites,true);export{CSS as C,NAMESPACE as N,promiseResolve as a,bootstrapLazy as b,doc as d,h,plt as p,registerInstance as r,win as w};
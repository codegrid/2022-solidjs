const ue=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}};ue();const C={},ae=(e,n)=>e===n,de=Symbol("solid-track"),D={equals:ae};let he=ie;const E={},N=1,M=2,te={owned:null,cleanups:null,context:null,owner:null};var h=null;let T=null,d=null,F=null,g=null,$=null,H=0;function B(e,n){const t=d,l=h,s=e.length===0,i=s?te:{owned:null,cleanups:null,context:null,owner:n||l},f=s?e:()=>e(()=>X(i));h=i,d=null;try{return Q(f,!0)}finally{d=t,h=l}}function q(e,n){n=n?Object.assign({},D,n):D;const t={value:e,observers:null,observerSlots:null,pending:E,comparator:n.equals||void 0},l=s=>(typeof s=="function"&&(s=s(t.pending!==E?t.pending:t.value)),J(t,s));return[ne.bind(t),l]}function S(e,n,t){const l=le(e,n,!1,N);R(l)}function K(e,n,t){t=t?Object.assign({},D,t):D;const l=le(e,n,!0,0);return l.pending=E,l.observers=null,l.observerSlots=null,l.comparator=t.equals||void 0,R(l),ne.bind(l)}function ge(e){if(F)return e();let n;const t=F=[];try{n=e()}finally{F=null}return Q(()=>{for(let l=0;l<t.length;l+=1){const s=t[l];if(s.pending!==E){const i=s.pending;s.pending=E,J(s,i)}}},!1),n}function W(e){let n,t=d;return d=null,n=e(),d=t,n}function pe(e){return h===null||(h.cleanups===null?h.cleanups=[e]:h.cleanups.push(e)),e}function ne(){const e=T;if(this.sources&&(this.state||e)){const n=g;g=null,this.state===N||e?R(this):j(this),g=n}if(d){const n=this.observers?this.observers.length:0;d.sources?(d.sources.push(this),d.sourceSlots.push(n)):(d.sources=[this],d.sourceSlots=[n]),this.observers?(this.observers.push(d),this.observerSlots.push(d.sources.length-1)):(this.observers=[d],this.observerSlots=[d.sources.length-1])}return this.value}function J(e,n,t){if(F)return e.pending===E&&F.push(e),e.pending=n,n;if(e.comparator&&e.comparator(e.value,n))return n;let l=!1;return e.value=n,e.observers&&e.observers.length&&Q(()=>{for(let s=0;s<e.observers.length;s+=1){const i=e.observers[s];l&&T.disposed.has(i),(l&&!i.tState||!l&&!i.state)&&(i.pure?g.push(i):$.push(i),i.observers&&re(i)),l||(i.state=N)}if(g.length>1e6)throw g=[],new Error},!1),n}function R(e){if(!e.fn)return;X(e);const n=h,t=d,l=H;d=h=e,be(e,e.value,l),d=t,h=n}function be(e,n,t){let l;try{l=e.fn(n)}catch(s){oe(s)}(!e.updatedAt||e.updatedAt<=t)&&(e.observers&&e.observers.length?J(e,l):e.value=l,e.updatedAt=t)}function le(e,n,t,l=N,s){const i={fn:e,state:l,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:h,context:null,pure:t};return h===null||h!==te&&(h.owned?h.owned.push(i):h.owned=[i]),i}function se(e){const n=T;if(e.state===0||n)return;if(e.state===M||n)return j(e);if(e.suspense&&W(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<H);)(e.state||n)&&t.push(e);for(let l=t.length-1;l>=0;l--)if(e=t[l],e.state===N||n)R(e);else if(e.state===M||n){const s=g;g=null,j(e,t[0]),g=s}}function Q(e,n){if(g)return e();let t=!1;n||(g=[]),$?t=!0:$=[],H++;try{const l=e();return we(t),l}catch(l){g||($=null),oe(l)}}function we(e){g&&(ie(g),g=null),!e&&($.length?ge(()=>{he($),$=null}):$=null)}function ie(e){for(let n=0;n<e.length;n++)se(e[n])}function j(e,n){const t=T;e.state=0;for(let l=0;l<e.sources.length;l+=1){const s=e.sources[l];s.sources&&(s.state===N||t?s!==n&&se(s):(s.state===M||t)&&j(s,n))}}function re(e){const n=T;for(let t=0;t<e.observers.length;t+=1){const l=e.observers[t];(!l.state||n)&&(l.state=M,l.pure?g.push(l):$.push(l),l.observers&&re(l))}}function X(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),l=e.sourceSlots.pop(),s=t.observers;if(s&&s.length){const i=s.pop(),f=t.observerSlots.pop();l<s.length&&(i.sourceSlots[f]=l,s[l]=i,t.observerSlots[l]=f)}}if(e.owned){for(n=0;n<e.owned.length;n++)X(e.owned[n]);e.owned=null}if(e.cleanups){for(n=0;n<e.cleanups.length;n++)e.cleanups[n]();e.cleanups=null}e.state=0,e.context=null}function oe(e){throw e}const ve=Symbol("fallback");function Y(e){for(let n=0;n<e.length;n++)e[n]()}function ye(e,n,t={}){let l=[],s=[],i=[],f=0,r=n.length>1?[]:null;return pe(()=>Y(i)),()=>{let c=e()||[],u,o;return c[de],W(()=>{let a=c.length,b,w,L,I,P,v,y,m,x;if(a===0)f!==0&&(Y(i),i=[],l=[],s=[],f=0,r&&(r=[])),t.fallback&&(l=[ve],s[0]=B(ce=>(i[0]=ce,t.fallback())),f=1);else if(f===0){for(s=new Array(a),o=0;o<a;o++)l[o]=c[o],s[o]=B(p);f=a}else{for(L=new Array(a),I=new Array(a),r&&(P=new Array(a)),v=0,y=Math.min(f,a);v<y&&l[v]===c[v];v++);for(y=f-1,m=a-1;y>=v&&m>=v&&l[y]===c[m];y--,m--)L[m]=s[y],I[m]=i[y],r&&(P[m]=r[y]);for(b=new Map,w=new Array(m+1),o=m;o>=v;o--)x=c[o],u=b.get(x),w[o]=u===void 0?-1:u,b.set(x,o);for(u=v;u<=y;u++)x=l[u],o=b.get(x),o!==void 0&&o!==-1?(L[o]=s[u],I[o]=i[u],r&&(P[o]=r[u]),o=w[o],b.set(x,o)):i[u]();for(o=v;o<a;o++)o in L?(s[o]=L[o],i[o]=I[o],r&&(r[o]=P[o],r[o](o))):s[o]=B(p);s=s.slice(0,f=a),l=c.slice(0)}return s});function p(a){if(i[o]=a,r){const[b,w]=q(o);return r[o]=w,n(c[o],b)}return n(c[o])}}}function O(e,n){return W(()=>e(n||{}))}function me(e){const n="fallback"in e&&{fallback:()=>e.fallback};return K(ye(()=>e.each,e.children,n||void 0))}function $e(e){let n=!1;const t=K(()=>e.when,void 0,{equals:(l,s)=>n?l===s:!l==!s});return K(()=>{const l=t();if(l){const s=e.children;return(n=typeof s=="function"&&s.length>0)?W(()=>s(l)):s}return e.fallback})}function Ce(e,n,t){let l=t.length,s=n.length,i=l,f=0,r=0,c=n[s-1].nextSibling,u=null;for(;f<s||r<i;){if(n[f]===t[r]){f++,r++;continue}for(;n[s-1]===t[i-1];)s--,i--;if(s===f){const o=i<l?r?t[r-1].nextSibling:t[i-r]:c;for(;r<i;)e.insertBefore(t[r++],o)}else if(i===r)for(;f<s;)(!u||!u.has(n[f]))&&n[f].remove(),f++;else if(n[f]===t[i-1]&&t[r]===n[s-1]){const o=n[--s].nextSibling;e.insertBefore(t[r++],n[f++].nextSibling),e.insertBefore(t[--i],o),n[s]=t[i]}else{if(!u){u=new Map;let p=r;for(;p<i;)u.set(t[p],p++)}const o=u.get(n[f]);if(o!=null)if(r<o&&o<i){let p=f,a=1,b;for(;++p<s&&p<i&&!((b=u.get(n[p]))==null||b!==o+a);)a++;if(a>o-r){const w=n[f];for(;r<o;)e.insertBefore(t[r++],w)}else e.replaceChild(t[r++],n[f++])}else f++;else n[f++].remove()}}}const Z="_$DX_DELEGATE";function xe(e,n,t){let l;return B(s=>{l=s,n===document?e():_(n,e(),n.firstChild?null:void 0,t)}),()=>{l(),n.textContent=""}}function k(e,n,t){const l=document.createElement("template");l.innerHTML=e;let s=l.content.firstChild;return t&&(s=s.firstChild),s}function fe(e,n=window.document){const t=n[Z]||(n[Z]=new Set);for(let l=0,s=e.length;l<s;l++){const i=e[l];t.has(i)||(t.add(i),n.addEventListener(i,Ae))}}function z(e,n,t,l){if(l)Array.isArray(t)?(e[`$$${n}`]=t[0],e[`$$${n}Data`]=t[1]):e[`$$${n}`]=t;else if(Array.isArray(t)){const s=t[0];e.addEventListener(n,t[0]=i=>s.call(e,t[1],i))}else e.addEventListener(n,t)}function _(e,n,t,l){if(t!==void 0&&!l&&(l=[]),typeof n!="function")return U(e,n,l,t);S(s=>U(e,n(),s,t),l)}function Ae(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),C.registry&&!C.done&&(C.done=!0,document.querySelectorAll("[id^=pl-]").forEach(l=>l.remove()));t!==null;){const l=t[n];if(l&&!t.disabled){const s=t[`${n}Data`];if(s!==void 0?l.call(t,s,e):l.call(t,e),e.cancelBubble)return}t=t.host&&t.host!==t&&t.host instanceof Node?t.host:t.parentNode}}function U(e,n,t,l,s){for(C.context&&!t&&(t=[...e.childNodes]);typeof t=="function";)t=t();if(n===t)return t;const i=typeof n,f=l!==void 0;if(e=f&&t[0]&&t[0].parentNode||e,i==="string"||i==="number"){if(C.context)return t;if(i==="number"&&(n=n.toString()),f){let r=t[0];r&&r.nodeType===3?r.data=n:r=document.createTextNode(n),t=A(e,t,l,r)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||i==="boolean"){if(C.context)return t;t=A(e,t,l)}else{if(i==="function")return S(()=>{let r=n();for(;typeof r=="function";)r=r();t=U(e,r,t,l)}),()=>t;if(Array.isArray(n)){const r=[],c=t&&Array.isArray(t);if(V(r,n,t,s))return S(()=>t=U(e,r,t,l,!0)),()=>t;if(C.context){for(let u=0;u<r.length;u++)if(r[u].parentNode)return t=r}if(r.length===0){if(t=A(e,t,l),f)return t}else c?t.length===0?ee(e,r,l):Ce(e,t,r):(t&&A(e),ee(e,r));t=r}else if(n instanceof Node){if(C.context&&n.parentNode)return t=f?[n]:n;if(Array.isArray(t)){if(f)return t=A(e,t,l,n);A(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function V(e,n,t,l){let s=!1;for(let i=0,f=n.length;i<f;i++){let r=n[i],c=t&&t[i];if(r instanceof Node)e.push(r);else if(!(r==null||r===!0||r===!1))if(Array.isArray(r))s=V(e,r,c)||s;else if(typeof r=="function")if(l){for(;typeof r=="function";)r=r();s=V(e,Array.isArray(r)?r:[r],c)||s}else e.push(r),s=!0;else{const u=String(r);c&&c.nodeType===3&&c.data===u?e.push(c):e.push(document.createTextNode(u))}}return s}function ee(e,n,t){for(let l=0,s=n.length;l<s;l++)e.insertBefore(n[l],t)}function A(e,n,t,l){if(t===void 0)return e.textContent="";const s=l||document.createTextNode("");if(n.length){let i=!1;for(let f=n.length-1;f>=0;f--){const r=n[f];if(s!==r){const c=r.parentNode===e;!i&&!f?c?e.replaceChild(s,r):e.insertBefore(s,t):c&&r.remove()}else i=!0}}else e.insertBefore(s,t);return[s]}const Se=k('<section class="orderArea"><h2>Order</h2><div class="flavorPicker"></div><div class="flavorOperation"><button class="flavorOperation__button">Add</button><button class="flavorOperation__button">Delete</button></div><div class="flavorOperation"><label><input type="radio" name="serve"> with Cone \u{1F366}</label><label><input type="radio" name="serve"> with Cup \u{1F368}</label></div></section>'),_e=k('<div class="flavorPicker__item"></div>'),Ee=e=>(()=>{const n=Se.cloneNode(!0),t=n.firstChild,l=t.nextSibling,s=l.nextSibling,i=s.firstChild,f=i.nextSibling,r=s.nextSibling,c=r.firstChild,u=c.firstChild,o=c.nextSibling,p=o.firstChild;return _(l,O(me,{get each(){return e.flavorsList},children:(a,b)=>(()=>{const w=_e.cloneNode(!0);return w.$$click=()=>e.setCurrentFlavorIdx(b()),w.style.setProperty("background-color",a),S(()=>w.classList.toggle("flavorPicker__item--selected",b()===e.currentFlavorIdx)),w})()})),z(i,"click",e.addFlavor,!0),z(f,"click",e.deleteFlavor,!0),u.$$click=()=>e.setWithCone(!0),p.$$click=()=>e.setWithCone(!1),S(()=>u.checked=e.withCone),S(()=>p.checked=!e.withCone),n})();fe(["click"]);const Ne=k('<section class="previewArea"><h2>Preview</h2><pre class="icecreamViewer"></pre></section>'),ke=e=>(()=>{const n=Ne.cloneNode(!0),t=n.firstChild,l=t.nextSibling;return _(l,()=>JSON.stringify({flavors:e.flavors,withCone:e.withCone},null,2)),n})(),Le=k('<button class="orderButtonArea__button">Order\u{1F44C}</button>'),Fe=k('<main class="appMain"><header class="header"><h1>IcecreamShop\u{1F366}\u{1F368}</h1></header><div class="operationArea"></div><div class="orderButtonArea"></div></main>'),Oe=k("<p>\u30D5\u30EC\u30FC\u30D0\u30FC\u30923\u3064\u9078\u3093\u3067\u304F\u3060\u3055\u3044</p>"),G=["mintcream","lemonchiffon","wheat","plum","lime","skyblue","tomato","green","chocolate","maroon"],Te=()=>{const[e,n]=q([G[4]]),[t,l]=q(!0),[s,i]=q(0),f=()=>{if(e().length>=3)return;const c=[...e(),G[s()]];n(c)},r=()=>{const c=[...e()];c.pop(),n(c)};return(()=>{const c=Fe.cloneNode(!0),u=c.firstChild,o=u.nextSibling,p=o.nextSibling;return _(o,O(Ee,{flavorsList:G,get currentFlavorIdx(){return s()},setCurrentFlavorIdx:i,addFlavor:f,deleteFlavor:r,get withCone(){return t()},setWithCone:l}),null),_(o,O(ke,{get flavors(){return e()},get withCone(){return t()}}),null),_(p,O($e,{get when(){return e().length>=3},get fallback(){return Oe.cloneNode(!0)},get children(){const a=Le.cloneNode(!0);return a.$$click=()=>console.log("My order is",{flavors:e(),withCone:t()}),a}})),c})()};fe(["click"]);xe(()=>O(Te,{}),document.getElementById("root"));
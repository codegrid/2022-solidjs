const ce=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerpolicy&&(i.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?i.credentials="include":l.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}};ce();const C={},ue=(e,n)=>e===n,ae=Symbol("solid-track"),B={equals:ue};let de=le;const _={},E=1,D=2,ee={owned:null,cleanups:null,context:null,owner:null};var h=null;let O=null,d=null,L=null,g=null,$=null,K=0;function I(e,n){const t=d,s=h,l=e.length===0,i=l?ee:{owned:null,cleanups:null,context:null,owner:n||s},f=l?e:()=>e(()=>Q(i));h=i,d=null;try{return J(f,!0)}finally{d=t,h=s}}function P(e,n){n=n?Object.assign({},B,n):B;const t={value:e,observers:null,observerSlots:null,pending:_,comparator:n.equals||void 0},s=l=>(typeof l=="function"&&(l=l(t.pending!==_?t.pending:t.value)),H(t,l));return[te.bind(t),s]}function x(e,n,t){const s=ne(e,n,!1,E);U(s)}function he(e,n,t){t=t?Object.assign({},B,t):B;const s=ne(e,n,!0,0);return s.pending=_,s.observers=null,s.observerSlots=null,s.comparator=t.equals||void 0,U(s),te.bind(s)}function ge(e){if(L)return e();let n;const t=L=[];try{n=e()}finally{L=null}return J(()=>{for(let s=0;s<t.length;s+=1){const l=t[s];if(l.pending!==_){const i=l.pending;l.pending=_,H(l,i)}}},!1),n}function V(e){let n,t=d;return d=null,n=e(),d=t,n}function pe(e){return h===null||(h.cleanups===null?h.cleanups=[e]:h.cleanups.push(e)),e}function te(){const e=O;if(this.sources&&(this.state||e)){const n=g;g=null,this.state===E||e?U(this):M(this),g=n}if(d){const n=this.observers?this.observers.length:0;d.sources?(d.sources.push(this),d.sourceSlots.push(n)):(d.sources=[this],d.sourceSlots=[n]),this.observers?(this.observers.push(d),this.observerSlots.push(d.sources.length-1)):(this.observers=[d],this.observerSlots=[d.sources.length-1])}return this.value}function H(e,n,t){if(L)return e.pending===_&&L.push(e),e.pending=n,n;if(e.comparator&&e.comparator(e.value,n))return n;let s=!1;return e.value=n,e.observers&&e.observers.length&&J(()=>{for(let l=0;l<e.observers.length;l+=1){const i=e.observers[l];s&&O.disposed.has(i),(s&&!i.tState||!s&&!i.state)&&(i.pure?g.push(i):$.push(i),i.observers&&ie(i)),s||(i.state=E)}if(g.length>1e6)throw g=[],new Error},!1),n}function U(e){if(!e.fn)return;Q(e);const n=h,t=d,s=K;d=h=e,be(e,e.value,s),d=t,h=n}function be(e,n,t){let s;try{s=e.fn(n)}catch(l){re(l)}(!e.updatedAt||e.updatedAt<=t)&&(e.observers&&e.observers.length?H(e,s):e.value=s,e.updatedAt=t)}function ne(e,n,t,s=E,l){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:h,context:null,pure:t};return h===null||h!==ee&&(h.owned?h.owned.push(i):h.owned=[i]),i}function se(e){const n=O;if(e.state===0||n)return;if(e.state===D||n)return M(e);if(e.suspense&&V(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<K);)(e.state||n)&&t.push(e);for(let s=t.length-1;s>=0;s--)if(e=t[s],e.state===E||n)U(e);else if(e.state===D||n){const l=g;g=null,M(e,t[0]),g=l}}function J(e,n){if(g)return e();let t=!1;n||(g=[]),$?t=!0:$=[],K++;try{const s=e();return we(t),s}catch(s){g||($=null),re(s)}}function we(e){g&&(le(g),g=null),!e&&($.length?ge(()=>{de($),$=null}):$=null)}function le(e){for(let n=0;n<e.length;n++)se(e[n])}function M(e,n){const t=O;e.state=0;for(let s=0;s<e.sources.length;s+=1){const l=e.sources[s];l.sources&&(l.state===E||t?l!==n&&se(l):(l.state===D||t)&&M(l,n))}}function ie(e){const n=O;for(let t=0;t<e.observers.length;t+=1){const s=e.observers[t];(!s.state||n)&&(s.state=D,s.pure?g.push(s):$.push(s),s.observers&&ie(s))}}function Q(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),s=e.sourceSlots.pop(),l=t.observers;if(l&&l.length){const i=l.pop(),f=t.observerSlots.pop();s<l.length&&(i.sourceSlots[f]=s,l[s]=i,t.observerSlots[s]=f)}}if(e.owned){for(n=0;n<e.owned.length;n++)Q(e.owned[n]);e.owned=null}if(e.cleanups){for(n=0;n<e.cleanups.length;n++)e.cleanups[n]();e.cleanups=null}e.state=0,e.context=null}function re(e){throw e}const ve=Symbol("fallback");function X(e){for(let n=0;n<e.length;n++)e[n]()}function ye(e,n,t={}){let s=[],l=[],i=[],f=0,r=n.length>1?[]:null;return pe(()=>X(i)),()=>{let c=e()||[],u,o;return c[ae],V(()=>{let a=c.length,b,w,N,k,T,v,y,m,A;if(a===0)f!==0&&(X(i),i=[],s=[],l=[],f=0,r&&(r=[])),t.fallback&&(s=[ve],l[0]=I(fe=>(i[0]=fe,t.fallback())),f=1);else if(f===0){for(l=new Array(a),o=0;o<a;o++)s[o]=c[o],l[o]=I(p);f=a}else{for(N=new Array(a),k=new Array(a),r&&(T=new Array(a)),v=0,y=Math.min(f,a);v<y&&s[v]===c[v];v++);for(y=f-1,m=a-1;y>=v&&m>=v&&s[y]===c[m];y--,m--)N[m]=l[y],k[m]=i[y],r&&(T[m]=r[y]);for(b=new Map,w=new Array(m+1),o=m;o>=v;o--)A=c[o],u=b.get(A),w[o]=u===void 0?-1:u,b.set(A,o);for(u=v;u<=y;u++)A=s[u],o=b.get(A),o!==void 0&&o!==-1?(N[o]=l[u],k[o]=i[u],r&&(T[o]=r[u]),o=w[o],b.set(A,o)):i[u]();for(o=v;o<a;o++)o in N?(l[o]=N[o],i[o]=k[o],r&&(r[o]=T[o],r[o](o))):l[o]=I(p);l=l.slice(0,f=a),s=c.slice(0)}return l});function p(a){if(i[o]=a,r){const[b,w]=P(o);return r[o]=w,n(c[o],b)}return n(c[o])}}}function q(e,n){return V(()=>e(n||{}))}function me(e){const n="fallback"in e&&{fallback:()=>e.fallback};return he(ye(()=>e.each,e.children,n||void 0))}function $e(e,n,t){let s=t.length,l=n.length,i=s,f=0,r=0,c=n[l-1].nextSibling,u=null;for(;f<l||r<i;){if(n[f]===t[r]){f++,r++;continue}for(;n[l-1]===t[i-1];)l--,i--;if(l===f){const o=i<s?r?t[r-1].nextSibling:t[i-r]:c;for(;r<i;)e.insertBefore(t[r++],o)}else if(i===r)for(;f<l;)(!u||!u.has(n[f]))&&n[f].remove(),f++;else if(n[f]===t[i-1]&&t[r]===n[l-1]){const o=n[--l].nextSibling;e.insertBefore(t[r++],n[f++].nextSibling),e.insertBefore(t[--i],o),n[l]=t[i]}else{if(!u){u=new Map;let p=r;for(;p<i;)u.set(t[p],p++)}const o=u.get(n[f]);if(o!=null)if(r<o&&o<i){let p=f,a=1,b;for(;++p<l&&p<i&&!((b=u.get(n[p]))==null||b!==o+a);)a++;if(a>o-r){const w=n[f];for(;r<o;)e.insertBefore(t[r++],w)}else e.replaceChild(t[r++],n[f++])}else f++;else n[f++].remove()}}}const Y="_$DX_DELEGATE";function Ce(e,n,t){let s;return I(l=>{s=l,n===document?e():F(n,e(),n.firstChild?null:void 0,t)}),()=>{s(),n.textContent=""}}function W(e,n,t){const s=document.createElement("template");s.innerHTML=e;let l=s.content.firstChild;return t&&(l=l.firstChild),l}function oe(e,n=window.document){const t=n[Y]||(n[Y]=new Set);for(let s=0,l=e.length;s<l;s++){const i=e[s];t.has(i)||(t.add(i),n.addEventListener(i,xe))}}function Z(e,n,t,s){if(s)Array.isArray(t)?(e[`$$${n}`]=t[0],e[`$$${n}Data`]=t[1]):e[`$$${n}`]=t;else if(Array.isArray(t)){const l=t[0];e.addEventListener(n,t[0]=i=>l.call(e,t[1],i))}else e.addEventListener(n,t)}function F(e,n,t,s){if(t!==void 0&&!s&&(s=[]),typeof n!="function")return j(e,n,s,t);x(l=>j(e,n(),l,t),s)}function xe(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),C.registry&&!C.done&&(C.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>s.remove()));t!==null;){const s=t[n];if(s&&!t.disabled){const l=t[`${n}Data`];if(l!==void 0?s.call(t,l,e):s.call(t,e),e.cancelBubble)return}t=t.host&&t.host!==t&&t.host instanceof Node?t.host:t.parentNode}}function j(e,n,t,s,l){for(C.context&&!t&&(t=[...e.childNodes]);typeof t=="function";)t=t();if(n===t)return t;const i=typeof n,f=s!==void 0;if(e=f&&t[0]&&t[0].parentNode||e,i==="string"||i==="number"){if(C.context)return t;if(i==="number"&&(n=n.toString()),f){let r=t[0];r&&r.nodeType===3?r.data=n:r=document.createTextNode(n),t=S(e,t,s,r)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||i==="boolean"){if(C.context)return t;t=S(e,t,s)}else{if(i==="function")return x(()=>{let r=n();for(;typeof r=="function";)r=r();t=j(e,r,t,s)}),()=>t;if(Array.isArray(n)){const r=[],c=t&&Array.isArray(t);if(G(r,n,t,l))return x(()=>t=j(e,r,t,s,!0)),()=>t;if(C.context){for(let u=0;u<r.length;u++)if(r[u].parentNode)return t=r}if(r.length===0){if(t=S(e,t,s),f)return t}else c?t.length===0?z(e,r,s):$e(e,t,r):(t&&S(e),z(e,r));t=r}else if(n instanceof Node){if(C.context&&n.parentNode)return t=f?[n]:n;if(Array.isArray(t)){if(f)return t=S(e,t,s,n);S(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function G(e,n,t,s){let l=!1;for(let i=0,f=n.length;i<f;i++){let r=n[i],c=t&&t[i];if(r instanceof Node)e.push(r);else if(!(r==null||r===!0||r===!1))if(Array.isArray(r))l=G(e,r,c)||l;else if(typeof r=="function")if(s){for(;typeof r=="function";)r=r();l=G(e,Array.isArray(r)?r:[r],c)||l}else e.push(r),l=!0;else{const u=String(r);c&&c.nodeType===3&&c.data===u?e.push(c):e.push(document.createTextNode(u))}}return l}function z(e,n,t){for(let s=0,l=n.length;s<l;s++)e.insertBefore(n[s],t)}function S(e,n,t,s){if(t===void 0)return e.textContent="";const l=s||document.createTextNode("");if(n.length){let i=!1;for(let f=n.length-1;f>=0;f--){const r=n[f];if(l!==r){const c=r.parentNode===e;!i&&!f?c?e.replaceChild(l,r):e.insertBefore(l,t):c&&r.remove()}else i=!0}}else e.insertBefore(l,t);return[l]}const Ae=W('<section class="orderArea"><h2>Order</h2><div class="flavorPicker"></div><div class="flavorOperation"><button class="flavorOperation__button">Add</button><button class="flavorOperation__button">Delete</button></div><div class="flavorOperation"><label><input type="radio" name="serve"> with Cone \u{1F366}</label><label><input type="radio" name="serve"> with Cup \u{1F368}</label></div></section>'),Se=W('<div class="flavorPicker__item"></div>'),_e=e=>(()=>{const n=Ae.cloneNode(!0),t=n.firstChild,s=t.nextSibling,l=s.nextSibling,i=l.firstChild,f=i.nextSibling,r=l.nextSibling,c=r.firstChild,u=c.firstChild,o=c.nextSibling,p=o.firstChild;return F(s,q(me,{get each(){return e.flavorsList},children:(a,b)=>(()=>{const w=Se.cloneNode(!0);return w.$$click=()=>e.setCurrentFlavorIdx(b()),w.style.setProperty("background-color",a),x(()=>w.classList.toggle("flavorPicker__item--selected",b()===e.currentFlavorIdx)),w})()})),Z(i,"click",e.addFlavor,!0),Z(f,"click",e.deleteFlavor,!0),u.$$click=()=>e.setWithCone(!0),p.$$click=()=>e.setWithCone(!1),x(()=>u.checked=e.withCone),x(()=>p.checked=!e.withCone),n})();oe(["click"]);const Ee=W('<section class="previewArea"><h2>Preview</h2><pre class="icecreamViewer"></pre></section>'),Ne=e=>(()=>{const n=Ee.cloneNode(!0),t=n.firstChild,s=t.nextSibling;return F(s,()=>JSON.stringify({flavors:e.flavors,withCone:e.withCone},null,2)),n})(),Le=W('<main class="appMain"><header class="header"><h1>IcecreamShop\u{1F366}\u{1F368}</h1></header><div class="operationArea"></div><div class="orderButtonArea"><button class="orderButtonArea__button">Order\u{1F44C}</button></div></main>'),R=["mintcream","lemonchiffon","wheat","plum","lime","skyblue","tomato","green","chocolate","maroon"],Fe=()=>{const[e,n]=P([R[4]]),[t,s]=P(!0),[l,i]=P(0),f=()=>{if(e().length>=3)return;const c=[...e(),R[l()]];n(c)},r=()=>{const c=[...e()];c.pop(),n(c)};return(()=>{const c=Le.cloneNode(!0),u=c.firstChild,o=u.nextSibling,p=o.nextSibling,a=p.firstChild;return F(o,q(_e,{flavorsList:R,get currentFlavorIdx(){return l()},setCurrentFlavorIdx:i,addFlavor:f,deleteFlavor:r,get withCone(){return t()},setWithCone:s}),null),F(o,q(Ne,{get flavors(){return e()},get withCone(){return t()}}),null),a.$$click=()=>console.log("My order is",{flavors:e(),withCone:t()}),x(()=>a.disabled=e().length<1),c})()};oe(["click"]);Ce(()=>q(Fe,{}),document.getElementById("root"));

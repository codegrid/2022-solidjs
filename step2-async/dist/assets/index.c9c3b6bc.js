const xe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerpolicy&&(s.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?s.credentials="include":l.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(l){if(l.ep)return;l.ep=!0;const s=n(l);fetch(l.href,s)}};xe();const p={};function G(e){p.context=e}const Ce=(e,t)=>e===t,$e=Symbol("solid-track"),K={equals:Ce};let Ae=ve;const j={},T=1,J=2,de={owned:null,cleanups:null,context:null,owner:null};var v=null;let P=null,b=null,R=null,m=null,k=null,ne=0;function U(e,t){const n=b,i=v,l=e.length===0,s=l?de:{owned:null,cleanups:null,context:null,owner:t||i},f=l?e:()=>e(()=>re(s));v=s,b=null;try{return se(f,!0)}finally{b=n,v=i}}function N(e,t){t=t?Object.assign({},K,t):K;const n={value:e,observers:null,observerSlots:null,pending:j,comparator:t.equals||void 0},i=l=>(typeof l=="function"&&(l=l(n.pending!==j?n.pending:n.value)),ie(n,l));return[pe.bind(n),i]}function Z(e,t,n){const i=le(e,t,!0,T);W(i)}function L(e,t,n){const i=le(e,t,!1,T);W(i)}function O(e,t,n){n=n?Object.assign({},K,n):K;const i=le(e,t,!0,0);return i.pending=j,i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,W(i),pe.bind(i)}function Se(e,t,n){arguments.length===2?typeof t=="object"&&(n=t,t=e,e=!0):arguments.length===1&&(t=e,e=!0),n||(n={});const i=new Set,[l,s]=N(n.initialValue),[f,r]=N(void 0,{equals:!1}),[c,u]=N(!1),[o,h]=N();let a,d=null,g=null,x=null,C=!1,S="initialValue"in n,y=typeof e=="function"&&O(e);p.context&&(x=`${p.context.id}${p.context.count++}`,p.load&&(g=p.load(x)));function w($,A,F,I){return d===$&&(d=null,S=!0,g&&($===g||A===g)&&n.onHydrated&&queueMicrotask(()=>n.onHydrated(I,{value:A})),g=null,h(a=F),_(A)),A}function _($){z(()=>{s(()=>$),u(!1);for(const A of i.keys())A.decrement();i.clear()})}function E(){const $=Q&&oe(v,Q.id),A=l();if(a)throw a;return b&&!b.user&&$&&Z(()=>{f(),d&&($.resolved&&P?P.promises.add(d):i.has($)||($.increment(),i.add($)))}),A}function H($=!0){if($&&C)return;C=!1,h(a=void 0);const A=y?y():e;if(A==null||A===!1){w(d,q(l));return}const F=g||q(()=>t(A,{value:l(),refetching:$}));return typeof F!="object"||!("then"in F)?(w(d,F),F):(d=F,C=!0,queueMicrotask(()=>C=!1),z(()=>{u(!0),r()}),F.then(I=>w(F,I,void 0,A),I=>w(F,I,I)))}return Object.defineProperties(E,{loading:{get(){return c()}},error:{get(){return o()}},latest:{get(){if(!S)return E();if(a)throw a;return l()}}}),y?Z(()=>H(!1)):H(!1),[E,{refetch:H,mutate:s}]}function z(e){if(R)return e();let t;const n=R=[];try{t=e()}finally{R=null}return se(()=>{for(let i=0;i<n.length;i+=1){const l=n[i];if(l.pending!==j){const s=l.pending;l.pending=j,ie(l,s)}}},!1),t}function q(e){let t,n=b;return b=null,t=e(),b=n,t}function he(e){return v===null||(v.cleanups===null?v.cleanups=[e]:v.cleanups.push(e)),e}function _e(){return v}function ke(e){k.push.apply(k,e),e.length=0}function ge(e){const t=Symbol("context");return{id:t,Provider:Pe(t),defaultValue:e}}function Ee(e){let t;return(t=oe(v,e.id))!==void 0?t:e.defaultValue}function Fe(e){const t=O(e);return O(()=>ee(t()))}let Q;function Ne(){return Q||(Q=ge({}))}function pe(){const e=P;if(this.sources&&(this.state||e)){const t=m;m=null,this.state===T||e?W(this):X(this),m=t}if(b){const t=this.observers?this.observers.length:0;b.sources?(b.sources.push(this),b.sourceSlots.push(t)):(b.sources=[this],b.sourceSlots=[t]),this.observers?(this.observers.push(b),this.observerSlots.push(b.sources.length-1)):(this.observers=[b],this.observerSlots=[b.sources.length-1])}return this.value}function ie(e,t,n){if(R)return e.pending===j&&R.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let i=!1;return e.value=t,e.observers&&e.observers.length&&se(()=>{for(let l=0;l<e.observers.length;l+=1){const s=e.observers[l];i&&P.disposed.has(s),(i&&!s.tState||!i&&!s.state)&&(s.pure?m.push(s):k.push(s),s.observers&&ye(s)),i||(s.state=T)}if(m.length>1e6)throw m=[],new Error},!1),t}function W(e){if(!e.fn)return;re(e);const t=v,n=b,i=ne;b=v=e,Le(e,e.value,i),b=n,v=t}function Le(e,t,n){let i;try{i=e.fn(t)}catch(l){we(l)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?ie(e,i):e.value=i,e.updatedAt=n)}function le(e,t,n,i=T,l){const s={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:v,context:null,pure:n};return v===null||v!==de&&(v.owned?v.owned.push(s):v.owned=[s]),s}function be(e){const t=P;if(e.state===0||t)return;if(e.state===J||t)return X(e);if(e.suspense&&q(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ne);)(e.state||t)&&n.push(e);for(let i=n.length-1;i>=0;i--)if(e=n[i],e.state===T||t)W(e);else if(e.state===J||t){const l=m;m=null,X(e,n[0]),m=l}}function se(e,t){if(m)return e();let n=!1;t||(m=[]),k?n=!0:k=[],ne++;try{const i=e();return Oe(n),i}catch(i){m||(k=null),we(i)}}function Oe(e){m&&(ve(m),m=null),!e&&(k.length?z(()=>{Ae(k),k=null}):k=null)}function ve(e){for(let t=0;t<e.length;t++)be(e[t])}function X(e,t){const n=P;e.state=0;for(let i=0;i<e.sources.length;i+=1){const l=e.sources[i];l.sources&&(l.state===T||n?l!==t&&be(l):(l.state===J||n)&&X(l,t))}}function ye(e){const t=P;for(let n=0;n<e.observers.length;n+=1){const i=e.observers[n];(!i.state||t)&&(i.state=J,i.pure?m.push(i):k.push(i),i.observers&&ye(i))}}function re(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),l=n.observers;if(l&&l.length){const s=l.pop(),f=n.observerSlots.pop();i<l.length&&(s.sourceSlots[f]=i,l[i]=s,n.observerSlots[i]=f)}}if(e.owned){for(t=0;t<e.owned.length;t++)re(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function we(e){throw e}function oe(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:oe(e.owner,t):void 0}function ee(e){if(typeof e=="function"&&!e.length)return ee(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const i=ee(e[n]);Array.isArray(i)?t.push.apply(t,i):t.push(i)}return t}return e}function Pe(e){return function(n){let i;return Z(()=>i=q(()=>(v.context={[e]:n.value},Fe(()=>n.children)))),i}}const Te=Symbol("fallback");function fe(e){for(let t=0;t<e.length;t++)e[t]()}function Ie(e,t,n={}){let i=[],l=[],s=[],f=0,r=t.length>1?[]:null;return he(()=>fe(s)),()=>{let c=e()||[],u,o;return c[$e],q(()=>{let a=c.length,d,g,x,C,S,y,w,_,E;if(a===0)f!==0&&(fe(s),s=[],i=[],l=[],f=0,r&&(r=[])),n.fallback&&(i=[Te],l[0]=U(H=>(s[0]=H,n.fallback())),f=1);else if(f===0){for(l=new Array(a),o=0;o<a;o++)i[o]=c[o],l[o]=U(h);f=a}else{for(x=new Array(a),C=new Array(a),r&&(S=new Array(a)),y=0,w=Math.min(f,a);y<w&&i[y]===c[y];y++);for(w=f-1,_=a-1;w>=y&&_>=y&&i[w]===c[_];w--,_--)x[_]=l[w],C[_]=s[w],r&&(S[_]=r[w]);for(d=new Map,g=new Array(_+1),o=_;o>=y;o--)E=c[o],u=d.get(E),g[o]=u===void 0?-1:u,d.set(E,o);for(u=y;u<=w;u++)E=i[u],o=d.get(E),o!==void 0&&o!==-1?(x[o]=l[u],C[o]=s[u],r&&(S[o]=r[u]),o=g[o],d.set(E,o)):s[u]();for(o=y;o<a;o++)o in x?(l[o]=x[o],s[o]=C[o],r&&(r[o]=S[o],r[o](o))):l[o]=U(h);l=l.slice(0,f=a),i=c.slice(0)}return l});function h(a){if(s[o]=a,r){const[d,g]=N(o);return r[o]=g,t(c[o],d)}return t(c[o])}}}function M(e,t){return q(()=>e(t||{}))}function Be(e){const t="fallback"in e&&{fallback:()=>e.fallback};return O(Ie(()=>e.each,e.children,t||void 0))}const je=ge();function qe(e){let t=0,n,i,l,s,f,r;const[c,u]=N(!1),o=Ne(),h={increment:()=>{++t===1&&u(!0)},decrement:()=>{--t===0&&u(!1)},inFallback:c,effects:[],resolved:!1},a=_e();if(p.context&&p.load){const x=p.context.id+p.context.count;if(s=p.load(x),s){(typeof s!="object"||!("then"in s))&&(s=Promise.resolve(s));const[C,S]=N(void 0,{equals:!1});f=C,s.then(y=>{if((r=y)||p.done)return S();p.gather(x),G(l),S(),G()})}else s===null&&p.gather(x)}const d=Ee(je);d&&([n,i]=d.register(h.inFallback));let g;return he(()=>g&&g()),M(o.Provider,{value:h,get children(){return O(()=>{if(r)throw r;if(l=p.context,f)return f(),f=void 0;l&&s===void 0&&G();const x=O(()=>e.children);return O(()=>{const C=h.inFallback(),S=n?n():!0,y=i?i():!0;if(g&&g(),(!C||s!==void 0)&&S)return h.resolved=!0,l=s=void 0,ke(h.effects),x();if(!!y)return U(w=>(g=w,l&&(G({id:l.id+"f",count:0}),l=void 0),e.fallback),a)})})}})}function Me(e,t,n){let i=n.length,l=t.length,s=i,f=0,r=0,c=t[l-1].nextSibling,u=null;for(;f<l||r<s;){if(t[f]===n[r]){f++,r++;continue}for(;t[l-1]===n[s-1];)l--,s--;if(l===f){const o=s<i?r?n[r-1].nextSibling:n[s-r]:c;for(;r<s;)e.insertBefore(n[r++],o)}else if(s===r)for(;f<l;)(!u||!u.has(t[f]))&&t[f].remove(),f++;else if(t[f]===n[s-1]&&n[r]===t[l-1]){const o=t[--l].nextSibling;e.insertBefore(n[r++],t[f++].nextSibling),e.insertBefore(n[--s],o),t[l]=n[s]}else{if(!u){u=new Map;let h=r;for(;h<s;)u.set(n[h],h++)}const o=u.get(t[f]);if(o!=null)if(r<o&&o<s){let h=f,a=1,d;for(;++h<l&&h<s&&!((d=u.get(t[h]))==null||d!==o+a);)a++;if(a>o-r){const g=t[f];for(;r<o;)e.insertBefore(n[r++],g)}else e.replaceChild(n[r++],t[f++])}else f++;else t[f++].remove()}}}const ue="_$DX_DELEGATE";function De(e,t,n){let i;return U(l=>{i=l,t===document?e():D(t,e(),t.firstChild?null:void 0,n)}),()=>{i(),t.textContent=""}}function V(e,t,n){const i=document.createElement("template");i.innerHTML=e;let l=i.content.firstChild;return n&&(l=l.firstChild),l}function me(e,t=window.document){const n=t[ue]||(t[ue]=new Set);for(let i=0,l=e.length;i<l;i++){const s=e[i];n.has(s)||(n.add(s),t.addEventListener(s,Ve))}}function ce(e,t,n,i){if(i)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const l=n[0];e.addEventListener(t,n[0]=s=>l.call(e,n[1],s))}else e.addEventListener(t,n)}function D(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return Y(e,t,i,n);L(l=>Y(e,t(),l,n),i)}function Ve(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),p.registry&&!p.done&&(p.done=!0,document.querySelectorAll("[id^=pl-]").forEach(i=>i.remove()));n!==null;){const i=n[t];if(i&&!n.disabled){const l=n[`${t}Data`];if(l!==void 0?i.call(n,l,e):i.call(n,e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function Y(e,t,n,i,l){for(p.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,f=i!==void 0;if(e=f&&n[0]&&n[0].parentNode||e,s==="string"||s==="number"){if(p.context)return n;if(s==="number"&&(t=t.toString()),f){let r=n[0];r&&r.nodeType===3?r.data=t:r=document.createTextNode(t),n=B(e,n,i,r)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||s==="boolean"){if(p.context)return n;n=B(e,n,i)}else{if(s==="function")return L(()=>{let r=t();for(;typeof r=="function";)r=r();n=Y(e,r,n,i)}),()=>n;if(Array.isArray(t)){const r=[],c=n&&Array.isArray(n);if(te(r,t,n,l))return L(()=>n=Y(e,r,n,i,!0)),()=>n;if(p.context){for(let u=0;u<r.length;u++)if(r[u].parentNode)return n=r}if(r.length===0){if(n=B(e,n,i),f)return n}else c?n.length===0?ae(e,r,i):Me(e,n,r):(n&&B(e),ae(e,r));n=r}else if(t instanceof Node){if(p.context&&t.parentNode)return n=f?[t]:t;if(Array.isArray(n)){if(f)return n=B(e,n,i,t);B(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function te(e,t,n,i){let l=!1;for(let s=0,f=t.length;s<f;s++){let r=t[s],c=n&&n[s];if(r instanceof Node)e.push(r);else if(!(r==null||r===!0||r===!1))if(Array.isArray(r))l=te(e,r,c)||l;else if(typeof r=="function")if(i){for(;typeof r=="function";)r=r();l=te(e,Array.isArray(r)?r:[r],c)||l}else e.push(r),l=!0;else{const u=String(r);c&&c.nodeType===3&&c.data===u?e.push(c):e.push(document.createTextNode(u))}}return l}function ae(e,t,n){for(let i=0,l=t.length;i<l;i++)e.insertBefore(t[i],n)}function B(e,t,n,i){if(n===void 0)return e.textContent="";const l=i||document.createTextNode("");if(t.length){let s=!1;for(let f=t.length-1;f>=0;f--){const r=t[f];if(l!==r){const c=r.parentNode===e;!s&&!f?c?e.replaceChild(l,r):e.insertBefore(l,n):c&&r.remove()}else s=!0}}else e.insertBefore(l,n);return[l]}const He=V('<div class="flavorPicker"></div>'),Re=V('<section class="orderArea"><h2>Order</h2><div class="flavorOperation"><button class="flavorOperation__button">Add</button><button class="flavorOperation__button">Delete</button></div><div class="flavorOperation"><label><input type="radio" name="serve"> with Cone \u{1F366}</label><label><input type="radio" name="serve"> with Cup \u{1F368}</label></div></section>'),Ue=V("<p>Loading...</p>"),We=V('<div class="flavorPicker__item"></div>'),Ge=e=>(()=>{const t=Re.cloneNode(!0),n=t.firstChild,i=n.nextSibling,l=i.firstChild,s=l.nextSibling,f=i.nextSibling,r=f.firstChild,c=r.firstChild,u=r.nextSibling,o=u.firstChild;return D(t,M(qe,{get fallback(){return Ue.cloneNode(!0)},get children(){const h=He.cloneNode(!0);return D(h,M(Be,{get each(){return e.flavorsList},children:(a,d)=>(()=>{const g=We.cloneNode(!0);return g.$$click=()=>e.setCurrentFlavorIdx(d()),g.style.setProperty("background-color",a),L(()=>g.classList.toggle("flavorPicker__item--selected",d()===e.currentFlavorIdx)),g})()})),h}}),i),ce(l,"click",e.addFlavor,!0),ce(s,"click",e.deleteFlavor,!0),c.$$click=()=>e.setWithCone(!0),o.$$click=()=>e.setWithCone(!1),L(()=>c.checked=e.withCone),L(()=>o.checked=!e.withCone),t})();me(["click"]);const Ke=V('<section class="previewArea"><h2>Preview</h2><pre class="icecreamViewer"></pre></section>'),Je=e=>(()=>{const t=Ke.cloneNode(!0),n=t.firstChild,i=n.nextSibling;return D(i,()=>JSON.stringify({flavors:e.flavors,withCone:e.withCone},null,2)),t})(),Qe=V('<main class="appMain"><header class="header"><h1>IcecreamShop\u{1F366}\u{1F368}</h1></header><div class="operationArea"></div><div class="orderButtonArea"><button class="orderButtonArea__button">Order\u{1F44C}</button></div></main>'),Xe=async()=>(await fetch("/2022-solidjs/api-mock/flavors")).json(),Ye=()=>{const[e]=Se(Xe),[t,n]=N([]),[i,l]=N(!0),[s,f]=N(0),r=()=>{if(t().length>=3)return;const u=[...t(),e()[s()]];n(u)},c=()=>{const u=[...t()];u.pop(),n(u)};return(()=>{const u=Qe.cloneNode(!0),o=u.firstChild,h=o.nextSibling,a=h.nextSibling,d=a.firstChild;return D(h,M(Ge,{get flavorsList(){return e()},get isLoading(){return e.loading},get currentFlavorIdx(){return s()},setCurrentFlavorIdx:f,addFlavor:r,deleteFlavor:c,get withCone(){return i()},setWithCone:l}),null),D(h,M(Je,{get flavors(){return t()},get withCone(){return i()}}),null),d.$$click=()=>console.log("My order is",{flavors:t(),withCone:i()}),L(()=>d.disabled=t().length<1),u})()};me(["click"]);De(()=>M(Ye,{}),document.getElementById("root"));

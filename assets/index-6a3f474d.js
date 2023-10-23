var be=Object.defineProperty;var $e=(e,t,n)=>t in e?be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ne=(e,t,n)=>($e(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function b(){}function ye(e){return e()}function le(){return Object.create(null)}function L(e){e.forEach(ye)}function ie(e){return typeof e=="function"}function z(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let Q;function ce(e,t){return e===t?!0:(Q||(Q=document.createElement("a")),Q.href=t,e===Q.href)}function Ce(e){return Object.keys(e).length===0}function d(e,t){e.appendChild(t)}function E(e,t,n){e.insertBefore(t,n||null)}function S(e){e.parentNode&&e.parentNode.removeChild(e)}function y(e){return document.createElement(e)}function C(e){return document.createTextNode(e)}function I(){return C(" ")}function ve(){return C("")}function R(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function _(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Se(e){return Array.from(e.childNodes)}function W(e,t){t=""+t,e.data!==t&&(e.data=t)}function se(e,t){e.value=t??""}function ue(e,t,n){for(let s=0;s<e.options.length;s+=1){const o=e.options[s];if(o.__value===t){o.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function Me(e){const t=e.querySelector(":checked");return t&&t.__value}function Pe(e,t,{bubbles:n=!1,cancelable:s=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:s})}let Z;function Y(e){Z=e}function ke(){if(!Z)throw new Error("Function called outside component initialization");return Z}function Ee(e){ke().$$.on_mount.push(e)}function Ie(){const e=ke();return(t,n,{cancelable:s=!1}={})=>{const o=e.$$.callbacks[t];if(o){const i=Pe(t,n,{cancelable:s});return o.slice().forEach(r=>{r.call(e,i)}),!i.defaultPrevented}return!0}}const q=[],fe=[];let H=[];const ae=[],Ae=Promise.resolve();let re=!1;function De(){re||(re=!0,Ae.then(we))}function ee(e){H.push(e)}const oe=new Set;let B=0;function we(){if(B!==0)return;const e=Z;do{try{for(;B<q.length;){const t=q[B];B++,Y(t),Oe(t.$$)}}catch(t){throw q.length=0,B=0,t}for(Y(null),q.length=0,B=0;fe.length;)fe.pop()();for(let t=0;t<H.length;t+=1){const n=H[t];oe.has(n)||(oe.add(n),n())}H.length=0}while(q.length);for(;ae.length;)ae.pop()();re=!1,oe.clear(),Y(e)}function Oe(e){if(e.fragment!==null){e.update(),L(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ee)}}function Le(e){const t=[],n=[];H.forEach(s=>e.indexOf(s)===-1?t.push(s):n.push(s)),n.forEach(s=>s()),H=t}const X=new Set;let j;function Ne(){j={r:0,c:[],p:j}}function je(){j.r||L(j.c),j=j.p}function O(e,t){e&&e.i&&(X.delete(e),e.i(t))}function N(e,t,n,s){if(e&&e.o){if(X.has(e))return;X.add(e),j.c.push(()=>{X.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}else s&&s()}function de(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function xe(e,t){N(e,1,1,()=>{t.delete(e.key)})}function Be(e,t,n,s,o,i,r,l,c,f,h,m){let p=e.length,g=i.length,v=p;const $={};for(;v--;)$[e[v].key]=v;const A=[],u=new Map,a=new Map,k=[];for(v=g;v--;){const w=m(o,i,v),M=n(w);let P=r.get(M);P?s&&k.push(()=>P.p(w,t)):(P=f(M,w),P.c()),u.set(M,A[v]=P),M in $&&a.set(M,Math.abs(v-$[M]))}const D=new Set,x=new Set;function te(w){O(w,1),w.m(l,h),r.set(w.key,w),h=w.first,g--}for(;p&&g;){const w=A[g-1],M=e[p-1],P=w.key,J=M.key;w===M?(h=w.first,p--,g--):u.has(J)?!r.has(P)||D.has(P)?te(w):x.has(J)?p--:a.get(P)>a.get(J)?(x.add(P),te(w)):(D.add(J),p--):(c(M,r),p--)}for(;p--;){const w=e[p];u.has(w.key)||c(w,r)}for(;g;)te(A[g-1]);return L(k),A}function V(e){e&&e.c()}function T(e,t,n){const{fragment:s,after_update:o}=e.$$;s&&s.m(t,n),ee(()=>{const i=e.$$.on_mount.map(ye).filter(ie);e.$$.on_destroy?e.$$.on_destroy.push(...i):L(i),e.$$.on_mount=[]}),o.forEach(ee)}function F(e,t){const n=e.$$;n.fragment!==null&&(Le(n.after_update),L(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function qe(e,t){e.$$.dirty[0]===-1&&(q.push(e),De(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function G(e,t,n,s,o,i,r=null,l=[-1]){const c=Z;Y(e);const f=e.$$={fragment:null,ctx:[],props:i,update:b,not_equal:o,bound:le(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:le(),dirty:l,skip_bound:!1,root:t.target||c.$$.root};r&&r(f.root);let h=!1;if(f.ctx=n?n(e,t.props||{},(m,p,...g)=>{const v=g.length?g[0]:p;return f.ctx&&o(f.ctx[m],f.ctx[m]=v)&&(!f.skip_bound&&f.bound[m]&&f.bound[m](v),h&&qe(e,m)),p}):[],f.update(),h=!0,L(f.before_update),f.fragment=s?s(f.ctx):!1,t.target){if(t.hydrate){const m=Se(t.target);f.fragment&&f.fragment.l(m),m.forEach(S)}else f.fragment&&f.fragment.c();t.intro&&O(e.$$.fragment),T(e,t.target,t.anchor),we()}Y(c)}class K{constructor(){ne(this,"$$");ne(this,"$$set")}$destroy(){F(this,1),this.$destroy=b}$on(t,n){if(!ie(n))return b;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const o=s.indexOf(n);o!==-1&&s.splice(o,1)}}$set(t){this.$$set&&!Ce(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Te="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Te);function Fe(e){let t,n,s,o,i,r,l;return{c(){t=y("div"),n=y("select"),s=y("option"),s.textContent="Easy",o=y("option"),o.textContent="Medium",i=y("option"),i.textContent="Hard",s.__value="easy",se(s,s.__value),o.__value="medium",se(o,o.__value),i.__value="hard",se(i,i.__value),_(n,"class","select svelte-e53vbr"),e[0]===void 0&&ee(()=>e[2].call(n)),_(t,"class","controls svelte-e53vbr")},m(c,f){E(c,t,f),d(t,n),d(n,s),d(n,o),d(n,i),ue(n,e[0],!0),r||(l=[R(n,"change",e[2]),R(n,"change",function(){ie(e[1])&&e[1].apply(this,arguments)})],r=!0)},p(c,[f]){e=c,f&1&&ue(n,e[0])},i:b,o:b,d(c){c&&S(t),r=!1,L(l)}}}function He(e,t,n){let{difficulty:s}=t,{handleChange:o}=t;function i(){s=Me(this),n(0,s)}return e.$$set=r=>{"difficulty"in r&&n(0,s=r.difficulty),"handleChange"in r&&n(1,o=r.handleChange)},[s,o,i]}class Re extends K{constructor(t){super(),G(this,t,He,Fe,z,{difficulty:0,handleChange:1})}}function ze(e){let t,n,s,o,i,r,l,c;return{c(){t=y("div"),n=y("p"),s=C("Current Score: "),o=C(e[0]),i=I(),r=y("p"),l=C("Best Score: "),c=C(e[1]),_(n,"class","score svelte-1u1jffe"),_(r,"class","score svelte-1u1jffe"),_(t,"class","scores svelte-1u1jffe")},m(f,h){E(f,t,h),d(t,n),d(n,s),d(n,o),d(t,i),d(t,r),d(r,l),d(r,c)},p(f,[h]){h&1&&W(o,f[0]),h&2&&W(c,f[1])},i:b,o:b,d(f){f&&S(t)}}}function Ge(e,t,n){let{currentScore:s}=t,{bestScore:o}=t;return e.$$set=i=>{"currentScore"in i&&n(0,s=i.currentScore),"bestScore"in i&&n(1,o=i.bestScore)},[s,o]}class Ke extends K{constructor(t){super(),G(this,t,Ge,ze,z,{currentScore:0,bestScore:1})}}function Ue(e){let t,n,s,o,i,r,l=e[0].name+"",c,f,h;return{c(){t=y("button"),n=y("img"),i=I(),r=y("p"),c=C(l),ce(n.src,s=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${e[0].id}.png`)||_(n,"src",s),_(n,"alt",o=e[0].name),_(n,"class","svelte-1017ais"),_(r,"class","svelte-1017ais"),_(t,"class","card svelte-1017ais")},m(m,p){E(m,t,p),d(t,n),d(t,i),d(t,r),d(r,c),f||(h=R(t,"click",e[1]),f=!0)},p(m,[p]){p&1&&!ce(n.src,s=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${m[0].id}.png`)&&_(n,"src",s),p&1&&o!==(o=m[0].name)&&_(n,"alt",o),p&1&&l!==(l=m[0].name+"")&&W(c,l)},i:b,o:b,d(m){m&&S(t),f=!1,h()}}}function Ve(e,t,n){const s=Ie();let{pokemon:o={id:1,name:"bulbasaur"}}=t;function i(){s("click",o.name)}return e.$$set=r=>{"pokemon"in r&&n(0,o=r.pokemon)},[o,i]}class Ye extends K{constructor(t){super(),G(this,t,Ve,Ue,z,{pokemon:0})}}const me=[{id:1,name:"Bulbasaur"},{id:4,name:"Charmander"},{id:7,name:"Squirtle"},{id:25,name:"Pikachu"},{id:133,name:"Eevee"}],We=[{id:2,name:"Ivysaur"},{id:5,name:"Charmeleon"},{id:8,name:"Wartortle"},{id:17,name:"Pidgeotto"},{id:64,name:"Kadabra"},{id:93,name:"Haunter"},{id:148,name:"Dragonair"}],Ze=[{id:3,name:"Venusaur"},{id:6,name:"Charizard"},{id:9,name:"Blastoise"},{id:94,name:"Gengar"},{id:143,name:"Snorlax"},{id:144,name:"Articuno"},{id:145,name:"Zapdos"},{id:146,name:"Moltres"},{id:149,name:"Dragonite"},{id:150,name:"Mewtwo"}];function he(e){let t,n,s,o,i,r,l,c,f;return{c(){t=y("div"),n=y("div"),s=y("h2"),s.textContent="How to Play",o=I(),i=y("p"),i.textContent="Instructions go here...",r=I(),l=y("button"),l.textContent="Close",_(s,"class","svelte-1euk40y"),_(l,"class","svelte-1euk40y"),_(n,"class","modal-content svelte-1euk40y"),_(t,"class","modal svelte-1euk40y")},m(h,m){E(h,t,m),d(t,n),d(n,s),d(n,o),d(n,i),d(n,r),d(n,l),c||(f=R(l,"click",e[2]),c=!0)},p:b,d(h){h&&S(t),c=!1,f()}}}function Je(e){let t,n,s,o,i,r=e[0]&&he(e);return{c(){t=y("div"),t.innerHTML='<img src="/Memory-Card/info.svg" alt="Info Icon" class="svelte-1euk40y"/>',n=I(),r&&r.c(),s=ve(),_(t,"class","info-icon svelte-1euk40y"),_(t,"role","button"),_(t,"tabindex","0")},m(l,c){E(l,t,c),E(l,n,c),r&&r.m(l,c),E(l,s,c),o||(i=[R(t,"click",e[1]),R(t,"keydown",e[3])],o=!0)},p(l,[c]){l[0]?r?r.p(l,c):(r=he(l),r.c(),r.m(s.parentNode,s)):r&&(r.d(1),r=null)},i:b,o:b,d(l){l&&(S(t),S(n),S(s)),r&&r.d(l),o=!1,L(i)}}}function Qe(e,t,n){let s=!1;function o(){n(0,s=!0)}function i(){n(0,s=!1)}return[s,o,i,l=>{(l.key==="Enter"||l.key===" ")&&o()}]}class Xe extends K{constructor(t){super(),G(this,t,Qe,Je,z,{})}}function et(e){let t,n,s,o,i,r;return{c(){t=y("div"),n=y("p"),s=C("Round: "),o=C(e[0]),i=C(" / "),r=C(e[1]),_(n,"class","round svelte-12hk5di"),_(t,"class","rounds svelte-12hk5di")},m(l,c){E(l,t,c),d(t,n),d(n,s),d(n,o),d(n,i),d(n,r)},p(l,[c]){c&1&&W(o,l[0]),c&2&&W(r,l[1])},i:b,o:b,d(l){l&&S(t)}}}function tt(e,t,n){let{moves:s}=t,{maxMoves:o}=t;return e.$$set=i=>{"moves"in i&&n(0,s=i.moves),"maxMoves"in i&&n(1,o=i.maxMoves)},[s,o]}class nt extends K{constructor(t){super(),G(this,t,tt,et,z,{moves:0,maxMoves:1})}}function _e(e,t,n){const s=e.slice();return s[18]=t[n],s}function pe(e,t){let n,s,o;function i(){return t[8](t[18])}return s=new Ye({props:{pokemon:t[18]}}),s.$on("click",i),{key:e,first:null,c(){n=ve(),V(s.$$.fragment),this.first=n},m(r,l){E(r,n,l),T(s,r,l),o=!0},p(r,l){t=r;const c={};l&2&&(c.pokemon=t[18]),s.$set(c)},i(r){o||(O(s.$$.fragment,r),o=!0)},o(r){N(s.$$.fragment,r),o=!1},d(r){r&&S(n),F(s,r)}}}function st(e){let t,n,s,o,i,r,l,c=[],f=new Map,h,m,p,g,v;s=new Re({props:{difficulty:e[0],handleChange:e[7]}}),i=new Ke({props:{currentScore:e[2],bestScore:e[3]}});let $=de(e[1]);const A=u=>u[18].id;for(let u=0;u<$.length;u+=1){let a=_e(e,$,u),k=A(a);f.set(k,c[u]=pe(k,a))}return m=new nt({props:{moves:e[4],maxMoves:e[5]}}),g=new Xe({}),{c(){t=y("main"),n=y("div"),V(s.$$.fragment),o=I(),V(i.$$.fragment),r=I(),l=y("div");for(let u=0;u<c.length;u+=1)c[u].c();h=I(),V(m.$$.fragment),p=I(),V(g.$$.fragment),_(n,"class","controls-container svelte-1rgod18"),_(l,"class","cards svelte-1rgod18"),_(t,"class","svelte-1rgod18")},m(u,a){E(u,t,a),d(t,n),T(s,n,null),d(t,o),T(i,t,null),d(t,r),d(t,l);for(let k=0;k<c.length;k+=1)c[k]&&c[k].m(l,null);d(t,h),T(m,t,null),d(t,p),T(g,t,null),v=!0},p(u,[a]){const k={};a&1&&(k.difficulty=u[0]),s.$set(k);const D={};a&4&&(D.currentScore=u[2]),a&8&&(D.bestScore=u[3]),i.$set(D),a&66&&($=de(u[1]),Ne(),c=Be(c,a,A,1,u,$,f,l,xe,pe,null,_e),je());const x={};a&16&&(x.moves=u[4]),a&32&&(x.maxMoves=u[5]),m.$set(x)},i(u){if(!v){O(s.$$.fragment,u),O(i.$$.fragment,u);for(let a=0;a<$.length;a+=1)O(c[a]);O(m.$$.fragment,u),O(g.$$.fragment,u),v=!0}},o(u){N(s.$$.fragment,u),N(i.$$.fragment,u);for(let a=0;a<c.length;a+=1)N(c[a]);N(m.$$.fragment,u),N(g.$$.fragment,u),v=!1},d(u){u&&S(t),F(s),F(i);for(let a=0;a<c.length;a+=1)c[a].d();F(m),F(g)}}}function U(e,t,n){const s=e.filter(l=>!n.includes(l.name)),o=[...s].sort(()=>Math.random()-.5),i=s.length>0?[o.pop()]:[],r=o.slice(0,Math.max(t-1,0));return[...i,...r]}function ge(e){switch(e){case"easy":return 5;case"medium":return 7;case"hard":return 10;default:return 0}}function ot(e,t,n){const s={easy:3,medium:4,hard:5};let o="easy",i=U(me,s[o],[]),r=[],l=0,c=0,f=0,h=ge(o);function m(u){const a=i.find(D=>D.id===u);if(!a)return;const k=a.name;r.includes(k)?(n(3,c=Math.max(c,l)),n(2,l=0),r=[],n(4,f=0),alert("You lost. Try again!")):(r.push(k),n(2,l+=1),n(4,f+=1),l===h&&setTimeout(()=>{alert("Congratulations! You won!"),n(4,f+=1),$()},0),n(1,i=U(g(o),s[o],[])))}function p(u){const a=u.target;if(!a)return;const k=a.value;v(k)}function g(u){switch(u){case"easy":return me;case"medium":return We;case"hard":return Ze;default:return[]}}function v(u){n(0,o=u),n(1,i=U(g(o),s[o],[])),r=[],n(2,l=0),n(4,f=0),n(5,h=ge(u))}function $(){n(3,c=Math.max(c,l)),n(2,l=0),r=[],n(4,f=0),n(1,i=U(g(o),s[o],[]))}return Ee(()=>{n(1,i=U(g(o),s[o],[]))}),[o,i,l,c,f,h,m,p,u=>m(u.id)]}class rt extends K{constructor(t){super(),G(this,t,ot,st,z,{})}}new rt({target:document.body});

var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e,n,r){if(t){const o=i(t,e,n,r);return t[0](o)}}function i(t,e,n,r){return t[1]&&r?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](r(e))):n.ctx}function a(t,e,n,r,o,s,c){const a=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(a){const o=i(e,n,r,c);t.p(o,a)}}function u(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function $(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function m(){return d(" ")}function h(){return d("")}function g(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t,e){t.value=null==e?"":e}let b;function x(t){b=t}function w(){if(!b)throw new Error("Function called outside component initialization");return b}function _(t){return w().$$.context.get(t)}const k=[],T=[],C=[],O=[],E=Promise.resolve();let j=!1;function A(){j||(j=!0,E.then(D))}function F(){return A(),E}function S(t){C.push(t)}function R(t){O.push(t)}let P=!1;const H=new Set;function D(){if(!P){P=!0;do{for(let t=0;t<k.length;t+=1){const e=k[t];x(e),M(e.$$)}for(x(null),k.length=0;T.length;)T.pop()();for(let t=0;t<C.length;t+=1){const e=C[t];H.has(e)||(H.add(e),e())}C.length=0}while(k.length);for(;O.length;)O.pop()();j=!1,P=!1,H.clear()}}function M(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const q=new Set;let z;function N(){z={r:0,c:[],p:z}}function L(){z.r||r(z.c),z=z.p}function W(t,e){t&&t.i&&(q.delete(t),t.i(e))}function B(t,e,n,r){if(t&&t.o){if(q.has(t))return;q.add(t),z.c.push((()=>{q.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function I(t,e,n){const r=t.$$.props[e];void 0!==r&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function U(t){t&&t.c()}function Y(t,n,s){const{fragment:c,on_mount:i,on_destroy:a,after_update:u}=t.$$;c&&c.m(n,s),S((()=>{const n=i.map(e).filter(o);a?a.push(...n):r(n),t.$$.on_mount=[]})),u.forEach(S)}function K(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function J(e,o,s,c,i,a,u=[-1]){const l=b;x(e);const $=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:n(),dirty:u,skip_bound:!1};let p=!1;if($.ctx=s?s(e,o.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return $.ctx&&i($.ctx[t],$.ctx[t]=o)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](o),p&&function(t,e){-1===t.$$.dirty[0]&&(k.push(t),A(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],$.update(),p=!0,r($.before_update),$.fragment=!!c&&c($.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);$.fragment&&$.fragment.l(t),t.forEach(f)}else $.fragment&&$.fragment.c();o.intro&&W(e.$$.fragment),Y(e,o.target,o.anchor),D()}x(l)}class G{$destroy(){K(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Z=[];function Q(e,n=t){let r;const o=[];function c(t){if(s(e,t)&&(e=t,r)){const t=!Z.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),Z.push(n,e)}if(t){for(let t=0;t<Z.length;t+=2)Z[t][0](Z[t+1]);Z.length=0}}}return{set:c,update:function(t){c(t(e))},subscribe:function(s,i=t){const a=[s,i];return o.push(a),1===o.length&&(r=n(c)||t),s(e),()=>{const t=o.indexOf(a);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}function V(t,e=!1){return(t=t.slice(t.startsWith("/#")?2:0,t.endsWith("/*")?-2:void 0)).startsWith("/")||(t="/"+t),"/"===t&&(t=""),e&&!t.endsWith("/")&&(t+="/"),t}function X(t,e,n){if(""===n)return t;if("/"===n[0])return n;let r=t=>t.split("/").filter((t=>""!==t)),o=r(t);return"/"+(e?r(e):[]).map(((t,e)=>o[e])).join("/")+"/"+n}function tt(t,e,n,r){let o=[e,"data-"+e].reduce(((e,r)=>{let o=t.getAttribute(r);return n&&t.removeAttribute(r),null===o?e:o}),!1);return!r&&""===o||(o||r||!1)}function et(t){let e=t.split("&").map((t=>t.split("="))).reduce(((t,e)=>{let n=e[0];if(!n)return t;let r=!(e.length>1)||e[e.length-1];return"string"==typeof r&&r.includes(",")&&(r=r.split(",")),void 0===t[n]?t[n]=[r]:t[n].push(r),t}),{});return Object.entries(e).reduce(((t,e)=>(t[e[0]]=e[1].length>1?e[1]:e[1][0],t)),{})}var nt,rt,ot={HISTORY:1,HASH:2,MEMORY:3,OFF:4,run:function(t,e,n,r){return 1===t?e&&e():2===t?n&&n():r&&r()},getDeafault:function(){return window&&"srcdoc"!==window.location.pathname?1:3}},st=function(){let t,e=ot.getDeafault(),n=n=>t&&t(ct(e));function r(t){t&&(e=t),window.onhashchange=window.onpopstate=rt=null,e!==ot.OFF&&ot.run(e,(t=>window.onpopstate=n),(t=>window.onhashchange=n))&&n()}return{mode:t=>r(t),get:t=>ct(e),go(t){(function(t,e){ot.run(t,(t=>history.pushState({},"",e)),(t=>window.location.hash=e),(t=>rt=e))})(e,t),n()},start(e){t=e,r()},stop(){t=null,r(ot.OFF)}}}();function ct(t){let e=nt,n=nt=ot.run(t,(t=>window.location.pathname+window.location.search),(t=>String(window.location.hash.slice(1)||"/")),(t=>rt||"/")),r=n.match(/^([^?#]+)(?:\?([^#]+))?(?:\#(.+))?$/);return{url:n,from:e,path:r[1]||"",query:et(r[2]||""),hash:r[3]||""}}function it(t){let e=_("tinro");e&&(e.exact||e.fallback)&&function(t){throw new Error("[Tinro] "+t)}(`${t.fallback?"<Route fallback>":`<Route path="${t.path}">`}  can't be inside ${e.fallback?"<Route fallback>":`<Route path="${e.path||"/"}"> with exact path`}`);let n=t.fallback?"fallbacks":"childs",r=Q({}),o={router:{},exact:!1,pattern:null,meta:{},parent:e,fallback:t.fallback,redirect:!1,firstmatch:!1,breadcrumb:null,matched:!1,childs:new Set,activeChilds:new Set,fallbacks:new Set,update(t){o.exact=!t.path.endsWith("/*"),o.pattern=V(`${o.parent&&o.parent.pattern||""}${t.path}`),o.redirect=t.redirect,o.firstmatch=t.firstmatch,o.breadcrumb=t.breadcrumb,o.match()},register:()=>{if(o.parent)return o.parent[n].add(o),()=>{o.parent[n].delete(o),o.router.un&&o.router.un()}},show:()=>{t.onShow(),!o.fallback&&o.parent&&o.parent.activeChilds.add(o)},hide:()=>{t.onHide(),!o.fallback&&o.parent&&o.parent.activeChilds.delete(o)},match:async()=>{o.matched=!1;let{path:e,url:n,from:s,query:c}=o.router,i=function(t,e){t=V(t,!0),e=V(e,!0);let n=[],r={},o=!0,s=t.split("/").map((t=>t.startsWith(":")?(n.push(t.slice(1)),"([^\\/]+)"):t)).join("\\/"),c=e.match(new RegExp(`^${s}$`));return c||(o=!1,c=e.match(new RegExp(`^${s}`))),c?(n.forEach(((t,e)=>r[t]=c[e+1])),{exact:o,params:r,part:c[0].slice(0,-1)}):null}(o.pattern,e);if(!o.fallback&&i&&o.redirect&&(!o.exact||o.exact&&i.exact))return await F(),ut.goto(X(e,o.parent&&o.parent.pattern,o.redirect));if(o.meta=i&&{from:s,url:n,query:c,match:i.part,pattern:o.pattern,breadcrumbs:o.parent&&o.parent.meta&&o.parent.meta.breadcrumbs.slice()||[],params:i.params,subscribe:r.subscribe},o.breadcrumb&&o.meta&&o.meta.breadcrumbs.push({name:o.breadcrumb,path:i.part}),r.set(o.meta),!i||o.fallback||!(!o.exact||o.exact&&i.exact)||o.parent&&o.parent.firstmatch&&o.parent.matched?o.hide():(t.onMeta(o.meta),o.parent&&(o.parent.matched=!0),o.show()),await F(),i&&!o.fallback&&(o.childs.size>0&&0==o.activeChilds.size||0==o.childs.size&&o.fallbacks.size>0)){let t=o;for(;0==t.fallbacks.size;)if(t=t.parent,!t)return;t&&t.fallbacks.forEach((t=>{t.redirect?ut.goto(X("/",t.parent&&t.parent.pattern,t.redirect)):t.show()}))}}};return c="tinro",i=o,w().$$.context.set(c,i),s=()=>o.register(),w().$$.on_mount.push(s),o.router.un=ut.subscribe((t=>{o.router.path=t.path,o.router.url=t.url,o.router.query=t.query,o.router.from=t.from,null!==o.pattern&&o.match()})),o;var s,c,i}function at(){return _("tinro").meta}var ut=function(){let{subscribe:t}=Q(st.get(),(t=>{st.start(t);let e=function(t){let e=e=>{let n=e.target.closest("a[href]"),r=n&&tt(n,"target",!1,"_self"),o=n&&tt(n,"tinro-ignore"),s=e.ctrlKey||e.metaKey||e.altKey||e.shiftKey;if("_self"==r&&!o&&!s&&n){let r=n.getAttribute("href").replace(/^\/#/,"");/^\/\/|^[a-zA-Z]+:/.test(r)||(e.preventDefault(),t(r.startsWith("/")?r:n.href.replace(window.location.origin,"")))}};return addEventListener("click",e),()=>removeEventListener("click",e)}(st.go);return()=>{st.stop(),e()}}));return{subscribe:t,goto:t=>st.go(t),params:lt,meta:at,useHashNavigation:t=>st.mode(t?ot.HASH:ot.HISTORY),mode:{hash:()=>st.mode(ot.HASH),history:()=>st.mode(ot.HISTORY),memory:()=>st.mode(ot.MEMORY)}}}();function lt(){return _("tinro").meta.params}const ft=t=>({params:2&t,meta:4&t}),$t=t=>({params:t[1],meta:t[2]});function pt(t){let e;const n=t[9].default,r=c(n,t,t[8],$t);return{c(){r&&r.c()},m(t,n){r&&r.m(t,n),e=!0},p(t,e){r&&r.p&&262&e&&a(r,n,t,t[8],e,ft,$t)},i(t){e||(W(r,t),e=!0)},o(t){B(r,t),e=!1},d(t){r&&r.d(t)}}}function dt(t){let e,n,r=t[0]&&pt(t);return{c(){r&&r.c(),e=h()},m(t,o){r&&r.m(t,o),l(t,e,o),n=!0},p(t,[n]){t[0]?r?(r.p(t,n),1&n&&W(r,1)):(r=pt(t),r.c(),W(r,1),r.m(e.parentNode,e)):r&&(N(),B(r,1,1,(()=>{r=null})),L())},i(t){n||(W(r),n=!0)},o(t){B(r),n=!1},d(t){r&&r.d(t),t&&f(e)}}}function mt(t,e,n){let{$$slots:r={},$$scope:o}=e,{path:s="/*"}=e,{fallback:c=!1}=e,{redirect:i=!1}=e,{firstmatch:a=!1}=e,{breadcrumb:u=null}=e,l=!1,f={},$={};const p=it({fallback:c,onShow(){n(0,l=!0)},onHide(){n(0,l=!1)},onMeta(t){n(2,$=t),n(1,f=$.params)}});return t.$$set=t=>{"path"in t&&n(3,s=t.path),"fallback"in t&&n(4,c=t.fallback),"redirect"in t&&n(5,i=t.redirect),"firstmatch"in t&&n(6,a=t.firstmatch),"breadcrumb"in t&&n(7,u=t.breadcrumb),"$$scope"in t&&n(8,o=t.$$scope)},t.$$.update=()=>{232&t.$$.dirty&&p.update({path:s,redirect:i,firstmatch:a,breadcrumb:u})},[l,f,$,s,c,i,a,u,o,r]}class ht extends G{constructor(t){super(),J(this,t,mt,dt,s,{path:3,fallback:4,redirect:5,firstmatch:6,breadcrumb:7})}}function gt(t){let e,n;const r=t[2].default,o=c(r,t,t[1],null);return{c(){e=p("div"),o&&o.c(),y(e,"style",t[0]),y(e,"class","svelte-1cgmnze")},m(t,r){l(t,e,r),o&&o.m(e,null),n=!0},p(t,[s]){o&&o.p&&2&s&&a(o,r,t,t[1],s,null,null),(!n||1&s)&&y(e,"style",t[0])},i(t){n||(W(o,t),n=!0)},o(t){B(o,t),n=!1},d(t){t&&f(e),o&&o.d(t)}}}function yt(t,e,n){let{$$slots:r={},$$scope:o}=e,{styles:s}=e;return t.$$set=t=>{"styles"in t&&n(0,s=t.styles),"$$scope"in t&&n(1,o=t.$$scope)},[s,o,r]}class vt extends G{constructor(t){super(),J(this,t,yt,gt,s,{styles:0})}}function bt(t){let e,n;const r=t[1].default,o=c(r,t,t[0],null);return{c(){e=p("div"),o&&o.c(),y(e,"class","svelte-l6q3gf")},m(t,r){l(t,e,r),o&&o.m(e,null),n=!0},p(t,[e]){o&&o.p&&1&e&&a(o,r,t,t[0],e,null,null)},i(t){n||(W(o,t),n=!0)},o(t){B(o,t),n=!1},d(t){t&&f(e),o&&o.d(t)}}}function xt(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class wt extends G{constructor(t){super(),J(this,t,xt,bt,s,{})}}function _t(t){let e,n;const r=t[1].default,o=c(r,t,t[0],null);return{c(){e=p("div"),o&&o.c(),y(e,"class","svelte-ow5ke2")},m(t,r){l(t,e,r),o&&o.m(e,null),n=!0},p(t,[e]){o&&o.p&&1&e&&a(o,r,t,t[0],e,null,null)},i(t){n||(W(o,t),n=!0)},o(t){B(o,t),n=!1},d(t){t&&f(e),o&&o.d(t)}}}function kt(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class Tt extends G{constructor(t){super(),J(this,t,kt,_t,s,{})}}function Ct(t){let e,n;const r=t[1].default,o=c(r,t,t[0],null);return{c(){e=p("h1"),o&&o.c(),y(e,"class","svelte-1twiesv")},m(t,r){l(t,e,r),o&&o.m(e,null),n=!0},p(t,[e]){o&&o.p&&1&e&&a(o,r,t,t[0],e,null,null)},i(t){n||(W(o,t),n=!0)},o(t){B(o,t),n=!1},d(t){t&&f(e),o&&o.d(t)}}}function Ot(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class Et extends G{constructor(t){super(),J(this,t,Ot,Ct,s,{})}}function jt(t){let e,n;const r=t[1].default,o=c(r,t,t[0],null);return{c(){e=p("h2"),o&&o.c(),y(e,"class","svelte-amz5sq")},m(t,r){l(t,e,r),o&&o.m(e,null),n=!0},p(t,[e]){o&&o.p&&1&e&&a(o,r,t,t[0],e,null,null)},i(t){n||(W(o,t),n=!0)},o(t){B(o,t),n=!1},d(t){t&&f(e),o&&o.d(t)}}}function At(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class Ft extends G{constructor(t){super(),J(this,t,At,jt,s,{})}}function St(t){let e,n;const r=t[1].default,o=c(r,t,t[0],null);return{c(){e=p("h1"),o&&o.c(),y(e,"class","svelte-1cuh197")},m(t,r){l(t,e,r),o&&o.m(e,null),n=!0},p(t,[e]){o&&o.p&&1&e&&a(o,r,t,t[0],e,null,null)},i(t){n||(W(o,t),n=!0)},o(t){B(o,t),n=!1},d(t){t&&f(e),o&&o.d(t)}}}function Rt(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class Pt extends G{constructor(t){super(),J(this,t,Rt,St,s,{})}}function Ht(t){let e,n,r,s;const i=t[3].default,u=c(i,t,t[2],null);return{c(){e=p("a"),u&&u.c(),y(e,"href",t[1]),y(e,"class","svelte-1voers2")},m(c,i){l(c,e,i),u&&u.m(e,null),n=!0,r||(s=g(e,"click",(function(){o(t[0])&&t[0].apply(this,arguments)})),r=!0)},p(r,[o]){t=r,u&&u.p&&4&o&&a(u,i,t,t[2],o,null,null),(!n||2&o)&&y(e,"href",t[1])},i(t){n||(W(u,t),n=!0)},o(t){B(u,t),n=!1},d(t){t&&f(e),u&&u.d(t),r=!1,s()}}}function Dt(t,e,n){let{$$slots:r={},$$scope:o}=e,{onClick:s}=e,{href:c}=e;return t.$$set=t=>{"onClick"in t&&n(0,s=t.onClick),"href"in t&&n(1,c=t.href),"$$scope"in t&&n(2,o=t.$$scope)},[s,c,o,r]}class Mt extends G{constructor(t){super(),J(this,t,Dt,Ht,s,{onClick:0,href:1})}}function qt(t,e,n){const r=t.slice();return r[1]=e[n].title,r[2]=e[n].description,r}function zt(t){let e,n;return{c(){e=d("Hi, this is "),n=p("b"),n.textContent="DataBox"},m(t,r){l(t,e,r),l(t,n,r)},d(t){t&&f(e),t&&f(n)}}}function Nt(t){let e,n,r;return{c(){e=d("A place where you can "),n=p("b"),n.textContent="save",r=d(" your property.")},m(t,o){l(t,e,o),l(t,n,o),l(t,r,o)},d(t){t&&f(e),t&&f(n),t&&f(r)}}}function Lt(t){let e;return{c(){e=d("Easily manage your items from simple and fast panel.")},m(t,n){l(t,e,n)},d(t){t&&f(e)}}}function Wt(t){let e;return{c(){e=d("Let's go!")},m(t,n){l(t,e,n)},d(t){t&&f(e)}}}function Bt(t){let e,n,r,o,s,c,i,a;return e=new Pt({props:{$$slots:{default:[zt]},$$scope:{ctx:t}}}),r=new Ft({props:{$$slots:{default:[Nt]},$$scope:{ctx:t}}}),s=new Et({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),i=new Mt({props:{href:"/signup",$$slots:{default:[Wt]},$$scope:{ctx:t}}}),{c(){U(e.$$.fragment),n=m(),U(r.$$.fragment),o=m(),U(s.$$.fragment),c=m(),U(i.$$.fragment)},m(t,u){Y(e,t,u),l(t,n,u),Y(r,t,u),l(t,o,u),Y(s,t,u),l(t,c,u),Y(i,t,u),a=!0},p(t,n){const o={};32&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o);const c={};32&n&&(c.$$scope={dirty:n,ctx:t}),r.$set(c);const a={};32&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const u={};32&n&&(u.$$scope={dirty:n,ctx:t}),i.$set(u)},i(t){a||(W(e.$$.fragment,t),W(r.$$.fragment,t),W(s.$$.fragment,t),W(i.$$.fragment,t),a=!0)},o(t){B(e.$$.fragment,t),B(r.$$.fragment,t),B(s.$$.fragment,t),B(i.$$.fragment,t),a=!1},d(t){K(e,t),t&&f(n),K(r,t),t&&f(o),K(s,t),t&&f(c),K(i,t)}}}function It(t){let e;return{c(){e=d("Features")},m(t,n){l(t,e,n)},d(t){t&&f(e)}}}function Ut(e){let n,r=e[1]+"";return{c(){n=d(r)},m(t,e){l(t,n,e)},p:t,d(t){t&&f(n)}}}function Yt(e){let n,r=e[2]+"";return{c(){n=d(r)},m(t,e){l(t,n,e)},p:t,d(t){t&&f(n)}}}function Kt(t){let e,n,r,o,s;return e=new Ft({props:{$$slots:{default:[Ut]},$$scope:{ctx:t}}}),r=new Et({props:{$$slots:{default:[Yt]},$$scope:{ctx:t}}}),{c(){U(e.$$.fragment),n=m(),U(r.$$.fragment),o=m()},m(t,c){Y(e,t,c),l(t,n,c),Y(r,t,c),l(t,o,c),s=!0},p(t,n){const o={};32&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o);const s={};32&n&&(s.$$scope={dirty:n,ctx:t}),r.$set(s)},i(t){s||(W(e.$$.fragment,t),W(r.$$.fragment,t),s=!0)},o(t){B(e.$$.fragment,t),B(r.$$.fragment,t),s=!1},d(t){K(e,t),t&&f(n),K(r,t),t&&f(o)}}}function Jt(t){let e,n;return e=new vt({props:{styles:"min-height: 290px; min-width: 250px; margin: 10px 10px;",$$slots:{default:[Kt]},$$scope:{ctx:t}}}),{c(){U(e.$$.fragment)},m(t,r){Y(e,t,r),n=!0},p(t,n){const r={};32&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){B(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}function Gt(t){let e,n,r=t[0],o=[];for(let e=0;e<r.length;e+=1)o[e]=Jt(qt(t,r,e));const s=t=>B(o[t],1,1,(()=>{o[t]=null}));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=h()},m(t,r){for(let e=0;e<o.length;e+=1)o[e].m(t,r);l(t,e,r),n=!0},p(t,n){if(1&n){let c;for(r=t[0],c=0;c<r.length;c+=1){const s=qt(t,r,c);o[c]?(o[c].p(s,n),W(o[c],1)):(o[c]=Jt(s),o[c].c(),W(o[c],1),o[c].m(e.parentNode,e))}for(N(),c=r.length;c<o.length;c+=1)s(c);L()}},i(t){if(!n){for(let t=0;t<r.length;t+=1)W(o[t]);n=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)B(o[t]);n=!1},d(t){$(o,t),t&&f(e)}}}function Zt(t){let e,n,r,o;return e=new Ft({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),r=new wt({props:{$$slots:{default:[Gt]},$$scope:{ctx:t}}}),{c(){U(e.$$.fragment),n=m(),U(r.$$.fragment)},m(t,s){Y(e,t,s),l(t,n,s),Y(r,t,s),o=!0},p(t,n){const o={};32&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o);const s={};32&n&&(s.$$scope={dirty:n,ctx:t}),r.$set(s)},i(t){o||(W(e.$$.fragment,t),W(r.$$.fragment,t),o=!0)},o(t){B(e.$$.fragment,t),B(r.$$.fragment,t),o=!1},d(t){K(e,t),t&&f(n),K(r,t)}}}function Qt(t){let e;return{c(){e=d("Contacts")},m(t,n){l(t,e,n)},d(t){t&&f(e)}}}function Vt(e){let n,r,o,s=(new Date).getFullYear()+"";return{c(){n=d("© "),r=d(s),o=d(" - PyFla.")},m(t,e){l(t,n,e),l(t,r,e),l(t,o,e)},p:t,d(t){t&&f(n),t&&f(r),t&&f(o)}}}function Xt(t){let e,n,r,o;return e=new Ft({props:{$$slots:{default:[Qt]},$$scope:{ctx:t}}}),r=new Et({props:{$$slots:{default:[Vt]},$$scope:{ctx:t}}}),{c(){U(e.$$.fragment),n=m(),U(r.$$.fragment)},m(t,s){Y(e,t,s),l(t,n,s),Y(r,t,s),o=!0},p(t,n){const o={};32&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o);const s={};32&n&&(s.$$scope={dirty:n,ctx:t}),r.$set(s)},i(t){o||(W(e.$$.fragment,t),W(r.$$.fragment,t),o=!0)},o(t){B(e.$$.fragment,t),B(r.$$.fragment,t),o=!1},d(t){K(e,t),t&&f(n),K(r,t)}}}function te(t){let e,n,r,o,s,c;return e=new Tt({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),r=new Tt({props:{$$slots:{default:[Zt]},$$scope:{ctx:t}}}),s=new Tt({props:{$$slots:{default:[Xt]},$$scope:{ctx:t}}}),{c(){U(e.$$.fragment),n=m(),U(r.$$.fragment),o=m(),U(s.$$.fragment)},m(t,i){Y(e,t,i),l(t,n,i),Y(r,t,i),l(t,o,i),Y(s,t,i),c=!0},p(t,[n]){const o={};32&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o);const c={};32&n&&(c.$$scope={dirty:n,ctx:t}),r.$set(c);const i={};32&n&&(i.$$scope={dirty:n,ctx:t}),s.$set(i)},i(t){c||(W(e.$$.fragment,t),W(r.$$.fragment,t),W(s.$$.fragment,t),c=!0)},o(t){B(e.$$.fragment,t),B(r.$$.fragment,t),B(s.$$.fragment,t),c=!1},d(t){K(e,t),t&&f(n),K(r,t),t&&f(o),K(s,t)}}}function ee(t){return[[{title:"Text 1",description:"Description 1"},{title:"Text 2",description:"Description 2"},{title:"Text 3",description:"Description 3"}]]}class ne extends G{constructor(t){super(),J(this,t,ee,te,s,{})}}function re(t){let e,n;const r=t[2].default,o=c(r,t,t[1],null);return{c(){e=p("a"),o&&o.c(),y(e,"href",t[0]),y(e,"class","svelte-pfx8q0")},m(t,r){l(t,e,r),o&&o.m(e,null),n=!0},p(t,[s]){o&&o.p&&2&s&&a(o,r,t,t[1],s,null,null),(!n||1&s)&&y(e,"href",t[0])},i(t){n||(W(o,t),n=!0)},o(t){B(o,t),n=!1},d(t){t&&f(e),o&&o.d(t)}}}function oe(t,e,n){let{$$slots:r={},$$scope:o}=e,{href:s}=e;return t.$$set=t=>{"href"in t&&n(0,s=t.href),"$$scope"in t&&n(1,o=t.$$scope)},[s,o,r]}class se extends G{constructor(t){super(),J(this,t,oe,re,s,{href:0})}}function ce(t){let e,n;return{c(){e=p("b"),e.textContent="Oooops!",n=d(" Page not found!")},m(t,r){l(t,e,r),l(t,n,r)},d(t){t&&f(e),t&&f(n)}}}function ie(t){let e;return{c(){e=d("return")},m(t,n){l(t,e,n)},d(t){t&&f(e)}}}function ae(t){let e,n,r,o;return n=new se({props:{href:"/",$$slots:{default:[ie]},$$scope:{ctx:t}}}),{c(){e=d("Try another link or just "),U(n.$$.fragment),r=d(" to the main page.")},m(t,s){l(t,e,s),Y(n,t,s),l(t,r,s),o=!0},p(t,e){const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){o||(W(n.$$.fragment,t),o=!0)},o(t){B(n.$$.fragment,t),o=!1},d(t){t&&f(e),K(n,t),t&&f(r)}}}function ue(t){let e,n,r,o;return e=new Pt({props:{$$slots:{default:[ce]},$$scope:{ctx:t}}}),r=new Ft({props:{$$slots:{default:[ae]},$$scope:{ctx:t}}}),{c(){U(e.$$.fragment),n=m(),U(r.$$.fragment)},m(t,s){Y(e,t,s),l(t,n,s),Y(r,t,s),o=!0},p(t,n){const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o);const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),r.$set(s)},i(t){o||(W(e.$$.fragment,t),W(r.$$.fragment,t),o=!0)},o(t){B(e.$$.fragment,t),B(r.$$.fragment,t),o=!1},d(t){K(e,t),t&&f(n),K(r,t)}}}function le(t){let e,n;return e=new Tt({props:{$$slots:{default:[ue]},$$scope:{ctx:t}}}),{c(){U(e.$$.fragment)},m(t,r){Y(e,t,r),n=!0},p(t,[n]){const r={};1&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){B(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}class fe extends G{constructor(t){super(),J(this,t,null,le,s,{})}}function $e(t){let e;return{c(){e=d("Profile")},m(t,n){l(t,e,n)},d(t){t&&f(e)}}}function pe(t){let e,n,r;return{c(){e=d("The content "),n=p("b"),n.textContent="will",r=d(" be added later.")},m(t,o){l(t,e,o),l(t,n,o),l(t,r,o)},d(t){t&&f(e),t&&f(n),t&&f(r)}}}function de(t){let e,n,r,o;return e=new Pt({props:{$$slots:{default:[$e]},$$scope:{ctx:t}}}),r=new Ft({props:{$$slots:{default:[pe]},$$scope:{ctx:t}}}),{c(){U(e.$$.fragment),n=m(),U(r.$$.fragment)},m(t,s){Y(e,t,s),l(t,n,s),Y(r,t,s),o=!0},p(t,n){const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o);const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),r.$set(s)},i(t){o||(W(e.$$.fragment,t),W(r.$$.fragment,t),o=!0)},o(t){B(e.$$.fragment,t),B(r.$$.fragment,t),o=!1},d(t){K(e,t),t&&f(n),K(r,t)}}}function me(t){let e,n;return e=new Tt({props:{$$slots:{default:[de]},$$scope:{ctx:t}}}),{c(){U(e.$$.fragment)},m(t,r){Y(e,t,r),n=!0},p(t,[n]){const r={};1&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){B(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}class he extends G{constructor(t){super(),J(this,t,null,me,s,{})}}function ge(t,e,n){const r=t.slice();return r[1]=e[n].text,r[2]=e[n].link,r}function ye(t){let e,n,r,o=t[1]+"";return{c(){e=p("a"),n=d(o),y(e,"href",r=t[2]),y(e,"class","svelte-14sffn0")},m(t,r){l(t,e,r),u(e,n)},p(t,s){1&s&&o!==(o=t[1]+"")&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(n,o),1&s&&r!==(r=t[2])&&y(e,"href",r)},d(t){t&&f(e)}}}function ve(e){let n,r=e[0],o=[];for(let t=0;t<r.length;t+=1)o[t]=ye(ge(e,r,t));return{c(){n=p("nav");for(let t=0;t<o.length;t+=1)o[t].c();y(n,"class","svelte-14sffn0")},m(t,e){l(t,n,e);for(let t=0;t<o.length;t+=1)o[t].m(n,null)},p(t,[e]){if(1&e){let s;for(r=t[0],s=0;s<r.length;s+=1){const c=ge(t,r,s);o[s]?o[s].p(c,e):(o[s]=ye(c),o[s].c(),o[s].m(n,null))}for(;s<o.length;s+=1)o[s].d(1);o.length=r.length}},i:t,o:t,d(t){t&&f(n),$(o,t)}}}function be(t,e,n){let{links:r}=e;return t.$$set=t=>{"links"in t&&n(0,r=t.links)},[r]}class xe extends G{constructor(t){super(),J(this,t,be,ve,s,{links:0})}}function we(t){let e;return{c(){e=d("About")},m(t,n){l(t,e,n)},d(t){t&&f(e)}}}function _e(t){let e,n,r,o,s;return{c(){e=d("We are a small team consisting of "),n=p("b"),n.textContent="4",r=d(" people. This project is made for the pre-professional "),o=p("b"),o.textContent="olympiad",s=d(".")},m(t,c){l(t,e,c),l(t,n,c),l(t,r,c),l(t,o,c),l(t,s,c)},d(t){t&&f(e),t&&f(n),t&&f(r),t&&f(o),t&&f(s)}}}function ke(t){let e,n,r,o;return e=new Pt({props:{$$slots:{default:[we]},$$scope:{ctx:t}}}),r=new Ft({props:{$$slots:{default:[_e]},$$scope:{ctx:t}}}),{c(){U(e.$$.fragment),n=m(),U(r.$$.fragment)},m(t,s){Y(e,t,s),l(t,n,s),Y(r,t,s),o=!0},p(t,n){const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o);const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),r.$set(s)},i(t){o||(W(e.$$.fragment,t),W(r.$$.fragment,t),o=!0)},o(t){B(e.$$.fragment,t),B(r.$$.fragment,t),o=!1},d(t){K(e,t),t&&f(n),K(r,t)}}}function Te(t){let e,n;return e=new Tt({props:{$$slots:{default:[ke]},$$scope:{ctx:t}}}),{c(){U(e.$$.fragment)},m(t,r){Y(e,t,r),n=!0},p(t,[n]){const r={};1&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){B(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}class Ce extends G{constructor(t){super(),J(this,t,null,Te,s,{})}}function Oe(e){let n,r,o;return{c(){n=p("input"),y(n,"type","text"),y(n,"placeholder",e[1]),y(n,"name",e[1]),y(n,"id",e[1]),n.required=!0,y(n,"class","svelte-131m5sy")},m(t,s){l(t,n,s),v(n,e[0]),r||(o=g(n,"input",e[2]),r=!0)},p(t,[e]){2&e&&y(n,"placeholder",t[1]),2&e&&y(n,"name",t[1]),2&e&&y(n,"id",t[1]),1&e&&n.value!==t[0]&&v(n,t[0])},i:t,o:t,d(t){t&&f(n),r=!1,o()}}}function Ee(t,e,n){let{inputText:r}=e,{value:o=""}=e;return t.$$set=t=>{"inputText"in t&&n(1,r=t.inputText),"value"in t&&n(0,o=t.value)},[o,r,function(){o=this.value,n(0,o)}]}class je extends G{constructor(t){super(),J(this,t,Ee,Oe,s,{inputText:1,value:0})}}function Ae(e){let n,r,o;return{c(){n=p("input"),y(n,"type","password"),y(n,"placeholder",e[1]),y(n,"name",e[1]),y(n,"id",e[1]),n.required=!0,y(n,"class","svelte-131m5sy")},m(t,s){l(t,n,s),v(n,e[0]),r||(o=g(n,"input",e[2]),r=!0)},p(t,[e]){2&e&&y(n,"placeholder",t[1]),2&e&&y(n,"name",t[1]),2&e&&y(n,"id",t[1]),1&e&&n.value!==t[0]&&v(n,t[0])},i:t,o:t,d(t){t&&f(n),r=!1,o()}}}function Fe(t,e,n){let{inputText:r}=e,{value:o=""}=e;return t.$$set=t=>{"inputText"in t&&n(1,r=t.inputText),"value"in t&&n(0,o=t.value)},[o,r,function(){o=this.value,n(0,o)}]}class Se extends G{constructor(t){super(),J(this,t,Fe,Ae,s,{inputText:1,value:0})}}var Re=function(){return(Re=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},Pe=function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var s=arguments[e],c=0,i=s.length;c<i;c++,o++)r[o]=s[c];return r},He=function(t,e,n){if(void 0===n&&(n=!1),!t||!e||"object"!=typeof t||"object"!=typeof e)return t;var r=Re({},t);for(var o in e)e.hasOwnProperty(o)&&(e[o]instanceof Array&&t[o]instanceof Array?r[o]=n?Pe(t[o],e[o]):e[o]:"object"==typeof e[o]&&"object"==typeof t[o]?r[o]=He(t[o],e[o],n):r[o]=e[o]);return r},De=function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var s=arguments[e],c=0,i=s.length;c<i;c++,o++)r[o]=s[c];return r},Me={defaults:{},errorType:null,polyfills:{fetch:null,FormData:null,URLSearchParams:null,performance:null,PerformanceObserver:null,AbortController:null},polyfill:function(t,e){for(var n=void 0===e?{}:e,r=n.doThrow,o=void 0===r||r,s=n.instance,c=void 0!==s&&s,i=[],a=2;a<arguments.length;a++)i[a-2]=arguments[a];var u=this.polyfills[t]||("undefined"!=typeof self?self[t]:null)||("undefined"!=typeof global?global[t]:null);if(o&&!u)throw new Error(t+" is not defined");return c&&u?new(u.bind.apply(u,De([void 0],i))):u}},qe=function(t,e,n,r){if(!t.getEntriesByName)return!1;var o=t.getEntriesByName(e);return!!(o&&o.length>0)&&(n(o.reverse()[0]),r.clearMeasures&&r.clearMeasures(e),ze.callbacks.delete(e),ze.callbacks.size<1&&(ze.observer.disconnect(),r.clearResourceTimings&&r.clearResourceTimings()),!0)},ze={callbacks:new Map,observer:null,observe:function(t,e){if(t&&e){var n=Me.polyfill("performance",{doThrow:!1});(function(t,e){return!ze.observer&&t&&e&&(ze.observer=new e((function(e){ze.callbacks.forEach((function(n,r){qe(e,r,n,t)}))})),t.clearResourceTimings&&t.clearResourceTimings()),ze.observer})(n,Me.polyfill("PerformanceObserver",{doThrow:!1}))&&(qe(n,t,e,n)||(ze.callbacks.size<1&&ze.observer.observe({entryTypes:["resource","measure"]}),ze.callbacks.set(t,e)))}}},Ne=function(t){this.error=t},Le=function(){return(Le=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},We=function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var s=arguments[e],c=0,i=s.length;c<i;c++,o++)r[o]=s[c];return r},Be="application/json",Ie="Content-Type",Ue=function(){function t(t,e,n,r,o,s){void 0===n&&(n=new Map),void 0===r&&(r=[]),void 0===o&&(o=[]),void 0===s&&(s=[]),this._url=t,this._options=e,this._catchers=n,this._resolvers=r,this._middlewares=o,this._deferredChain=s}return t.factory=function(e,n){return void 0===e&&(e=""),void 0===n&&(n={}),new t(e,n)},t.prototype.selfFactory=function(e){var n=void 0===e?{}:e,r=n.url,o=void 0===r?this._url:r,s=n.options,c=void 0===s?this._options:s,i=n.catchers,a=void 0===i?this._catchers:i,u=n.resolvers,l=void 0===u?this._resolvers:u,f=n.middlewares,$=void 0===f?this._middlewares:f,p=n.deferredChain,d=void 0===p?this._deferredChain:p;return new t(o,Le({},c),new Map(a),We(l),We($),We(d))},t.prototype.defaults=function(t,e){return void 0===e&&(e=!1),Me.defaults=e?He(Me.defaults,t):t,this},t.prototype.errorType=function(t){return Me.errorType=t,this},t.prototype.polyfills=function(t){return Me.polyfills=Le(Le({},Me.polyfills),t),this},t.prototype.url=function(t,e){if(void 0===e&&(e=!1),e)return this.selfFactory({url:t});var n=this._url.split("?");return this.selfFactory({url:n.length>1?n[0]+t+"?"+n[1]:this._url+t})},t.prototype.options=function(t,e){return void 0===e&&(e=!0),this.selfFactory({options:e?He(this._options,t):t})},t.prototype.query=function(t,e){return void 0===e&&(e=!1),this.selfFactory({url:Ye(this._url,t,e)})},t.prototype.headers=function(t){return this.selfFactory({options:He(this._options,{headers:t||{}})})},t.prototype.accept=function(t){return this.headers({Accept:t})},t.prototype.content=function(t){var e;return this.headers(((e={})["Content-Type"]=t,e))},t.prototype.auth=function(t){return this.headers({Authorization:t})},t.prototype.catcher=function(t,e){var n=new Map(this._catchers);return n.set(t,e),this.selfFactory({catchers:n})},t.prototype.signal=function(t){return this.selfFactory({options:Le(Le({},this._options),{signal:t.signal})})},t.prototype.resolve=function(t,e){return void 0===e&&(e=!1),this.selfFactory({resolvers:e?[t]:We(this._resolvers,[t])})},t.prototype.defer=function(t,e){return void 0===e&&(e=!1),this.selfFactory({deferredChain:e?[t]:We(this._deferredChain,[t])})},t.prototype.middlewares=function(t,e){return void 0===e&&(e=!1),this.selfFactory({middlewares:e?t:We(this._middlewares,t)})},t.prototype.method=function(t,e,n){void 0===e&&(e={}),void 0===n&&(n=null);var r=this._options.headers,o=n?"object"!=typeof n||r&&!Object.entries(r).every((function(t){var e=t[0],n=t[1];return e.toLowerCase()!==Ie.toLowerCase()||n.startsWith(Be)}))?this.body(n):this.json(n):this;return function(t){var e=t._url,n=t._catchers,r=t._resolvers,o=t._middlewares,s=t._options,c=new Map(n),i=He(Me.defaults,s),a=Me.polyfill("AbortController",{doThrow:!1,instance:!0});!i.signal&&a&&(i.signal=a.signal);var u={ref:null,clear:function(){u.ref&&(clearTimeout(u.ref),u.ref=null)}},l=function(t){return function(e){return 0===t.length?e:1===t.length?t[0](e):t.reduceRight((function(n,r,o){return o===t.length-2?r(n(e)):r(n)}))}}(o)(Me.polyfill("fetch"))(e,i),f=l.catch((function(t){throw new Ne(t)})).then((function(t){return u.clear(),t.ok?t:t[Me.errorType||"text"]().then((function(e){var n=new Error(e);throw n[Me.errorType||"text"]=e,n.status=t.status,n.response=t,n}))})),$=function(e){return e.catch((function(e){u.clear();var n=e instanceof Ne?e.error:e;if(e instanceof Ne&&c.has("__fromFetch"))return c.get("__fromFetch")(n,t);if(c.has(n.status))return c.get(n.status)(n,t);if(c.has(n.name))return c.get(n.name)(n,t);throw n}))},p=function(t){return function(e){return $(t?f.then((function(e){return e&&e[t]()})).then((function(t){return e?e(t):t})):f.then((function(t){return e?e(t):t})))}},d={res:p(null),json:p("json"),blob:p("blob"),formData:p("formData"),arrayBuffer:p("arrayBuffer"),text:p("text"),perfs:function(t){return l.then((function(e){return ze.observe(e.url,t)})),d},setTimeout:function(t,e){return void 0===e&&(e=a),u.clear(),u.ref=setTimeout((function(){return e.abort()}),t),d},controller:function(){return[a,d]},error:function(t,e){return c.set(t,e),d},badRequest:function(t){return d.error(400,t)},unauthorized:function(t){return d.error(401,t)},forbidden:function(t){return d.error(403,t)},notFound:function(t){return d.error(404,t)},timeout:function(t){return d.error(408,t)},internalError:function(t){return d.error(500,t)},fetchError:function(t){return d.error("__fromFetch",t)},onAbort:function(t){return d.error("AbortError",t)}};return r.reduce((function(e,n){return n(e,t)}),d)}((o=o.options(Le(Le({},e),{method:t})))._deferredChain.reduce((function(t,e){return e(t,t._url,t._options)}),o))},t.prototype.get=function(t){return this.method("GET",t)},t.prototype.delete=function(t){return this.method("DELETE",t)},t.prototype.put=function(t,e){return this.method("PUT",e,t)},t.prototype.post=function(t,e){return this.method("POST",e,t)},t.prototype.patch=function(t,e){return this.method("PATCH",e,t)},t.prototype.head=function(t){return this.method("HEAD",t)},t.prototype.opts=function(t){return this.method("OPTIONS",t)},t.prototype.replay=function(t){return this.method(this._options.method,t)},t.prototype.body=function(t){return this.selfFactory({options:Le(Le({},this._options),{body:t})})},t.prototype.json=function(t){var e,n=null===(e=Object.entries(this._options.headers||{}).find((function(t){var e=t[0],n=t[1];return e.toLowerCase()===Ie.toLowerCase()&&n.startsWith(Be)})))||void 0===e?void 0:e[1];return this.content(n||Be).body(JSON.stringify(t))},t.prototype.formData=function(t,e){return void 0===e&&(e=!1),this.body(Ke(t,e))},t.prototype.formUrl=function(t){return this.body("string"==typeof t?t:(e=t,Object.keys(e).map((function(t){var n=e[t];return n instanceof Array?n.map((function(e){return Je(t,e)})).join("&"):Je(t,n)})).join("&"))).content("application/x-www-form-urlencoded");var e},t}(),Ye=function(t,e,n){var r;if("string"==typeof e)r=e;else{var o=Me.polyfill("URLSearchParams",{instance:!0});for(var s in e)if(e[s]instanceof Array)for(var c=0,i=e[s];c<i.length;c++){var a=i[c];o.append(s,a)}else o.append(s,e[s]);r=o.toString()}var u=t.split("?");return n||u.length<2?u[0]+"?"+r:t+"&"+r};function Ke(t,e,n,r){return void 0===e&&(e=!1),void 0===n&&(n=Me.polyfill("FormData",{instance:!0})),void 0===r&&(r=[]),Object.entries(t).forEach((function(t){var o=t[0],s=t[1],c=r.reduce((function(t,e){return t?t+"["+e+"]":e}),null);if(c=c?c+"["+o+"]":o,s instanceof Array)for(var i=0,a=s;i<a.length;i++){var u=a[i];n.append(c+"[]",u)}else!e||"object"!=typeof s||e instanceof Array&&e.includes(o)?n.append(c,s):null!==s&&Ke(s,e,n,We(r,[o]))})),n}function Je(t,e){return encodeURIComponent(t)+"="+encodeURIComponent("object"==typeof e?JSON.stringify(e):""+e)}var Ge=Ue.factory;function Ze(t){let e;return{c(){e=d("Sign up")},m(t,n){l(t,e,n)},d(t){t&&f(e)}}}function Qe(t){let e,n,r;return{c(){e=d("Please "),n=p("b"),n.textContent="fill up",r=d(" these fields to continue:")},m(t,o){l(t,e,o),l(t,n,o),l(t,r,o)},d(t){t&&f(e),t&&f(n),t&&f(r)}}}function Ve(t){let e,n,r,o,s,c,i,a,$,d,h,v,b,x,w;function _(e){t[2].call(null,e)}e=new Pt({props:{$$slots:{default:[Ze]},$$scope:{ctx:t}}}),r=new Ft({props:{$$slots:{default:[Qe]},$$scope:{ctx:t}}});let k={inputText:"Name"};function C(e){t[3].call(null,e)}void 0!==t[0].name&&(k.value=t[0].name),c=new je({props:k}),T.push((()=>I(c,"value",_)));let O={inputText:"Password"};return void 0!==t[0].password&&(O.value=t[0].password),$=new Se({props:O}),T.push((()=>I($,"value",C))),{c(){U(e.$$.fragment),n=m(),U(r.$$.fragment),o=m(),s=p("form"),U(c.$$.fragment),a=m(),U($.$$.fragment),h=m(),v=p("button"),v.textContent="Continue",y(s,"action","api/authentication/from-form"),y(s,"method","POST")},m(i,f){Y(e,i,f),l(i,n,f),Y(r,i,f),l(i,o,f),l(i,s,f),Y(c,s,null),u(s,a),Y($,s,null),u(s,h),u(s,v),b=!0,x||(w=g(s,"submit",t[4]),x=!0)},p(t,n){const o={};32&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o);const s={};32&n&&(s.$$scope={dirty:n,ctx:t}),r.$set(s);const a={};!i&&1&n&&(i=!0,a.value=t[0].name,R((()=>i=!1))),c.$set(a);const u={};!d&&1&n&&(d=!0,u.value=t[0].password,R((()=>d=!1))),$.$set(u)},i(t){b||(W(e.$$.fragment,t),W(r.$$.fragment,t),W(c.$$.fragment,t),W($.$$.fragment,t),b=!0)},o(t){B(e.$$.fragment,t),B(r.$$.fragment,t),B(c.$$.fragment,t),B($.$$.fragment,t),b=!1},d(t){K(e,t),t&&f(n),K(r,t),t&&f(o),t&&f(s),K(c),K($),x=!1,w()}}}function Xe(t){let e,n;return e=new Tt({props:{$$slots:{default:[Ve]},$$scope:{ctx:t}}}),{c(){U(e.$$.fragment)},m(t,r){Y(e,t,r),n=!0},p(t,[n]){const r={};33&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){B(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}function tn(t,e,n){let r={name:"",password:""};function o(){Ge("api/authentication/authenticate").post(JSON.stringify(r)).res((t=>{alert(t)}))}return[r,o,function(t){r.name=t,n(0,r)},function(t){r.password=t,n(0,r)},()=>o()]}Ge.default=Ue.factory;class en extends G{constructor(t){super(),J(this,t,tn,Xe,s,{})}}function nn(t){let e,n;return e=new ne({}),{c(){U(e.$$.fragment)},m(t,r){Y(e,t,r),n=!0},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){B(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}function rn(t){let e,n;return e=new he({}),{c(){U(e.$$.fragment)},m(t,r){Y(e,t,r),n=!0},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){B(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}function on(t){let e,n;return e=new Ce({}),{c(){U(e.$$.fragment)},m(t,r){Y(e,t,r),n=!0},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){B(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}function sn(t){let e,n;return e=new en({}),{c(){U(e.$$.fragment)},m(t,r){Y(e,t,r),n=!0},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){B(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}function cn(t){let e,n;return e=new fe({}),{c(){U(e.$$.fragment)},m(t,r){Y(e,t,r),n=!0},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){B(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}function an(t){let e,n,r,o,s,c,i,a,u,$;return e=new ht({props:{path:"/",$$slots:{default:[nn]},$$scope:{ctx:t}}}),r=new ht({props:{path:"/profile",$$slots:{default:[rn]},$$scope:{ctx:t}}}),s=new ht({props:{path:"/about",$$slots:{default:[on]},$$scope:{ctx:t}}}),i=new ht({props:{path:"/signup",$$slots:{default:[sn]},$$scope:{ctx:t}}}),u=new ht({props:{fallback:!0,$$slots:{default:[cn]},$$scope:{ctx:t}}}),{c(){U(e.$$.fragment),n=m(),U(r.$$.fragment),o=m(),U(s.$$.fragment),c=m(),U(i.$$.fragment),a=m(),U(u.$$.fragment)},m(t,f){Y(e,t,f),l(t,n,f),Y(r,t,f),l(t,o,f),Y(s,t,f),l(t,c,f),Y(i,t,f),l(t,a,f),Y(u,t,f),$=!0},p(t,n){const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o);const c={};2&n&&(c.$$scope={dirty:n,ctx:t}),r.$set(c);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const l={};2&n&&(l.$$scope={dirty:n,ctx:t}),i.$set(l);const f={};2&n&&(f.$$scope={dirty:n,ctx:t}),u.$set(f)},i(t){$||(W(e.$$.fragment,t),W(r.$$.fragment,t),W(s.$$.fragment,t),W(i.$$.fragment,t),W(u.$$.fragment,t),$=!0)},o(t){B(e.$$.fragment,t),B(r.$$.fragment,t),B(s.$$.fragment,t),B(i.$$.fragment,t),B(u.$$.fragment,t),$=!1},d(t){K(e,t),t&&f(n),K(r,t),t&&f(o),K(s,t),t&&f(c),K(i,t),t&&f(a),K(u,t)}}}function un(t){let e,n,r,o;return e=new xe({props:{links:t[0]}}),r=new ht({props:{$$slots:{default:[an]},$$scope:{ctx:t}}}),{c(){U(e.$$.fragment),n=m(),U(r.$$.fragment)},m(t,s){Y(e,t,s),l(t,n,s),Y(r,t,s),o=!0},p(t,[e]){const n={};2&e&&(n.$$scope={dirty:e,ctx:t}),r.$set(n)},i(t){o||(W(e.$$.fragment,t),W(r.$$.fragment,t),o=!0)},o(t){B(e.$$.fragment,t),B(r.$$.fragment,t),o=!1},d(t){K(e,t),t&&f(n),K(r,t)}}}function ln(t){return[[{text:"Home",link:"/"},{text:"Profile",link:"/profile"},{text:"About",link:"/about"}]]}return new class extends G{constructor(t){super(),J(this,t,ln,un,s,{})}}({target:document.body})}();

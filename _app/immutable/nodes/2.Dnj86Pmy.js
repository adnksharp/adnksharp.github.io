import{d as U,a as P,f as J}from"../chunks/s7eWQbRU.js";import"../chunks/BLR2kJgQ.js";import{a6 as me,ah as be,o as _,y as F,p as z,a8 as we,q as ye,g as S,I as Ce,v as xe,w as Se,x as $,z as L,D as M,ab as Be,A as se,B as E,C as ze,at as I,af as ne,a4 as ee,au as Re,m as Pe,F as ie,a5 as ce,av as Qe,aw as De,ae as Te,ax as Je,ay as K,az as ke,aA as Me,a9 as Oe,an as fe,b as He,aB as Le,aC as Ue,f as Ve,aD as Ne,aE as je,aF as Ke,aG as Ee,aH as Ye,_ as b,$ as C,a0 as w,Y as j,aI as Fe}from"../chunks/CRjTDpU0.js";import{i as Ie,c as qe,d as We,n as Ze,a as Ge,s as q}from"../chunks/DfR4vlrE.js";import{l as V,i as Xe}from"../chunks/BCsAjZpw.js";function _e(e,i){if(i){const a=document.body;e.autofocus=!0,me(()=>{document.activeElement===a&&e.focus()})}}function $e(e,i){return i}function ei(e,i,a,r){for(var t=[],l=i.length,n=0;n<l;n++)De(i[n].e,t,!0);var p=l>0&&t.length===0&&a!==null;if(p){var A=a.parentNode;Te(A),A.append(a),r.clear(),D(e,i[0].prev,i[l-1].next)}Je(t,()=>{for(var f=0;f<l;f++){var s=i[f];p||(r.delete(s.k),D(e,s.prev,s.next)),K(s.e,!p)}})}function ii(e,i,a,r,t,l=null){var n=e,p={flags:i,items:new Map,first:null};{var A=e;n=z?F(we(A)):A.appendChild(be())}z&&ye();var f=null,s=!1,c=Ce(()=>{var o=a();return ce(o)?o:o==null?[]:ne(o)});_(()=>{var o=S(c),d=o.length;if(s&&d===0)return;s=d===0;let v=!1;if(z){var B=xe(n)===Se;B!==(d===0)&&(n=$(),F(n),L(!1),v=!0)}if(z){for(var R=null,u,x=0;x<d;x++){if(M.nodeType===8&&M.data===Be){n=M,v=!0,L(!1);break}var g=o[x],h=r(g,x);u=de(M,p,R,null,g,h,x,t,i,a),p.items.set(h,u),R=u}d>0&&F($())}z||ai(o,p,n,t,i,r,a),l!==null&&(d===0?f?se(f):f=E(()=>l(n)):f!==null&&ze(f,()=>{f=null})),v&&L(!0),S(c)}),z&&(n=M)}function ai(e,i,a,r,t,l,n){var p=e.length,A=i.items,f=i.first,s=f,c,o=null,d=[],v=[],B,R,u,x;for(x=0;x<p;x+=1){if(B=e[x],R=l(B,x),u=A.get(R),u===void 0){var g=s?s.e.nodes_start:a;o=de(g,i,o,o===null?i.first:o.next,B,R,x,r,t,n),A.set(R,o),d=[],v=[],s=o.next;continue}if(ri(u,B,x),(u.e.f&I)!==0&&se(u.e),u!==s){if(c!==void 0&&c.has(u)){if(d.length<v.length){var h=v[0],m;o=h.prev;var Q=d[0],y=d[d.length-1];for(m=0;m<d.length;m+=1)ae(d[m],h,a);for(m=0;m<v.length;m+=1)c.delete(v[m]);D(i,Q.prev,y.next),D(i,o,Q),D(i,y,h),s=h,o=y,x-=1,d=[],v=[]}else c.delete(u),ae(u,s,a),D(i,u.prev,u.next),D(i,u,o===null?i.first:o.next),D(i,o,u),o=u;continue}for(d=[],v=[];s!==null&&s.k!==R;)(s.e.f&I)===0&&(c??(c=new Set)).add(s),v.push(s),s=s.next;if(s===null)continue;u=s}d.push(u),o=u,s=u.next}if(s!==null||c!==void 0){for(var k=c===void 0?[]:ne(c);s!==null;)(s.e.f&I)===0&&k.push(s),s=s.next;var Y=k.length;if(Y>0){var ge=p===0?a:null;ei(i,k,ge,A)}}ee.first=i.first&&i.first.e,ee.last=o&&o.e}function ri(e,i,a,r){Re(e.v,i),e.i=a}function de(e,i,a,r,t,l,n,p,A,f){var s=(A&ke)!==0,c=(A&Me)===0,o=s?c?Pe(t):ie(t):t,d=(A&Qe)===0?n:ie(n),v={i:d,v:o,k:l,a:null,e:null,prev:a,next:r};try{return v.e=E(()=>p(e,o,d,f),z),v.e.prev=a&&a.e,v.e.next=r&&r.e,a===null?i.first=v:(a.next=v,a.e.next=v.e),r!==null&&(r.prev=v,r.e.prev=v.e),v}finally{}}function ae(e,i,a){for(var r=e.next?e.next.e.nodes_start:a,t=i?i.e.nodes_start:a,l=e.e.nodes_start;l!==r;){var n=Oe(l);t.before(l),l=n}}function D(e,i,a){i===null?e.first=a:(i.next=a,i.e.next=a&&a.e),a!==null&&(a.prev=i,a.e.prev=i&&i.e)}function ti(e,i){var a=void 0,r;_(()=>{a!==(a=i())&&(r&&(K(r),r=null),a&&(r=E(()=>{fe(()=>a(e))})))})}function pe(e){var i,a,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var t=e.length;for(i=0;i<t;i++)e[i]&&(a=pe(e[i]))&&(r&&(r+=" "),r+=a)}else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}function oi(){for(var e,i,a=0,r="",t=arguments.length;a<t;a++)(e=arguments[a])&&(i=pe(e))&&(r&&(r+=" "),r+=i);return r}function li(e){return typeof e=="object"?oi(e):e??""}const re=[...` 	
\r\f \v\uFEFF`];function si(e,i,a){var r=e==null?"":""+e;if(a){for(var t in a)if(a[t])r=r?r+" "+t:t;else if(r.length)for(var l=t.length,n=0;(n=r.indexOf(t,n))>=0;){var p=n+l;(n===0||re.includes(r[n-1]))&&(p===r.length||re.includes(r[p]))?r=(n===0?"":r.substring(0,n))+r.substring(p+1):n=p}}return r===""?null:r}function te(e,i=!1){var a=i?" !important;":";",r="";for(var t in e){var l=e[t];l!=null&&l!==""&&(r+=" "+t+": "+l+a)}return r}function W(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function ni(e,i){if(i){var a="",r,t;if(Array.isArray(i)?(r=i[0],t=i[1]):r=i,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var l=!1,n=0,p=!1,A=[];r&&A.push(...Object.keys(r).map(W)),t&&A.push(...Object.keys(t).map(W));var f=0,s=-1;const B=e.length;for(var c=0;c<B;c++){var o=e[c];if(p?o==="/"&&e[c-1]==="*"&&(p=!1):l?l===o&&(l=!1):o==="/"&&e[c+1]==="*"?p=!0:o==='"'||o==="'"?l=o:o==="("?n++:o===")"&&n--,!p&&l===!1&&n===0){if(o===":"&&s===-1)s=c;else if(o===";"||c===B-1){if(s!==-1){var d=W(e.substring(f,s).trim());if(!A.includes(d)){o!==";"&&c++;var v=e.substring(f,c).trim();a+=" "+v+";"}}f=c+1,s=-1}}}}return r&&(a+=te(r)),t&&(a+=te(t,!0)),a=a.trim(),a===""?null:a}return e==null?null:String(e)}function ci(e,i,a,r,t,l){var n=e.__className;if(z||n!==a||n===void 0){var p=si(a,r,l);(!z||p!==e.getAttribute("class"))&&(p==null?e.removeAttribute("class"):i?e.className=p:e.setAttribute("class",p)),e.__className=a}else if(l&&t!==l)for(var A in l){var f=!!l[A];(t==null||f!==!!t[A])&&e.classList.toggle(A,f)}return l}function Z(e,i={},a,r){for(var t in a){var l=a[t];i[t]!==l&&(a[t]==null?e.style.removeProperty(t):e.style.setProperty(t,l,r))}}function fi(e,i,a,r){var t=e.__style;if(z||t!==i){var l=ni(i,r);(!z||l!==e.getAttribute("style"))&&(l==null?e.removeAttribute("style"):e.style.cssText=l),e.__style=i}else r&&(Array.isArray(r)?(Z(e,a==null?void 0:a[0],r[0]),Z(e,a==null?void 0:a[1],r[1],"important")):Z(e,a,r));return r}function X(e,i,a){if(e.multiple){if(i==null)return;if(!ce(i))return Le();for(var r of e.options)r.selected=i.includes(oe(r));return}for(r of e.options){var t=oe(r);if(Ue(t,i)){r.selected=!0;return}}(!a||i!==void 0)&&(e.selectedIndex=-1)}function di(e,i){let a=!0;fe(()=>{i&&X(e,He(i),a),a=!1;var r=new MutationObserver(()=>{var t=e.__value;X(e,t)});return r.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{r.disconnect()}})}function oe(e){return"__value"in e?e.__value:e.value}const O=Symbol("class"),H=Symbol("style"),Ae=Symbol("is custom element"),ue=Symbol("is html");function pi(e,i){i?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function T(e,i,a,r){var t=ve(e);z&&(t[i]=e.getAttribute(i),i==="src"||i==="srcset"||i==="href"&&e.nodeName==="LINK")||t[i]!==(t[i]=a)&&(i==="loading"&&(e[Ee]=a),a==null?e.removeAttribute(i):typeof a!="string"&&he(e).includes(i)?e[i]=a:e.setAttribute(i,a))}function Ai(e,i,a,r,t=!1){var l=ve(e),n=l[Ae],p=!l[ue];let A=z&&n;A&&L(!1);var f=i||{},s=e.tagName==="OPTION";for(var c in i)c in a||(a[c]=null);a.class?a.class=li(a.class):a[O]&&(a.class=null),a[H]&&(a.style??(a.style=null));var o=he(e);for(const g in a){let h=a[g];if(s&&g==="value"&&h==null){e.value=e.__value="",f[g]=h;continue}if(g==="class"){var d=e.namespaceURI==="http://www.w3.org/1999/xhtml";ci(e,d,h,r,i==null?void 0:i[O],a[O]),f[g]=h,f[O]=a[O];continue}if(g==="style"){fi(e,h,i==null?void 0:i[H],a[H]),f[g]=h,f[H]=a[H];continue}var v=f[g];if(h!==v){f[g]=h;var B=g[0]+g[1];if(B!=="$$")if(B==="on"){const m={},Q="$$"+g;let y=g.slice(2);var R=Ge(y);if(Ie(y)&&(y=y.slice(0,-7),m.capture=!0),!R&&v){if(h!=null)continue;e.removeEventListener(y,f[Q],m),f[Q]=null}if(h!=null)if(R)e[`__${y}`]=h,We([y]);else{let k=function(Y){f[g].call(this,Y)};f[Q]=qe(y,e,k,m)}else R&&(e[`__${y}`]=void 0)}else if(g==="style")T(e,g,h);else if(g==="autofocus")_e(e,!!h);else if(!n&&(g==="__value"||g==="value"&&h!=null))e.value=e.__value=h;else if(g==="selected"&&s)pi(e,h);else{var u=g;p||(u=Ze(u));var x=u==="defaultValue"||u==="defaultChecked";if(h==null&&!n&&!x)if(l[g]=null,u==="value"||u==="checked"){let m=e;const Q=i===void 0;if(u==="value"){let y=m.defaultValue;m.removeAttribute(u),m.defaultValue=y,m.value=m.__value=Q?y:null}else{let y=m.defaultChecked;m.removeAttribute(u),m.defaultChecked=y,m.checked=Q?y:!1}}else e.removeAttribute(g);else x||o.includes(u)&&(n||typeof h!="string")?e[u]=h:typeof h!="function"&&T(e,u,h)}}}return A&&L(!0),f}function N(e,i,a=[],r,t=!1,l=Ve){const n=a.map(l);var p=void 0,A={},f=e.nodeName==="SELECT",s=!1;_(()=>{var c=i(...n.map(S));Ai(e,p,c,r,t),s&&f&&"value"in c&&X(e,c.value,!1);for(let d of Object.getOwnPropertySymbols(A))c[d]||K(A[d]);for(let d of Object.getOwnPropertySymbols(c)){var o=c[d];d.description===je&&(!p||o!==p[d])&&(A[d]&&K(A[d]),A[d]=E(()=>ti(e,()=>o)))}p=c}),f&&di(e,()=>p.value),s=!0}function ve(e){return e.__attributes??(e.__attributes={[Ae]:e.nodeName.includes("-"),[ue]:e.namespaceURI===Ne})}var le=new Map;function he(e){var i=le.get(e.nodeName);if(i)return i;le.set(e.nodeName,i=[]);for(var a,r=e,t=Element.prototype;t!==r;){a=Ye(r);for(var l in a)a[l].set&&i.push(l);r=Ke(r)}return i}async function ui(){return{title:"Inicio"}}const ra=Object.freeze(Object.defineProperty({__proto__:null,load:ui},Symbol.toStringTag,{value:"Module"}));var vi=U('<svg><g fill="none"><path fill="#367af2" d="M2 10v12.5A4.5 4.5 0 0 0 6.5 27h19a4.5 4.5 0 0 0 4.5-4.5V10l-13.526 7.292a1 1 0 0 1-.948 0z"></path><path fill="url(#fluentColorMail320)" d="M2 10v12.5A4.5 4.5 0 0 0 6.5 27h19a4.5 4.5 0 0 0 4.5-4.5V10l-13.526 7.292a1 1 0 0 1-.948 0z"></path><path fill="url(#fluentColorMail321)" d="M2 10v12.5A4.5 4.5 0 0 0 6.5 27h19a4.5 4.5 0 0 0 4.5-4.5V10l-13.526 7.292a1 1 0 0 1-.948 0z"></path><path fill="url(#fluentColorMail322)" fill-opacity="0.75" d="M2 10v12.5A4.5 4.5 0 0 0 6.5 27h19a4.5 4.5 0 0 0 4.5-4.5V10l-13.526 7.292a1 1 0 0 1-.948 0z"></path><path fill="url(#fluentColorMail323)" fill-opacity="0.7" d="M2 10v12.5A4.5 4.5 0 0 0 6.5 27h19a4.5 4.5 0 0 0 4.5-4.5V10l-13.526 7.292a1 1 0 0 1-.948 0z"></path><path fill="url(#fluentColorMail324)" d="M6.5 5A4.5 4.5 0 0 0 2 9.5v1.09l13.526 7.292a1 1 0 0 0 .948 0L30 10.59V9.5A4.5 4.5 0 0 0 25.5 5z"></path><defs><linearGradient id="fluentColorMail320" x1="19.555" x2="26.862" y1="13.332" y2="27.873" gradientUnits="userSpaceOnUse"><stop offset=".199" stop-color="#0094f0" stop-opacity="0"></stop><stop offset=".431" stop-color="#0094f0"></stop></linearGradient><linearGradient id="fluentColorMail321" x1="12" x2="4.914" y1="11.79" y2="28.328" gradientUnits="userSpaceOnUse"><stop offset=".191" stop-color="#0094f0" stop-opacity="0"></stop><stop offset=".431" stop-color="#0094f0"></stop></linearGradient><linearGradient id="fluentColorMail322" x1="23.383" x2="24.532" y1="20.142" y2="28.575" gradientUnits="userSpaceOnUse"><stop stop-color="#2764e7" stop-opacity="0"></stop><stop offset="1" stop-color="#2764e7"></stop></linearGradient><linearGradient id="fluentColorMail323" x1="20.333" x2="22.43" y1="12.088" y2="29.25" gradientUnits="userSpaceOnUse"><stop offset=".533" stop-color="#ff6ce8" stop-opacity="0"></stop><stop offset="1" stop-color="#ff6ce8"></stop></linearGradient><linearGradient id="fluentColorMail324" x1="10.318" x2="18.903" y1=".976" y2="23.436" gradientUnits="userSpaceOnUse"><stop stop-color="#6ce0ff"></stop><stop offset=".462" stop-color="#29c3ff"></stop><stop offset="1" stop-color="#4894fe"></stop></linearGradient></defs></g></svg>');function hi(e,i){const a=V(i,["children","$$slots","$$events","$$legacy"]);var r=vi();N(r,()=>({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",...a})),P(e,r)}var gi=U('<svg><g fill="none"><rect width="256" height="256" fill="#fff" rx="60"></rect><rect width="256" height="256" fill="#0a66c2" rx="60"></rect><path fill="#fff" d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"></path></g></svg>');function mi(e,i){const a=V(i,["children","$$slots","$$events","$$legacy"]);var r=gi();N(r,()=>({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 256 256",...a})),P(e,r)}var bi=U('<svg><path fill="var(--fg-color)" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"></path></svg>');function wi(e,i){const a=V(i,["children","$$slots","$$events","$$legacy"]);var r=bi();N(r,()=>({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",...a})),P(e,r)}var yi=U('<svg><path fill="#1877f2" d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"></path><path fill="#fff" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"></path></svg>');function Ci(e,i){const a=V(i,["children","$$slots","$$events","$$legacy"]);var r=yi();N(r,()=>({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 256 256",...a})),P(e,r)}var xi=U('<svg><defs><linearGradient id="logosTelegram0" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#2aabee"></stop><stop offset="100%" stop-color="#229ed9"></stop></linearGradient></defs><path fill="url(#logosTelegram0)" d="M128 0C94.06 0 61.48 13.494 37.5 37.49A128.04 128.04 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51s-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0"></path><path fill="#fff" d="M57.94 126.648q55.98-24.384 74.64-32.152c35.56-14.786 42.94-17.354 47.76-17.441c1.06-.017 3.42.245 4.96 1.49c1.28 1.05 1.64 2.47 1.82 3.467c.16.996.38 3.266.2 5.038c-1.92 20.24-10.26 69.356-14.5 92.026c-1.78 9.592-5.32 12.808-8.74 13.122c-7.44.684-13.08-4.912-20.28-9.63c-11.26-7.386-17.62-11.982-28.56-19.188c-12.64-8.328-4.44-12.906 2.76-20.386c1.88-1.958 34.64-31.748 35.26-34.45c.08-.338.16-1.598-.6-2.262c-.74-.666-1.84-.438-2.64-.258c-1.14.256-19.12 12.152-54 35.686c-5.1 3.508-9.72 5.218-13.88 5.128c-4.56-.098-13.36-2.584-19.9-4.708c-8-2.606-14.38-3.984-13.82-8.41c.28-2.304 3.46-4.662 9.52-7.072"></path></svg>');function Si(e,i){const a=V(i,["children","$$slots","$$events","$$legacy"]);var r=xi();N(r,()=>({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 256 256",...a})),P(e,r)}var Bi=J(`<section id="header"><style>#header p {
			font-size: 1.2em;
			width: 47%;
			text-align: center;
		}

		#h1 {
			font-size: 8em;
			-webkit-text-stroke: 1px var(--fg-color);
			color: transparent;
			animation: glitch 3s linear infinite;
		}

		@keyframes glitch{
			2%, 91%{
				transform: translate(20px,0) skew(-5deg);
			}
			1%, 92%{
				transform: translate(-20px,0) skew(5deg);
			}
			0%, 3%, 90%, 93%{
				transform: translate(0,0) skew(0deg); 
			}
		}

		#h1:before,
		#h1:after{
			content: attr(title);
			position: absolute;
			left: 0;
		}

		#h1:before{
			animation: glitchTop 3s linear infinite;
			clip-path: polygon(0 0, 100% 0, 100% 40%, 0 40%);
			-webkit-clip-path: polygon(0 0, 100% 0, 100% 40%, 0 40%);
		}

		@keyframes glitchTop{
			2%, 91%{
				transform: translate(25px, -5px);
				-webkit-text-stroke: 1px #00ffff;
			}
			1%, 92%{
				transform: translate(-15px, 5px);
				-webkit-text-stroke: 1px #ff00ff;
			}
			0%, 3%, 90%, 93%{
				transform: translate(0, 0) skew(0);
				-webkit-text-stroke: 0;
			}
		}

		#h1:after{
			animation: glitchBotom 3s linear infinite;
			clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
			-webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
		}

		@keyframes glitchBotom{
			2%, 91%{
				transform: translate(15px, 5px);
				-webkit-text-stroke: 1px #ff00ff;
			}
			1%, 92%{
				transform: translate(-25px, -5px);
				-webkit-text-stroke: 1px #00ffff;
			}
			0%, 3%, 90%, 93%{
				transform: translate(0, 0) skew(0); 
				-webkit-text-stroke: 0;
			}
		}

		#header div {
			display: flex;
			flex-direction: row;
		}

		#header div a {
			margin: 0 10px;
			text-decoration: none;
		}</style> <div id="h1"></div> <p></p> <div><a href="mailto:adnksharp@gmail.com"><!></a> <a href="https://www.linkedin.com/in/adanksharp/" target="_blank"><!></a> <a href="https://github.com/adnksharp" target="_blank"><!></a> <a href="https://www.facebook.com/adnksharp" target="_blank"><!></a> <a href="https://t.me/adnksharp" target="_blank"><!></a></div></section>`);function zi(e){let i="ADN KSHARP";var a=Bi(),r=b(C(a),2);T(r,"title",i),r.textContent="ADN KSHARP";var t=b(r,2);t.textContent="Estudiante de ingeniería mecatrónica apasionado por la creación de soluciones tecnológicas que integran hardware y software para resolver problemas.";var l=b(t,2),n=C(l),p=C(n);hi(p,{}),w(n);var A=b(n,2),f=C(A);mi(f,{}),w(A);var s=b(A,2),c=C(s);wi(c,{}),w(s);var o=b(s,2),d=C(o);Ci(d,{}),w(o);var v=b(o,2),B=C(v);Si(B,{}),w(v),w(l),w(a),P(e,a)}const Ri="data:image/webp;base64,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",Pi=""+new URL("../assets/cpp.CbAbvCxV.webp",import.meta.url).href,Qi="data:image/webp;base64,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",Di=""+new URL("../assets/electron.B4LY9C9L.webp",import.meta.url).href,Ti="data:image/webp;base64,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",Ji=""+new URL("../assets/js.CdHoEB5j.webp",import.meta.url).href,ki="data:image/webp;base64,UklGRmIMAABXRUJQVlA4WAoAAAAQAAAAlQAAlQAAQUxQSPwCAAABCbVtGzmw2vP+C999DnVE/ydAMVEMexO4n/6lLJw7JFwDQ23bNgzz/9l9zBgREyD2Lj5TIXdTGLiubdt0Xmzbtm3n8jMdZKSDlOP0lE82YrOAiAmYAMnVtimy8uMQAAG4rkiCmIgB0vAI3N11687/V7tOS1UtqS7m/84sI2ICmIyHR89tIf0vn6GX+5NbAdhD/24cAcgBxnwvJE5OQOINYSIADFUAQqDsQzAA1XZMMsKEgTIASJCm1Y+DtA0mHQASxBv1bB6EWL25BKXCpCRMOJCg4jExDpMElGzCxCaYEGPiRTsJRKxc3WGSj6BMmCQOEyasUofJqgSl0k2CDQUmJKqNeThWbSg2KZkNJ6oxhWdQjMMkmzcpVY+JF0yIFfOCiTOY5CMmqcUkAUU8KIQJL1KMmEwZKDkmc6qWN4uQqNXXy/CGoW0wMR4TpmUFlNRiUgyYlGrJQn2tFS9ErJQTTLzBZMowSSwm4jExbilRimlp9jrJcqQzL9a2mNhkk+KMSjZdjESlpluOVapBqVaYCGHCsJUjJnWHSaOSRDAVCnkTAf1VyEbBGiWY9HUMopD4GFghBkUoRuP14SjEYWJAWZWYeAHFgCLqjGUUxOoUAyblKg5RJ5vjYHWY4vwLiqgjkTSdNhxJX2PSgeJSZWwaCf1VZspiYW1yTOo+FlGGKVYGRTwmiQPFYpJNmMwZJp4xIVRElaaNh1XJZlAmTBIXz9dckfYVxftk36mzb60CJysjPQdPR3TLYQRBTXpsfyx7dvWmp/9TIAnoyhP5R9OHW9c+0n/NolaDAA5c/8TJ7asPt9E6ZAtqQ4q0/kPz+uqdX7ROZVKorjie37Jfrl1/T2uYxaKBqLH7FfPk+p2Z1rdQCIAUiX3b9O769Z+09lkU6gDALRr3+871e1tJSzavFqhO63Ptk5s3c9JWJAvCIkTeN32+ce31FlLarA5ocXmHPLzxwJLuAl4YVCbB8sTw7vqVP4ShQgmytHezs3D1OUGZ4jcwNxQX0kdrElZQOCBACQAAkC8AnQEqlgCWAD4tFIdCoaGM5ccgDAFiWYA0QYBfyH4k95Fy7sH47/ud/vus2137ift1/l+pHMH03fqP71+2P9q+fv9Y/n34vfwD6U+YH+oX92/pf7Zf1LuReYP+Xf17/M/zr3d/7l/Y/Z/+sP+q9wD+g/0L1pf9D7Mv8k/3HsD/wr+g+lH/v/8P8If7L/+b/T+5R/a//T1gHUvqq/w1kV+4sY84+/aPcuMD6zbB7MH/ov/M/qvsW6efpr0YxSLPAETKpWQyfiIUSxcXam7ZrHwnhb7nOl/sG20WvXLeXBbKrSnKJ8A7ovB2LD49nxyrpShZWUUBiYZIGOy1sNbS/FHM5lJ5/XBcVVVbfmDFvxacI5Hn98WKg4gCTj9KK8QOgY8fAlMPFBqNC8kn8+Kyzzb0Fiq5g356CVTaq511MV+7dUxLK+RnZ1Z2R28bmKJiGcx+mFialYwezGRv3WuL6sfQa+OgZD0xa2HgFZ9OvJ/0ir/Ci7HWmPgM3iIt/VgZac39wAAA/vxWn//miHud2dv0+z0kzS3ieGKtNOnNfEVGlYmbIZjVYkcJ7tiFhEg1HdwzqBsrHkerOX1yywKlmL22vo6gyVr9f+lUmQKVgSnNIo30P0TNsMoS0+Ca/GCa637A2AvGXbc0A3KnH/7+hf30WCo0a78qcxCC0e3ZOrfpQXnf4HVKpU1XoAwXon6nNdVu3+wYN8temBS9Dh4m9DQhz1Nyzv2LZxTCyPiSPh5zB9DVoOf5AbMlOzg9u9+MpdoaX+iloDy0VyKXS/C01en6MASvOPLfY85mRoQs//w9IPXcLYSlucFahN+SoTrFC7CPpJx23/LtUEvEpXoYPeYoXKmyddlv+UFN8n79rnAwBDynXhJIKyhzo1LK0NG991BYTWRq02O3uAdUBT8ghcHt7/Bvy8KYm4QpHrfJnBprAbWPC8mGJ8zxzP/ix3X+cb734RwnfsqFanjRT6V/QPWBYIP+hO2DHNcIa7QlqnR7uO4WArL/ZPMN0Nn6buH8poziupOUSqhYUesC3NWa6tRxU3wyWXDwzJ/LNcVz5+pOuXJ5kpvnujKwykAMiG0fBjuZlbBIzA4CRmuds2NowJzfomsDxPzFwt727lbjQm3eODeYd7axi1Cg71I5VNECWX+Ehkfj7KiMqVIpjq1sWvuJ0sty614iDwtp8Hj21TapJXrTEZui7Bs6Cb8Hu9ZN/tmVt9DIVZjltCSfl34YXlexuvf19fcXsERQY6aI25IAaYEXozz6jppraQiaUcbPwJTphWHfHJrT2Q+unygMm6WtXb4nmTGpleV+qrtpX/9Dy4Ufym/8V+EoXAomL/bbs1H2qTIHVd6msbqYUvzMsdOiJzTSEycpIvhMLMRQAiFXCOFCA5UEB6zI3pS023SdpWwBV/A0XjqTBvfo+bRCWkVlnVDQGa73iM/y1Xu60sf76S+wGQsH0R2GDc0TOxhBcDBSTCdJYGlwEcV9B9t9k02fB8qpxKfhwk1qozxCGVJbVXtmHzL7TrTKMT/bXUOsK5XLPYys3PoHxNaEGHvbUGNT7Og23ybcUO78HrLEsmhXF9h+zx//+NA//eAj//vDdZxBAXKZu0Yev9xCdFiQk/vMaMFAHjABA/zKkRho91KrnF0oUtTlOEtxyj/tyACmhfYeEl/lqkauLCxGqePHF9LMl2ffkgxpe5OOKdcLDlPhVrp6xXAzY8HHdVP484Jgdbcc3D6IOWt5sk0H/Iil5jW9RD0/7N+Q/gzHH0LSJn+StJIGwY6CArmiARtQatlzxw7W9fHmcqOu7JPuf3GbhU8QSB7RFR4LOZaBJrVP+kibaRzu3IpuNkuWohsQRgOQAH8MZynWGaYI7fDrgPPWysWCu9k4Z+QOGgf7hwpnPTuJGt5X1SOj9MGxq8YUtvKvruhvhCFvIJJVIEA8ibTR+7lEUdEwX1VPHl3aJIpfkRA2kuIaB/aG9ChLpcJlDFm0P5HCBb/p5w80mzBwYDiLG3QpRnCUlvEuw9EOS1gtxBhyyEL8xFU80cp+35j5cWqofe2dULPLXDcj32IAnXp6B+MT0+3J6JKHzMMJk+ASyTFTZQBunYTJ7sJDEZFOoz16uQr4BbV/lwCeUJynK6CY3b+ZCfBENQh7Dzu5Q1//X9Cqvkbt+chOGOvypIi3iOrcm/XSzh8hOk1Xc4WrTcPU8MQWi2SmGpZvd1FF8F0iFXDwtG4x+TpxJtyGyqL4/Kp5Soa3aTPHg2s1gfKkh3DrcRKJ9cTBzOFrThODIqVNOiOTYKuytraCwjXdxyzNXxB4TxDM/M+UceGXIMVusrjNJz1rN3+ygc03xKJ/YwQTKdERzxpOdUXIdH28def/dxPfaOVUdlE8KL8UKIel9n1uyAjU16BZbCdfNcKAzEhQISBGE/y9hVfAD5McQelCGDC+CBA3ZvSd/24YKJebDQQ9CWdlrgboq8arJMmvlnz15Fr+/7DTFwWTwtsJWDSyL425AocNVvSjLKJ3mAPXolzP1I1sh5xE8WTh220rOnaTVwUUY+lKrD9RwT1VSwZHfNX8fju36UdNcEstlTIIm4z7nTxzPthlmomtH+wivUs3sYmHnzPpBv6kAGfzjUwFna0th1APlP8VjzTq61+daIJ7+D7ZCO5uOQdAluJzJfVQ3gs7WuNBCq8aXzw0FuoL7KeV+MGfKO/UaedcEgFaqlJuChdq1hexiJo/IyXkkNjOFprwUDqeIhOJZyACU/T7E4FED0cVbdHTkzdJLPSd6pFvmRDt2vZpPIJlwdWaJcpi9gFyANBQSl+WAdJc73xHbr+dcHaRLvH5vcZNPAxDIV5FAU9XyQxLBX0XOoXQFZ0xUBwKB2QG6+0qI6g57fuoqbxnnyL0kMRNZ/Vk3BrmBYuGKEKCX/dr8DGoy9ZfK/+RLPHHijeuJfefIpIvgLylbqnA/bXpdFSr7mAAEOdcv6TkMAdWtFwvMJzL3CbJIw5L6Ey4tbtEZE8p9SmALiHS8TzQ2OY60DUTx0pPF7H7B4OU0ukNzpyS6DUVS7YKvZtGbSnnNQ3VTnwQPDtgexvZfr1t7Wdl0JCoZTmvFjyg6j74ZmYd5ZZXC31b4ulXhsTn2Mt3U8UP/oVGTh/fd1yaM6xhRcwiZ1dzyjeuk60AAAAAAA==",Mi=""+new URL("../assets/neutralino.r1imSBq0.webp",import.meta.url).href,Oi="data:image/webp;base64,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",Hi=""+new URL("../assets/ros.CfKujCVq.webp",import.meta.url).href,Li="data:image/webp;base64,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",Ui="data:image/webp;base64,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",Vi=""+new URL("../assets/sw.LYpo6REk.webp",import.meta.url).href;var Ni=J('<img alt="project preview" class="img"/>'),ji=J('<li><img class="icon"/> </li>'),Ki=J(`<div class="project"><style>.project ul {
			list-style: none;
			margin: 0;
			padding: 10px 0;
			align-items: center;
			width: 100%;
		}

		.project li {
			background-color: var(--C1);
			padding: 15px;
			display: inline-flex;
			width: calc(27% - 20px);
			margin: 10px;
			height: 20px;
			align-items: center;
		}

		.project {
			border: solid 1px var(--C2);
			height: 80vh;
			width: 30vw;
			max-width: 800px;
			max-height: 1200px;
			margin: 30px;
			position: relative;
			overflow: hidden;
			transition: width 0.3s ease;
		}

		.project:hover,
		.project:focus {
			width: 100%;
		}
			
		.project h3 {
			font-size: 1.5rem;
			height: 4.8rem;
			position: relative;
			margin: 0;
			width: 100%;
			align-items: center;
			justify-content: center;
			text-align: center;
			display: flex;
			transition: height 0.5s ease;
		}

		.project:hover h3 {
			font-size: 2rem;
			height: 30%;
			position: absolute;
			top: 0;
		}

		.project h4 {
			margin: 10px 0 0 20px;
		}

		.project p {
			margin: 20px;
			text-align: left;
		}

		.project .img {
			width: 100%;
			height: calc(100% - 4.8rem);
			object-fit: cover;
			transition: height 0.5s ease;
		}

		.project:hover .img {
			opacity: 0.5;
			height: 30%;
		}

		#P02:hover .img,
		#P03:hover .img {
			opacity: 0.5;
			height: 43%;
		}</style> <a target="_blank"><!> <h3> </h3> <p class="description"> </p> <h4>Technologías</h4> <ul></ul></a></div>`);function G(e,i){var a=Ki(),r=b(C(a),2),t=C(r);{var l=c=>{var o=Ni();j(()=>T(o,"src",i.preview)),P(c,o)};Xe(t,c=>{i.preview&&c(l)})}var n=b(t,2),p=C(n,!0);w(n);var A=b(n,2),f=C(A,!0);w(A);var s=b(A,4);ii(s,21,()=>i.tecnologies,$e,(c,o)=>{var d=ji(),v=C(d),B=b(v);w(d),j(()=>{T(v,"src",S(o)==="Arduino"?Ri:S(o)==="C++"?Pi:S(o)==="Gazebo & RViz"?Qi:S(o)==="ElectronJS"?Di:S(o)==="ExpressJS"?Ti:S(o)==="JavaScript"?Ji:S(o)==="HTML & CSS"?ki:S(o)==="NeutralinoJS"?Mi:S(o)==="Python"?Oi:S(o)==="ROS2"?Hi:S(o)==="SDF"?Li:S(o)==="EDA"?Ui:Vi),T(v,"alt",`${S(o)??""} icon`),q(B,` ${S(o)??""}`)}),P(c,d)}),w(s),w(r),w(a),j(()=>{T(r,"href",i.uri),q(p,i.title),q(f,i.description)}),P(e,a)}const Ei=""+new URL("../assets/cartesian.Cvx0hYOJ.png",import.meta.url).href,Yi=""+new URL("../assets/vant.cMOL-rtS.png",import.meta.url).href,Fi=""+new URL("../assets/arm.Co_ZxiVv.png",import.meta.url).href;var Ii=J('<section id="projects" class="svelte-m26f3i"><h2 class="svelte-m26f3i">Proyectos</h2> <div class="svelte-m26f3i"><!> <!> <!></div></section>');function qi(e){var i=Ii(),a=b(C(i),2),r=C(a);G(r,{get preview(){return Ei},title:"Robot Cartesiano de 3 DOF",description:"Robot cartesiano de 3 grados de libertad controlado por ROS2 y simulado en Gazebo. Una interfaz gráfica multiplataforma (NeutralinoJS) permite el control del robot a través de una red local.",tecnologies:["ROS2","CAD","EDA","NeutralinoJS","JavaScript","HTML & CSS","Arduino","C++","Python","Gazebo & RViz"],uri:"https://github.com/adnksharp/cartesian-ppp-ros"});var t=b(r,2);G(t,{get preview(){return Yi},title:"VANT ciberfísico",description:"Vehículo aéreo no tripulado (VANT) ciberfísico simulado en Gazebo, controlado con ROS2. Utiliza los paquetes de multirotores de ROS2 para el control y monitoreo del VANT usando μROS.",tecnologies:["ROS2","CAD","SDF","EDA","Gazebo & RViz","Python","Arduino","C++"],uri:"https://github.com/adnksharp/multirotor-ros"});var l=b(t,2);G(l,{get preview(){return Fi},title:"Brazo robótico de 5 DOF",description:"Brazo robótico de 5 grados de libertad controlado por una interfaz gráfica multiplataforma (ElectronJS) a través de un servidor local (ExpressJS).",tecnologies:["Arduino","C++","ExpressJS","ElectronJS","JavaScript","HTML & CSS","CAD","EDA"],uri:"https://github.com/adnksharp/Robotered"}),w(a),w(i),P(e,i)}const Wi=""+new URL("../assets/avatar.BLDoY1At.png",import.meta.url).href;var Zi=J(`<section id="about"><style>#about {
			height: calc(100vh - 40px);
			padding: 20px;
		}

		#about container {
			display: flex;
			flex-direction: row;
			justify-content: center;
			width: 100%;
		}

		#about div ul {
			width: 70vw;
		}

		
		.timeline {
			text-align: left;
			position: relative;
			list-style: none;
			margin: 0;
			height: 88vh;
			width: 1200px;
			max-width: calc(0.7 * 16.0 / 9.0 * 100vh);
			padding-left: 40px;
		}
		
		.extra {
			text-align: left;
			width: 400px;
			max-width: calc(0.3 * 16.0 / 9.0 * 100vh);
			display: flex;
			flex-direction: column;
		}
		
		#avatar {
			width: 400px;
			max-width: calc(0.3 * 16.0 / 9.0 * 100vh - 50px);
			height: 400px;
			max-height: calc(88vh - 600px);
			object-fit: contain;
		}

		.avatar {
			height: 100%;
			display: flex;
			align-items: center;
		}


		.tl-item {
			margin-bottom: 10px;
			border-left: 2px solid #ccc;
			padding-left: 20px;
			display: flex;
			flex-direction: column;
			width: 400px;
		}


		.tl-item h3 {
			margin: 0;
		}

		.tl-item h4 {
			margin: 0;
			color: #666;
		}

		.tl-item ul {
			display: none;
			text-align: left;
			list-style: disc;
			width: calc(100% - 500px);
			max-width: 750px;
			padding: 20px;
			border: solid 1px var(--fg-color);
			background: var(--bg-color);
		}

		.tl-item:hover ul {
			display: flex;
			flex-direction: column;
			position: absolute;
			right: 0;
			top: 70px;
		}

		.tl-item ul li {
			margin-bottom: 5px;
		}</style> <h2>Sobre mí</h2> <container><div class="extra"><div><p>Desarrollador en constante aprendizaje con interés en la intersección entre la electrónica y la programación. Me gusta explorar proyectos que involucran microcontroladores (Arduino, MicroLogix, ESP32), sistemas de control, análisis estructural (ANSYS APDL) y desarrollo web. Mi toolkit incluye lenguajes como C++, MATLAB, Python, JS, Bash y frameworks como Electron, React Native, Express y Mongosh.</p> <h3>Filosofía</h3> <p>Mi pasión reside en descomponer problemas complejos y constryur soluciones que conectan distintas disciplinas. Adaptando una mentalidad de resolución de problemas orientada a resultados, procuro comprender las necesidades desde múltiples perspectivas –ya sea el diseño mecánico, la lógica de control, la electrónica o la interfaz de usuario. Mi enfoque se caracteriza por la adaptabilidad y el aprendizaje continuo, impulsado por la búsqueda de soluciones innovadoras para cada desafío, siempre con la visión de un sistema superior, enfocado en la escalabilidad y la fiabilidad.</p></div> <div class="avatar"><img alt="avatar image" id="avatar"/></div></div> <ul class="timeline"><h3>Mi trayectoria</h3> <li class="tl-item"><h3>Bachillerato</h3> <h4>Centro de Bachillerato Tecnológico Industrial y de Servicios No. 128</h4> <h4>2016 - 2019</h4> <ul><li>Estudios en electrónica a nivel bachillerato</li> <li>Desarrollo de proyectos académicos relacionados con audio (amplificadores, altavoces, filtros)</li> <li>Introducción a la programación de microcontroladores PIC y PLC Siemens.</li> <li>Desarrollo de proyectos personales con microcontroladores Arduino.</li> <li>Desarrollo de habilidades de trabajo en equipo y colaboración en proyectos académicos.</li> <li>Desarrollo de habilidades de gestión del tiempo y organización al equilibrar estudios y proyectos extracurriculares.</li></ul></li> <li class="tl-item"><h3>Ingeniería en Mecatrónica</h3> <h4>Universidad Autónoma de Ciudad Juárez</h4> <h4>2019 - Presente</h4> <ul><li>Proyectos de programación y desarrollo de software (C#, .NET, Node.js)</li> <li>Desarrollo de interfaces gráficas y aplicaciones web</li> <li>Proyectos de IoT con ESP32, MQTT y Node-RED</li> <li>Diseño de circuitos impresos (PCB) con KiCad, Fritzing y EasyEDA</li> <li>Proyectos de control clásico y moderno con Arduino y Simulink</li> <li>Desarrollo de aplicaciones de escritorio con C#, Electron.js y Python</li> <li>Modelado 3D y CAD con SolidWorks</li> <li>Desarrollo de proyectos de automatización con PLCs MicroLogix</li> <li>Resolución de problemas de análisis numérico con Python y Scilab</li> <li>Resolución de problemas de FEM y simulación de estructuras mecánicas</li> <li>Desarrollo de un brazo robótico con ESP32 y Electron.js</li> <li>Desarrollo de proyectos con ROS2.</li> <li>Desarrollo de habilidades de adaptabilidad y aprendizaje continuo al explorar nuevas tecnologías y herramientas.</li> <li>Desarrollo de habilidades de gestión de proyectos y planificación al coordinar múltiples tareas y plazos.</li> <li>Desarrollo de habilidades de investigación y análisis al abordar problemas técnicos y buscar soluciones innovadoras.</li></ul></li> <li class="tl-item"><h3>Reparación de electrodomésticos</h3> <h4>2019 - Presente</h4> <ul><li>Reparación y mantenimiento de electrodomésticos y equipos electrónicos.</li> <li>Diagnóstico y solución de problemas técnicos en dispositivos electrónicos.</li> <li>Desarrollo de habilidades prácticas en electrónica y mecánica.</li> <li>Desarrollo de habilidades de atención al cliente y comunicación efectiva al interactuar con clientes para resolver problemas.</li> <li>Desarrollo de habilidades de resolución de problemas y pensamiento crítico al diagnosticar y reparar dispositivos electrónicos.</li> <li>Desarrollo de habilidades de gestión del tiempo y organización al equilibrar el trabajo de reparación con otros compromisos académicos y personales.</li></ul></li> <li class="tl-item"><h3>Instalaciones eléctricas</h3> <h4>2021 - 2023</h4> <ul><li>Instalación y mantenimiento de instalaciones eléctricas domesticas</li> <li>Desarrollo de habilidades de atención al cliente y comunicación efectiva al interactuar con clientes para resolver problemas eléctricos.</li> <li>Desarrollo de habilidades de resolución de problemas y pensamiento crítico al diagnosticar y reparar sistemas eléctricos.</li></ul></li> <li class="tl-item"><h3>Trabajos independientes de alta potencia</h3> <h4>2024</h4> <ul><li>Reparación y mantenimiento de motores eléctricos</li> <li>Mejora de habilidades de atención al cliente y comunicación efectiva al interactuar con clientes para resolver problemas.</li> <li>Mejora de habilidades de resolución de problemas y pensamiento crítico al diagnosticar y reparar dispositivos electrónicos.</li></ul></li> <li class="tl-item"><h3>Trabajo en ferretería</h3> <h4>2024</h4> <ul><li>Atención al cliente y ventas en el área de ferretería</li> <li>Gestión de inventario y almacenamiento de productos</li> <li>Desarrollo de habilidades de atención al cliente y comunicación efectiva al interactuar con clientes para resolver problemas.</li></ul></li> <li class="tl-item"><h3>Proyectos robóticos con ROS2</h3> <h4>2025</h4> <ul><li>Desarrollo de proyectos robóticos con ROS2, Gazebo y micro-ROS</li> <li>Implementación de Hardware-in-the-Loop (HIL) para simular y probar sistemas robóticos</li> <li>Mejora de habilidades de programación aplicada a la robótica al trabajar con ROS2 y micro-ROS.</li> <li>Desarrollo de habilidades de simulación y prueba de sistemas robóticos al implementar HIL.</li></ul></li></ul></container></section>`);function Gi(e){var i=Zi(),a=b(C(i),4),r=C(a),t=b(C(r),2),l=C(t);w(t),w(r),Fe(2),w(a),w(i),j(()=>T(l,"src",Wi)),P(e,i)}var Xi=J(`<div id="home"><style>#home {
			scroll-snap-type: y mandatory;
			height: 100vh;
			overflow-y: scroll;
			scrollbar-width: none; 
			-ms-overflow-style: none; 
			::-webkit-scrollbar {
				display: none;
			}
		}

		#header,
		#projects,
		#about {
			scroll-snap-align: start;
			scroll-snap-stop: always;
			max-width: calc(16.0 / 9.0 * 100vh);
			margin-inline: auto;
			height: 100vh;
			text-align: center;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}

		#header h2,
		#projects h2,
		#about h2 {
			text-align: center;
			font-size: 2.5em;
			width: 100%;
			margin: 40px 0 0 0;
		}</style> <!> <!> <!></div>`);function ta(e){var i=Xi(),a=b(C(i),2);zi(a);var r=b(a,2);qi(r);var t=b(r,2);Gi(t),w(i),P(e,i)}export{ta as component,ra as universal};

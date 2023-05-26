"use strict";(self.webpackChunkcircuits=self.webpackChunkcircuits||[]).push([[26542],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},I=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(n),I=a,m=p["".concat(c,".").concat(I)]||p[I]||u[I]||r;return n?i.createElement(m,l(l({ref:t},d),{},{components:n})):i.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=I;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}I.displayName="MDXCreateElement"},38017:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var i=n(87462),a=(n(67294),n(3905));const r={sidebar_position:55,tags:["Chip"]},l="Bit Leading Zeros",o={unversionedId:"documentation/chips/d6e62624-06b0-416e-8e3c-ca058efd3c46",id:"documentation/chips/d6e62624-06b0-416e-8e3c-ca058efd3c46",title:"Bit Leading Zeros",description:"Counts the number of zeros at the beginning (most significant side) of the binary representation of an integer.",source:"@site/docs/documentation/chips/d6e62624-06b0-416e-8e3c-ca058efd3c46.mdx",sourceDirName:"documentation/chips",slug:"/documentation/chips/d6e62624-06b0-416e-8e3c-ca058efd3c46",permalink:"/docs/documentation/chips/d6e62624-06b0-416e-8e3c-ca058efd3c46",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation/chips/d6e62624-06b0-416e-8e3c-ca058efd3c46.mdx",tags:[{label:"Chip",permalink:"/docs/tags/chip"}],version:"current",sidebarPosition:55,frontMatter:{sidebar_position:55,tags:["Chip"]},sidebar:"tutorialSidebar",previous:{title:"Bit And",permalink:"/docs/documentation/chips/28a95bc3-ab08-48ae-b0c0-16b41168bf47"},next:{title:"Bit Nand",permalink:"/docs/documentation/chips/05305e33-a809-4751-b928-2c8a5bbc6dc9"}},c={},s=[{value:"Uses",id:"uses",level:3},{value:"Tips",id:"tips",level:3},{value:"Issues",id:"issues",level:3}],d={toc:s},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bit-leading-zeros"},"Bit Leading Zeros"),(0,a.kt)("p",null,"Counts the number of zeros at the beginning (most significant side) of the binary representation of an integer."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Example banner",src:n(25274).Z,width:"800",height:"256"})),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Input Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Input Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Value"),(0,a.kt)("td",{parentName:"tr",align:null},"int")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Output Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Output Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Leading Zeros"),(0,a.kt)("td",{parentName:"tr",align:null},"int")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Properties"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Is beta required?"),(0,a.kt)("th",null,"\u274c")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Is this chip a trolling risk?"),(0,a.kt)("th",null,"\u274c")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Chip UUID"),(0,a.kt)("th",null,"d6e62624-06b0-416e-8e3c-ca058efd3c46"))))))),(0,a.kt)("h3",{id:"uses"},"Uses"),(0,a.kt)("p",null,"None so far!"),(0,a.kt)("h3",{id:"tips"},"Tips"),(0,a.kt)("p",null,"None so far!"),(0,a.kt)("h3",{id:"issues"},"Issues"),(0,a.kt)("p",null,"None so far!"))}u.isMDXComponent=!0},25274:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjI1NS42NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Ym94PSIwIDAgODAwIDI1NS42NiI+PHBhdGggZmlsbD0iIzgxODA4MSIgZD0iTTE2MCwgNDEgdjI2IHEwLDEwLDEwLDEwIGgyMzUuNjYgcTEwLDAsMTAsLTEwIHYtMjYgaDI1NS42NiI+PC9wYXRoPjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2RpXzI1NTZfMTkxMzIpIj48cmVjdCB4PSIxNDgiIHk9IjQ5IiB3aWR0aD0iMjIiIGhlaWdodD0iMTUiIHJ4PSIxIiBmaWxsPSIjMTA2NTIyIj48L3JlY3Q+PC9nPjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIxX2RpXzI1NTZfMTkxMzIpIj48cmVjdCB4PSI5NCIgeT0iNDUiIHdpZHRoPSI0NSIgaGVpZ2h0PSIyMyIgcng9IjEiIGZpbGw9IiMxMDY1MjIiPjwvcmVjdD48cmVjdCB4PSI5OCIgeT0iNDkuMDAxIiB3aWR0aD0iMzciIGhlaWdodD0iMTUiIHJ4PSIxIiBmaWxsPSIjODE4MDgxIj48L3JlY3Q+PC9nPjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIyX2RpXzI1NTZfMTkxMzIpIj48cmVjdCB4PSIxMzkiIHk9IjUzIiB3aWR0aD0iOSIgaGVpZ2h0PSI3IiBmaWxsPSIjMTA2NTIyIj48L3JlY3Q+PC9nPjx0ZXh0IHg9IjE3NiIgeT0iNjEuNSIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC1zaXplPSJtZWRpdW0iIGNsYXNzPSJ1d3VudHUiPlZhbHVlPC90ZXh0PjxyZWN0IHg9IjQwNS42NTk5OTk5OTk5OTk5NyIgeT0iNDkiIHdpZHRoPSIyMiIgaGVpZ2h0PSIxNSIgcng9IjEiIGZpbGw9IiMxMDY1MjIiPjwvcmVjdD48dGV4dCB4PSIzOTkuNjU5OTk5OTk5OTk5OTciIHk9IjYxLjUiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0iZW5kIiBmb250LXNpemU9Im1lZGl1bSIgY2xhc3M9InV3dW50dSI+TGVhZGluZyBaZXJvczwvdGV4dD48cGF0aCBkPSJNMTYwLCA0MSB2LTMxIHEwLC0xMCwxMCwtMTAgaDIzNS42NiBxMTAsMCwxMCwxMCB2MzEgaC0yNTUuNjYiIGZpbGw9IiM1MjUxNTIiPjwvcGF0aD48dGV4dCB4PSIyODcuODMiIHk9IjI5LjUiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjE4cHgiIGNsYXNzPSJVd3VudHUiPkJpdCBMZWFkaW5nIFplcm9zPC90ZXh0Pjwvc3ZnPg=="}}]);
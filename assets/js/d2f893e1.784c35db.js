"use strict";(self.webpackChunkcircuits=self.webpackChunkcircuits||[]).push([[85374],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},I=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(n),I=i,m=p["".concat(c,".").concat(I)]||p[I]||u[I]||r;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=I;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}I.displayName="MDXCreateElement"},44414:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={sidebar_position:216,tags:["Chip"]},l="Player Get Time Zone",o={unversionedId:"documentation/chips/2d675f16-502a-489e-8fed-161935f32c04",id:"documentation/chips/2d675f16-502a-489e-8fed-161935f32c04",title:"Player Get Time Zone",description:"Returns the offset of the given player's local time zone from UTC in seconds.",source:"@site/docs/documentation/chips/2d675f16-502a-489e-8fed-161935f32c04.mdx",sourceDirName:"documentation/chips",slug:"/documentation/chips/2d675f16-502a-489e-8fed-161935f32c04",permalink:"/docs/documentation/chips/2d675f16-502a-489e-8fed-161935f32c04",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation/chips/2d675f16-502a-489e-8fed-161935f32c04.mdx",tags:[{label:"Chip",permalink:"/docs/tags/chip"}],version:"current",sidebarPosition:216,frontMatter:{sidebar_position:216,tags:["Chip"]},sidebar:"tutorialSidebar",previous:{title:"Get Tags",permalink:"/docs/documentation/chips/e67cfcb7-03e8-4152-ba41-af8ca61d93fb"},next:{title:"Time Get Unsynced Universal Seconds",permalink:"/docs/documentation/chips/d46f6fdc-480c-41e6-9a27-87fadb0ab0fc"}},c={},s=[{value:"Uses",id:"uses",level:3},{value:"Tips",id:"tips",level:3},{value:"Issues",id:"issues",level:3}],d={toc:s},p="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"player-get-time-zone"},"Player Get Time Zone"),(0,i.kt)("p",null,"Returns the offset of the given player's local time zone from UTC in seconds."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example banner",src:n(18614).Z,width:"800",height:"274"})),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Input Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Input Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Player"),(0,i.kt)("td",{parentName:"tr",align:null},"player")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Output Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Output Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Seconds from UTC"),(0,i.kt)("td",{parentName:"tr",align:null},"int")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Properties"),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Is beta required?"),(0,i.kt)("th",null,"\u274c")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"Is this chip a trolling risk?"),(0,i.kt)("th",null,"\u274c")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"Chip UUPD"),(0,i.kt)("th",null,"._uuid"))))))),(0,i.kt)("h3",{id:"uses"},"Uses"),(0,i.kt)("p",null,"None so far!"),(0,i.kt)("h3",{id:"tips"},"Tips"),(0,i.kt)("p",null,"None so far!"),(0,i.kt)("h3",{id:"issues"},"Issues"),(0,i.kt)("p",null,"None so far!"))}u.isMDXComponent=!0},18614:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjI3NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Ym94PSIwIDAgODAwIDI3NCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1VYnVudHUnKTs8L3N0eWxlPjwvZGVmcz48cGF0aCBmaWxsPSIjODE4MDgxIiBkPSJNMTYwLCA0MSB2MjYgcTAsMTAsMTAsMTAgaDI1NCBxMTAsMCwxMCwtMTAgdi0yNiBoMjc0Ij48L3BhdGg+PGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZGlfMjU1Nl8xOTEzMikiPjxyZWN0IHg9IjE0OCIgeT0iNDkiIHdpZHRoPSIyMiIgaGVpZ2h0PSIxNSIgcng9IjEiIGZpbGw9IiNGNUM1MUYiPjwvcmVjdD48L2c+PGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjFfZGlfMjU1Nl8xOTEzMikiPjxyZWN0IHg9Ijk0IiB5PSI0NSIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjIzIiByeD0iMSIgZmlsbD0iI0Y1QzUxRiI+PC9yZWN0PjxyZWN0IHg9Ijk4IiB5PSI0OS4wMDEiIHdpZHRoPSIzNyIgaGVpZ2h0PSIxNSIgcng9IjEiIGZpbGw9IiM4MTgwODEiPjwvcmVjdD48L2c+PGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjJfZGlfMjU1Nl8xOTEzMikiPjxyZWN0IHg9IjEzOSIgeT0iNTMiIHdpZHRoPSI5IiBoZWlnaHQ9IjciIGZpbGw9IiNGNUM1MUYiPjwvcmVjdD48L2c+PHRleHQgeD0iMTc2IiB5PSI2MS41IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXNpemU9Im1lZGl1bSIgZm9udC1mYW1pbHk9IlVidW50dSI+UGxheWVyPC90ZXh0PjxyZWN0IHg9IjQyNCIgeT0iNDkiIHdpZHRoPSIyMiIgaGVpZ2h0PSIxNSIgcng9IjEiIGZpbGw9IiMxMDY1MjIiPjwvcmVjdD48dGV4dCB4PSI0MTgiIHk9IjYxLjUiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0iZW5kIiBmb250LXNpemU9Im1lZGl1bSIgZm9udC1mYW1pbHk9IlVidW50dSI+U2Vjb25kcyBmcm9tIFVUQzwvdGV4dD48cGF0aCBkPSJNMTYwLCA0MSB2LTMxIHEwLC0xMCwxMCwtMTAgaDI1NCBxMTAsMCwxMCwxMCB2MzEgaC0yNzQiIGZpbGw9IiM1MjUxNTIiPjwvcGF0aD48dGV4dCB4PSIyOTciIHk9IjI4LjUiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9Im1lZGl1bSIgZm9udC1mYW1pbHk9IlVidW50dSI+UGxheWVyIEdldCBUaW1lIFpvbmU8L3RleHQ+PC9zdmc+"}}]);
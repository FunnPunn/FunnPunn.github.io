"use strict";(self.webpackChunkcircuits=self.webpackChunkcircuits||[]).push([[96861],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),c=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(a),b=r,m=d["".concat(u,".").concat(b)]||d[b]||p[b]||i;return a?n.createElement(m,l(l({ref:t},s),{},{components:a})):n.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=b;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},60074:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_position:36,tags:["Chip"]},l="Audio Player Get Volume",o={unversionedId:"documentation/chips/1bbabac2-f316-4e07-9eb6-fd65848a5b90",id:"documentation/chips/1bbabac2-f316-4e07-9eb6-fd65848a5b90",title:"Audio Player Get Volume",description:"Returns the volume multiplier of the target Audio Player.",source:"@site/docs/documentation/chips/1bbabac2-f316-4e07-9eb6-fd65848a5b90.mdx",sourceDirName:"documentation/chips",slug:"/documentation/chips/1bbabac2-f316-4e07-9eb6-fd65848a5b90",permalink:"/docs/documentation/chips/1bbabac2-f316-4e07-9eb6-fd65848a5b90",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation/chips/1bbabac2-f316-4e07-9eb6-fd65848a5b90.mdx",tags:[{label:"Chip",permalink:"/docs/tags/chip"}],version:"current",sidebarPosition:36,frontMatter:{sidebar_position:36,tags:["Chip"]},sidebar:"tutorialSidebar",previous:{title:"Audio Player Get Time Stamp",permalink:"/docs/documentation/chips/61e8293d-5d5a-4dbc-9505-0a13faf8b4cc"},next:{title:"Audio Player Pause",permalink:"/docs/documentation/chips/e6391f35-dd8b-4e99-a0f9-7dc44b6c1893"}},u={},c=[{value:"Uses",id:"uses",level:3},{value:"Tips",id:"tips",level:3},{value:"Issues",id:"issues",level:3}],s={toc:c},d="wrapper";function p(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"audio-player-get-volume"},"Audio Player Get Volume"),(0,r.kt)("p",null,"Returns the volume multiplier of the target Audio Player."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:a(40804).Z,width:"800",height:"317"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Input Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Input Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Target"),(0,r.kt)("td",{parentName:"tr",align:null},"audio player")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Output Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Output Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Volume"),(0,r.kt)("td",{parentName:"tr",align:null},"float")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Properties"),(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Is beta required?"),(0,r.kt)("th",null,"\u274c")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Is this chip a trolling risk?"),(0,r.kt)("th",null,"\u274c")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Chip UUID"),(0,r.kt)("th",null,"1bbabac2-f316-4e07-9eb6-fd65848a5b90"))))))),(0,r.kt)("h3",{id:"uses"},"Uses"),(0,r.kt)("p",null,"None so far!"),(0,r.kt)("h3",{id:"tips"},"Tips"),(0,r.kt)("p",null,"None so far!"),(0,r.kt)("h3",{id:"issues"},"Issues"),(0,r.kt)("p",null,"None so far!"))}p.isMDXComponent=!0},40804:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjMxNi44NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Ym94PSIwIDAgODAwIDMxNi44NiI+PHBhdGggZmlsbD0iIzgxODA4MSIgZD0iTTE2MCwgNDEgdjI2IHEwLDEwLDEwLDEwIGgyOTYuODYgcTEwLDAsMTAsLTEwIHYtMjYgaDMxNi44NiI+PC9wYXRoPjxyZWN0IHg9IjE0OCIgeT0iNDkiIHdpZHRoPSIyMiIgaGVpZ2h0PSIxNSIgcng9IjEiIGZpbGw9IiNGNUM1MUYiPjwvcmVjdD48dGV4dCB4PSIxNzYiIHk9IjYxLjUiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtc2l6ZT0ibWVkaXVtIiBjbGFzcz0idXd1bnR1Ij5UYXJnZXQ8L3RleHQ+PHJlY3QgeD0iNDY2Ljg2IiB5PSI0OSIgd2lkdGg9IjIyIiBoZWlnaHQ9IjE1IiByeD0iMSIgZmlsbD0iIzE4NkJERCI+PC9yZWN0Pjx0ZXh0IHg9IjQ2MC44NiIgeT0iNjEuNSIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJlbmQiIGZvbnQtc2l6ZT0ibWVkaXVtIiBjbGFzcz0idXd1bnR1Ij5Wb2x1bWU8L3RleHQ+PHBhdGggZD0iTTE2MCwgNDEgdi0zMSBxMCwtMTAsMTAsLTEwIGgyOTYuODYgcTEwLDAsMTAsMTAgdjMxIGgtMzE2Ljg2IiBmaWxsPSIjNTI1MTUyIj48L3BhdGg+PHRleHQgeD0iMzE4LjQzIiB5PSIyOS41IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxOHB4IiBjbGFzcz0iVXd1bnR1Ij5BdWRpbyBQbGF5ZXIgR2V0IFZvbHVtZTwvdGV4dD48L3N2Zz4="}}]);
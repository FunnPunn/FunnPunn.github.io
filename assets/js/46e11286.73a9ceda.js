"use strict";(self.webpackChunkcircuits=self.webpackChunkcircuits||[]).push([[96861],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),d=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=d(a),m=r,b=s["".concat(u,".").concat(m)]||s[m]||p[m]||l;return a?n.createElement(b,i(i({ref:t},c),{},{components:a})):n.createElement(b,i({ref:t},c))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},60074:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={sidebar_position:36,tags:["Chip"]},i="Audio Player Get Volume",o={unversionedId:"documentation/chips/1bbabac2-f316-4e07-9eb6-fd65848a5b90",id:"documentation/chips/1bbabac2-f316-4e07-9eb6-fd65848a5b90",title:"Audio Player Get Volume",description:"Returns the volume multiplier of the target Audio Player.",source:"@site/docs/documentation/chips/1bbabac2-f316-4e07-9eb6-fd65848a5b90.mdx",sourceDirName:"documentation/chips",slug:"/documentation/chips/1bbabac2-f316-4e07-9eb6-fd65848a5b90",permalink:"/docs/documentation/chips/1bbabac2-f316-4e07-9eb6-fd65848a5b90",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation/chips/1bbabac2-f316-4e07-9eb6-fd65848a5b90.mdx",tags:[{label:"Chip",permalink:"/docs/tags/chip"}],version:"current",sidebarPosition:36,frontMatter:{sidebar_position:36,tags:["Chip"]},sidebar:"tutorialSidebar",previous:{title:"Audio Player Get Time Stamp",permalink:"/docs/documentation/chips/61e8293d-5d5a-4dbc-9505-0a13faf8b4cc"},next:{title:"Audio Player Pause",permalink:"/docs/documentation/chips/e6391f35-dd8b-4e99-a0f9-7dc44b6c1893"}},u={},d=[{value:"Uses",id:"uses",level:3},{value:"Tips",id:"tips",level:3},{value:"Issues",id:"issues",level:3}],c={toc:d},s="wrapper";function p(e){let{components:t,...l}=e;return(0,r.kt)(s,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"audio-player-get-volume"},"Audio Player Get Volume"),(0,r.kt)("p",null,"Returns the volume multiplier of the target Audio Player."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:a(40804).Z,width:"800",height:"298"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Input Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Input Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Target"),(0,r.kt)("td",{parentName:"tr",align:null},"audio player")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Output Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Output Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Volume"),(0,r.kt)("td",{parentName:"tr",align:null},"float")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Properties"),(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Is beta required?"),(0,r.kt)("th",null,"\u274c")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Is this chip a trolling risk?"),(0,r.kt)("th",null,"\u274c")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Chip UUPD"),(0,r.kt)("th",null,"._uuid"))))))),(0,r.kt)("h3",{id:"uses"},"Uses"),(0,r.kt)("p",null,"None so far!"),(0,r.kt)("h3",{id:"tips"},"Tips"),(0,r.kt)("p",null,"None so far!"),(0,r.kt)("h3",{id:"issues"},"Issues"),(0,r.kt)("p",null,"None so far!"))}p.isMDXComponent=!0},40804:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjI5OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Ym94PSIwIDAgODAwIDI5OCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1VYnVudHUnKTs8L3N0eWxlPjwvZGVmcz48cGF0aCBmaWxsPSIjODE4MDgxIiBkPSJNMTYwLCA0MSB2MjYgcTAsMTAsMTAsMTAgaDI3OCBxMTAsMCwxMCwtMTAgdi0yNiBoMjk4Ij48L3BhdGg+PHJlY3QgeD0iMTQ4IiB5PSI0OSIgd2lkdGg9IjIyIiBoZWlnaHQ9IjE1IiByeD0iMSIgZmlsbD0iI0Y1QzUxRiI+PC9yZWN0Pjx0ZXh0IHg9IjE3NiIgeT0iNjEuNSIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC1zaXplPSJtZWRpdW0iIGZvbnQtZmFtaWx5PSJVYnVudHUiPlRhcmdldDwvdGV4dD48cmVjdCB4PSI0NDgiIHk9IjQ5IiB3aWR0aD0iMjIiIGhlaWdodD0iMTUiIHJ4PSIxIiBmaWxsPSIjMTg2QkREIj48L3JlY3Q+PHRleHQgeD0iNDQyIiB5PSI2MS41IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9ImVuZCIgZm9udC1zaXplPSJtZWRpdW0iIGZvbnQtZmFtaWx5PSJVYnVudHUiPlZvbHVtZTwvdGV4dD48cGF0aCBkPSJNMTYwLCA0MSB2LTMxIHEwLC0xMCwxMCwtMTAgaDI3OCBxMTAsMCwxMCwxMCB2MzEgaC0yOTgiIGZpbGw9IiM1MjUxNTIiPjwvcGF0aD48dGV4dCB4PSIzMDkiIHk9IjI4LjUiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9Im1lZGl1bSIgZm9udC1mYW1pbHk9IlVidW50dSI+QXVkaW8gUGxheWVyIEdldCBWb2x1bWU8L3RleHQ+PC9zdmc+"}}]);
"use strict";(self.webpackChunkcircuits=self.webpackChunkcircuits||[]).push([[39371],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",I={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(a),p=i,m=d["".concat(c,".").concat(p)]||d[p]||I[p]||r;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},60207:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>I,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(87462),i=(a(67294),a(3905));const r={sidebar_position:46,tags:["Chip"]},l="Award Room Key",o={unversionedId:"documentation/chips/7e40f770-c9a4-4233-8845-cac6ec99ae67",id:"documentation/chips/7e40f770-c9a4-4233-8845-cac6ec99ae67",title:"Award Room Key",description:"Unlocks a room key for the target player. Multiple award room key requests from the same client are sent in bulk with a one-second cooldown.",source:"@site/docs/documentation/chips/7e40f770-c9a4-4233-8845-cac6ec99ae67.mdx",sourceDirName:"documentation/chips",slug:"/documentation/chips/7e40f770-c9a4-4233-8845-cac6ec99ae67",permalink:"/docs/documentation/chips/7e40f770-c9a4-4233-8845-cac6ec99ae67",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation/chips/7e40f770-c9a4-4233-8845-cac6ec99ae67.mdx",tags:[{label:"Chip",permalink:"/docs/tags/chip"}],version:"current",sidebarPosition:46,frontMatter:{sidebar_position:46,tags:["Chip"]},sidebar:"tutorialSidebar",previous:{title:"Award Currency",permalink:"/docs/documentation/chips/03461631-734f-491b-ab86-6bdf66947556"},next:{title:"Background Objects Constant",permalink:"/docs/documentation/chips/c6e9ffef-b505-41d3-bb2d-ff86838398c6"}},c={},s=[{value:"Uses",id:"uses",level:3},{value:"Tips",id:"tips",level:3},{value:"Issues",id:"issues",level:3}],u={toc:s},d="wrapper";function I(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"award-room-key"},"Award Room Key"),(0,i.kt)("p",null,"Unlocks a room key for the target player. Multiple award room key requests from the same client are sent in bulk with a one-second cooldown.\nThe Success port will be TRUE if the key was successfully unlocked for the player or if the player previously owned the key. If the key could not be awarded the Success port will be FALSE.\nUse the Log Output toggle in the configuration settings to see more information about why a failure occurred. Logging output may impact room performance and should be toggled off when not in use."),(0,i.kt)("admonition",{title:"BETA",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},'This chip requires beta content to be enabled in the room. You can access the setting in "This Room -> Settings".')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example banner",src:a(47011).Z,width:"800",height:"338"})),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Input Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Input Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"No name.")),(0,i.kt)("td",{parentName:"tr",align:null},"exec")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Room Key"),(0,i.kt)("td",{parentName:"tr",align:null},"room key")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Player"),(0,i.kt)("td",{parentName:"tr",align:null},"player")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Output Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Output Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"No name.")),(0,i.kt)("td",{parentName:"tr",align:null},"exec")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"On Award Room Key Complete"),(0,i.kt)("td",{parentName:"tr",align:null},"exec")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Success"),(0,i.kt)("td",{parentName:"tr",align:null},"bool")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Properties"),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Is beta required?"),(0,i.kt)("th",null,"\u2705")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"Is this chip a trolling risk?"),(0,i.kt)("th",null,"\u274c")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"Chip UUID"),(0,i.kt)("th",null,"7e40f770-c9a4-4233-8845-cac6ec99ae67"))))))),(0,i.kt)("h3",{id:"uses"},"Uses"),(0,i.kt)("p",null,"None so far!"),(0,i.kt)("h3",{id:"tips"},"Tips"),(0,i.kt)("p",null,"None so far!"),(0,i.kt)("h3",{id:"issues"},"Issues"),(0,i.kt)("p",null,"None so far!"))}I.isMDXComponent=!0},47011:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjMzOC4wNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Ym94PSIwIDAgODAwIDMzOC4wNiI+PHBhdGggZmlsbD0iIzgxODA4MSIgZD0iTTE2MCwgNDEgdjc2IHEwLDEwLDEwLDEwIGgzMTguMDYgcTEwLDAsMTAsLTEwIHYtNzYgaDMzOC4wNiI+PC9wYXRoPjxwYXRoIGQ9Ik0xNjUsNDloLTE2LjQ2NWMtMC41NTIsMCwtMSwwLjQ0OCwtMSwxdjE2YzAsMC41NTIsMC40NDgsMSwxLDFoMTYuNDY1YzAuMzM0LDAsMC42NDcsLTAuMTY3LDAuODMyLC0wLjQ0NWw1LjMzMywtOGMwLjIyNCwtMC4zMzYsMC4yMjQsLTAuNzc0LDAsLTEuMTFsLTUuMzMzLC04Yy0wLjE4NSwtMC4yNzgsLTAuNDk4LC0wLjQ0NSwtMC44MzIsLTAuNDQ1eiIgZmlsbD0iI0Y1NUMxQSI+PC9wYXRoPjx0ZXh0IHg9IjE3NiIgeT0iNjEuNSIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC1zaXplPSJtZWRpdW0iIGNsYXNzPSJ1d3VudHUiPjwvdGV4dD48cmVjdCB4PSIxNDgiIHk9IjczIiB3aWR0aD0iMjIiIGhlaWdodD0iMTUiIHJ4PSIxIiBmaWxsPSIjRjVDNTFGIj48L3JlY3Q+PHRleHQgeD0iMTc2IiB5PSI4NS41IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXNpemU9Im1lZGl1bSIgY2xhc3M9InV3dW50dSI+Um9vbSBLZXk8L3RleHQ+PGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZGlfMjU1Nl8xOTEzMikiPjxyZWN0IHg9IjE0OCIgeT0iOTQiIHdpZHRoPSIyMiIgaGVpZ2h0PSIxNSIgcng9IjEiIGZpbGw9IiNGNUM1MUYiPjwvcmVjdD48L2c+PGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjFfZGlfMjU1Nl8xOTEzMikiPjxyZWN0IHg9Ijk0IiB5PSI5MCIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjIzIiByeD0iMSIgZmlsbD0iI0Y1QzUxRiI+PC9yZWN0PjxyZWN0IHg9Ijk4IiB5PSI5NC4wMDEiIHdpZHRoPSIzNyIgaGVpZ2h0PSIxNSIgcng9IjEiIGZpbGw9IiM4MTgwODEiPjwvcmVjdD48L2c+PGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjJfZGlfMjU1Nl8xOTEzMikiPjxyZWN0IHg9IjEzOSIgeT0iOTgiIHdpZHRoPSI5IiBoZWlnaHQ9IjciIGZpbGw9IiNGNUM1MUYiPjwvcmVjdD48L2c+PHRleHQgeD0iMTc2IiB5PSIxMDYuNSIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC1zaXplPSJtZWRpdW0iIGNsYXNzPSJ1d3VudHUiPlBsYXllcjwvdGV4dD48cGF0aCBkPSJNNTA1LjA2LDQ5aC0xNi40NjVjLTAuNTUyLDAsLTEsMC40NDgsLTEsMXYxNmMwLDAuNTUyLDAuNDQ4LDEsMSwxaDE2LjQ2NWMwLjMzNCwwLDAuNjQ3LC0wLjE2NywwLjgzMiwtMC40NDVsNS4zMzMsLThjMC4yMjQsLTAuMzM2LDAuMjI0LC0wLjc3NCwwLC0xLjExbC01LjMzMywtOGMtMC4xODUsLTAuMjc4LC0wLjQ5OCwtMC40NDUsLTAuODMyLC0wLjQ0NXoiIGZpbGw9IiNGNTVDMUEiPjwvcGF0aD48dGV4dCB4PSI0ODIuMDYiIHk9IjYxLjUiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0iZW5kIiBmb250LXNpemU9Im1lZGl1bSIgY2xhc3M9InV3dW50dSI+PC90ZXh0PjxwYXRoIGQ9Ik01MDUuMDYsNzNoLTE2LjQ2NWMtMC41NTIsMCwtMSwwLjQ0OCwtMSwxdjE2YzAsMC41NTIsMC40NDgsMSwxLDFoMTYuNDY1YzAuMzM0LDAsMC42NDcsLTAuMTY3LDAuODMyLC0wLjQ0NWw1LjMzMywtOGMwLjIyNCwtMC4zMzYsMC4yMjQsLTAuNzc0LDAsLTEuMTFsLTUuMzMzLC04Yy0wLjE4NSwtMC4yNzgsLTAuNDk4LC0wLjQ0NSwtMC44MzIsLTAuNDQ1eiIgZmlsbD0iI0Y1NUMxQSI+PC9wYXRoPjx0ZXh0IHg9IjQ4Mi4wNiIgeT0iODUuNSIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJlbmQiIGZvbnQtc2l6ZT0ibWVkaXVtIiBjbGFzcz0idXd1bnR1Ij5PbiBBd2FyZCBSb29tIEtleSBDb21wbGV0ZTwvdGV4dD48cmVjdCB4PSI0ODguMDYiIHk9Ijk3IiB3aWR0aD0iMjIiIGhlaWdodD0iMTUiIHJ4PSIxIiBmaWxsPSIjRUEyRTUwIj48L3JlY3Q+PHRleHQgeD0iNDgyLjA2IiB5PSIxMDkuNSIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJlbmQiIGZvbnQtc2l6ZT0ibWVkaXVtIiBjbGFzcz0idXd1bnR1Ij5TdWNjZXNzPC90ZXh0PjxwYXRoIGQ9Ik0xNjAsIDQxIHYtMzEgcTAsLTEwLDEwLC0xMCBoMzE4LjA2IHExMCwwLDEwLDEwIHYzMSBoLTMzOC4wNiIgZmlsbD0iIzUyNTE1MiI+PC9wYXRoPjx0ZXh0IHg9IjMyOS4wMyIgeT0iMjkuNSIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMThweCIgY2xhc3M9IlV3dW50dSI+QXdhcmQgUm9vbSBLZXk8L3RleHQ+PC9zdmc+"}}]);
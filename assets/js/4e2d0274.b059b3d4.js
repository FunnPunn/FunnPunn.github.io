"use strict";(self.webpackChunkcircuits=self.webpackChunkcircuits||[]).push([[74257],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>m});var n=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var I=n.createContext({}),c=function(t){var e=n.useContext(I),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=c(t.components);return n.createElement(I.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,I=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),p=c(a),u=i,m=p["".concat(I,".").concat(u)]||p[u]||d[u]||r;return a?n.createElement(m,l(l({ref:e},s),{},{components:a})):n.createElement(m,l({ref:e},s))}));function m(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,l=new Array(r);l[0]=u;var o={};for(var I in e)hasOwnProperty.call(e,I)&&(o[I]=e[I]);o.originalType=t,o[p]="string"==typeof t?t:i,l[1]=o;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},49885:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>I,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const r={sidebar_position:10,tags:["Chip"]},l="AI Look At",o={unversionedId:"documentation/chips/b5badf49-acfe-4a42-80e2-5262878e2d89",id:"documentation/chips/b5badf49-acfe-4a42-80e2-5262878e2d89",title:"AI Look At",description:"Command an AI to look at the input target. If you want the AI to look in a passed in vector as a direction, set the \u201cLook Target Is Direction\u201d parameter to True. To make an AI stop looking, use the AI Stop Looking node.",source:"@site/docs/documentation/chips/b5badf49-acfe-4a42-80e2-5262878e2d89.mdx",sourceDirName:"documentation/chips",slug:"/documentation/chips/b5badf49-acfe-4a42-80e2-5262878e2d89",permalink:"/docs/documentation/chips/b5badf49-acfe-4a42-80e2-5262878e2d89",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation/chips/b5badf49-acfe-4a42-80e2-5262878e2d89.mdx",tags:[{label:"Chip",permalink:"/docs/tags/chip"}],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,tags:["Chip"]},sidebar:"tutorialSidebar",previous:{title:"AI Has Line of Sight To Target",permalink:"/docs/documentation/chips/5858a52e-54fb-4bb2-80a0-ec5fce88b3ef"},next:{title:"AI Variable",permalink:"/docs/documentation/chips/0e92a7fb-fb38-418c-af39-9afec92112ee"}},I={},c=[{value:"Uses",id:"uses",level:3},{value:"Tips",id:"tips",level:3},{value:"Issues",id:"issues",level:3}],s={toc:c},p="wrapper";function d(t){let{components:e,...r}=t;return(0,i.kt)(p,(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ai-look-at"},"AI Look At"),(0,i.kt)("p",null,"Command an AI to look at the input target. If you want the AI to look in a passed in vector as a direction, set the \u201cLook Target Is Direction\u201d parameter to True. To make an AI stop looking, use the AI Stop Looking node."),(0,i.kt)("admonition",{title:"BETA",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},'This chip requires beta content to be enabled in the room. You can access the setting in "This Room -> Settings".')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Chip Image",src:a(58936).Z,width:"800",height:"800"})),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Input Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Input Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"No name.")),(0,i.kt)("td",{parentName:"tr",align:null},"exec")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AI"),(0,i.kt)("td",{parentName:"tr",align:null},"ai")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Look Target"),(0,i.kt)("td",{parentName:"tr",align:null},"Union(ai , combatant , rec room object , patrol point , player , vector3)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Look Target is Direction"),(0,i.kt)("td",{parentName:"tr",align:null},"bool")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Output Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Output Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"No name.")),(0,i.kt)("td",{parentName:"tr",align:null},"exec")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Properties"),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Is beta required?"),(0,i.kt)("th",null,"\u2705")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"Is this chip a trolling risk?"),(0,i.kt)("th",null,"\u274c")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"Chip UUPD"),(0,i.kt)("th",null,"._uuid"))))))),(0,i.kt)("h3",{id:"uses"},"Uses"),(0,i.kt)("p",null,"None so far!"),(0,i.kt)("h3",{id:"tips"},"Tips"),(0,i.kt)("p",null,"None so far!"),(0,i.kt)("h3",{id:"issues"},"Issues"),(0,i.kt)("p",null,"None so far!"))}d.isMDXComponent=!0},58936:(t,e,a)=>{a.d(e,{Z:()=>n});const n="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1VYnVudHUnKTs8L3N0eWxlPjwvZGVmcz48cGF0aCBmaWxsPSIjODE4MDgxIiBkPSJNMTYwLCA0MSB2MTAxIHEwLDEwLDEwLDEwIGgxNzYgcTEwLDAsMTAsLTEwIHYtMTAxIGgxOTYiPjwvcGF0aD48cGF0aCBkPSJNMTY1LDQ5aC0xNi40NjVjLTAuNTUyLDAsLTEsMC40NDgsLTEsMXYxNmMwLDAuNTUyLDAuNDQ4LDEsMSwxaDE2LjQ2NWMwLjMzNCwwLDAuNjQ3LC0wLjE2NywwLjgzMiwtMC40NDVsNS4zMzMsLThjMC4yMjQsLTAuMzM2LDAuMjI0LC0wLjc3NCwwLC0xLjExbC01LjMzMywtOGMtMC4xODUsLTAuMjc4LC0wLjQ5OCwtMC40NDUsLTAuODMyLC0wLjQ0NXoiIGZpbGw9IiNGNTVDMUEiPjwvcGF0aD48dGV4dCB4PSIxNzYiIHk9IjYxLjUiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtc2l6ZT0ibWVkaXVtIiBmb250LWZhbWlseT0iVWJ1bnR1Ij48L3RleHQ+PHJlY3QgeD0iMTQ4IiB5PSI3MyIgd2lkdGg9IjIyIiBoZWlnaHQ9IjE1IiByeD0iMSIgZmlsbD0iI0Y1QzUxRiI+PC9yZWN0Pjx0ZXh0IHg9IjE3NiIgeT0iODUuNSIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC1zaXplPSJtZWRpdW0iIGZvbnQtZmFtaWx5PSJVYnVudHUiPkFJPC90ZXh0PjxyZWN0IHg9IjE0OCIgeT0iOTQiIHdpZHRoPSIyMiIgaGVpZ2h0PSIxNSIgcng9IjEiIGZpbGw9IiNGNkVFRTgiPjwvcmVjdD48dGV4dCB4PSIxNzYiIHk9IjEwNi41IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXNpemU9Im1lZGl1bSIgZm9udC1mYW1pbHk9IlVidW50dSI+TG9vayBUYXJnZXQ8L3RleHQ+PGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZGlfMjU1Nl8xOTEzMikiPjxyZWN0IHg9IjE0OCIgeT0iMTE1IiB3aWR0aD0iMjIiIGhlaWdodD0iMTUiIHJ4PSIxIiBmaWxsPSIjRUEyRTUwIj48L3JlY3Q+PC9nPjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIxX2RpXzI1NTZfMTkxMzIpIj48cmVjdCB4PSI5NCIgeT0iMTExIiB3aWR0aD0iNDUiIGhlaWdodD0iMjMiIHJ4PSIxIiBmaWxsPSIjRUEyRTUwIj48L3JlY3Q+PHJlY3QgeD0iOTgiIHk9IjExNS4wMDEiIHdpZHRoPSIzNyIgaGVpZ2h0PSIxNSIgcng9IjEiIGZpbGw9IiM4MTgwODEiPjwvcmVjdD48L2c+PGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjJfZGlfMjU1Nl8xOTEzMikiPjxyZWN0IHg9IjEzOSIgeT0iMTE5IiB3aWR0aD0iOSIgaGVpZ2h0PSI3IiBmaWxsPSIjRUEyRTUwIj48L3JlY3Q+PC9nPjx0ZXh0IHg9IjE3NiIgeT0iMTI3LjUiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtc2l6ZT0ibWVkaXVtIiBmb250LWZhbWlseT0iVWJ1bnR1Ij5Mb29rIFRhcmdldCBpcyBEaXJlY3Rpb248L3RleHQ+PHBhdGggZD0iTTM1OSw0OWgtMTYuNDY1Yy0wLjU1MiwwLC0xLDAuNDQ4LC0xLDF2MTZjMCwwLjU1MiwwLjQ0OCwxLDEsMWgxNi40NjVjMC4zMzQsMCwwLjY0NywtMC4xNjcsMC44MzIsLTAuNDQ1bDUuMzMzLC04YzAuMjI0LC0wLjMzNiwwLjIyNCwtMC43NzQsMCwtMS4xMWwtNS4zMzMsLThjLTAuMTg1LC0wLjI3OCwtMC40OTgsLTAuNDQ1LC0wLjgzMiwtMC40NDV6IiBmaWxsPSIjRjU1QzFBIj48L3BhdGg+PHRleHQgeD0iMzM4IiB5PSI2MS41IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9ImVuZCIgZm9udC1zaXplPSJtZWRpdW0iIGZvbnQtZmFtaWx5PSJVYnVudHUiPjwvdGV4dD48cGF0aCBkPSJNMTYwLCA0MSB2LTMxIHEwLC0xMCwxMCwtMTAgaDE3NiBxMTAsMCwxMCwxMCB2MzEgaC0xOTYiIGZpbGw9IiM1MjUxNTIiPjwvcGF0aD48dGV4dCB4PSIyNTciIHk9IjI4LjUiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9Im1lZGl1bSIgZm9udC1mYW1pbHk9IlVidW50dSI+QUkgTG9vayBBdDwvdGV4dD48L3N2Zz4="}}]);
"use strict";(self.webpackChunkcircuits=self.webpackChunkcircuits||[]).push([[28471],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},I=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),I=i,m=p["".concat(s,".").concat(I)]||p[I]||d[I]||r;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=I;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}I.displayName="MDXCreateElement"},96763:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={sidebar_position:539,tags:["Chip"]},l="Set Position",o={unversionedId:"documentation/chips/6e68ede8-32de-455f-9449-83951b4e4f73",id:"documentation/chips/6e68ede8-32de-455f-9449-83951b4e4f73",title:"Set Position",description:"Sets the position of the target player or object. Will fail in the following cases: If the target object is currently held, select/frozen by the maker pen, or is the child of a gizmo. Will also fail on players that are seated.",source:"@site/docs/documentation/chips/6e68ede8-32de-455f-9449-83951b4e4f73.mdx",sourceDirName:"documentation/chips",slug:"/documentation/chips/6e68ede8-32de-455f-9449-83951b4e4f73",permalink:"/docs/documentation/chips/6e68ede8-32de-455f-9449-83951b4e4f73",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation/chips/6e68ede8-32de-455f-9449-83951b4e4f73.mdx",tags:[{label:"Chip",permalink:"/docs/tags/chip"}],version:"current",sidebarPosition:539,frontMatter:{sidebar_position:539,tags:["Chip"]},sidebar:"tutorialSidebar",previous:{title:"Set Position (Deprecated)",permalink:"/docs/documentation/chips/ff1c2a15-4099-4aaa-afe3-c217b2fca15b"},next:{title:"Set Rotation",permalink:"/docs/documentation/chips/0a6f6078-8075-43c7-bbb2-32b63ae48e92"}},s={},c=[{value:"Uses",id:"uses",level:3},{value:"Tips",id:"tips",level:3},{value:"Issues",id:"issues",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"set-position"},"Set Position"),(0,i.kt)("p",null,"Sets the position of the target player or object. Will fail in the following cases: If the target object is currently held, select/frozen by the maker pen, or is the child of a gizmo. Will also fail on players that are seated."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example banner",src:n(7970).Z,width:"800",height:"210"})),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Input Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Input Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"No name.")),(0,i.kt)("td",{parentName:"tr",align:null},"exec")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Target"),(0,i.kt)("td",{parentName:"tr",align:null},"Union(player , rec room object)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Position"),(0,i.kt)("td",{parentName:"tr",align:null},"vector3")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Output Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Output Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"No name.")),(0,i.kt)("td",{parentName:"tr",align:null},"exec")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Success"),(0,i.kt)("td",{parentName:"tr",align:null},"bool")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Properties"),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Is beta required?"),(0,i.kt)("th",null,"\u274c")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"Is this chip a trolling risk?"),(0,i.kt)("th",null,"\u274c")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"Chip UUPD"),(0,i.kt)("th",null,"._uuid"))))))),(0,i.kt)("h3",{id:"uses"},"Uses"),(0,i.kt)("p",null,"None so far!"),(0,i.kt)("h3",{id:"tips"},"Tips"),(0,i.kt)("p",null,"None so far!"),(0,i.kt)("h3",{id:"issues"},"Issues"),(0,i.kt)("p",null,"None so far!"))}d.isMDXComponent=!0},7970:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Ym94PSIwIDAgODAwIDIxMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1VYnVudHUnKTs8L3N0eWxlPjwvZGVmcz48cGF0aCBmaWxsPSIjODE4MDgxIiBkPSJNMTYwLCA0MSB2NzYgcTAsMTAsMTAsMTAgaDE5MCBxMTAsMCwxMCwtMTAgdi03NiBoMjEwIj48L3BhdGg+PHBhdGggZD0iTTE2NSw0OWgtMTYuNDY1Yy0wLjU1MiwwLC0xLDAuNDQ4LC0xLDF2MTZjMCwwLjU1MiwwLjQ0OCwxLDEsMWgxNi40NjVjMC4zMzQsMCwwLjY0NywtMC4xNjcsMC44MzIsLTAuNDQ1bDUuMzMzLC04YzAuMjI0LC0wLjMzNiwwLjIyNCwtMC43NzQsMCwtMS4xMWwtNS4zMzMsLThjLTAuMTg1LC0wLjI3OCwtMC40OTgsLTAuNDQ1LC0wLjgzMiwtMC40NDV6IiBmaWxsPSIjRjU1QzFBIj48L3BhdGg+PHRleHQgeD0iMTc2IiB5PSI2MS41IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXNpemU9Im1lZGl1bSIgZm9udC1mYW1pbHk9IlVidW50dSI+PC90ZXh0PjxyZWN0IHg9IjE0OCIgeT0iNzMiIHdpZHRoPSIyMiIgaGVpZ2h0PSIxNSIgcng9IjEiIGZpbGw9IiNGNkVFRTgiPjwvcmVjdD48dGV4dCB4PSIxNzYiIHk9Ijg1LjUiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtc2l6ZT0ibWVkaXVtIiBmb250LWZhbWlseT0iVWJ1bnR1Ij5UYXJnZXQ8L3RleHQ+PHJlY3QgeD0iMTQ4IiB5PSI5NCIgd2lkdGg9IjIyIiBoZWlnaHQ9IjE1IiByeD0iMSIgZmlsbD0iI0Y1QzUxRiI+PC9yZWN0Pjx0ZXh0IHg9IjE3NiIgeT0iMTA2LjUiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtc2l6ZT0ibWVkaXVtIiBmb250LWZhbWlseT0iVWJ1bnR1Ij5Qb3NpdGlvbjwvdGV4dD48cGF0aCBkPSJNMzc3LDQ5aC0xNi40NjVjLTAuNTUyLDAsLTEsMC40NDgsLTEsMXYxNmMwLDAuNTUyLDAuNDQ4LDEsMSwxaDE2LjQ2NWMwLjMzNCwwLDAuNjQ3LC0wLjE2NywwLjgzMiwtMC40NDVsNS4zMzMsLThjMC4yMjQsLTAuMzM2LDAuMjI0LC0wLjc3NCwwLC0xLjExbC01LjMzMywtOGMtMC4xODUsLTAuMjc4LC0wLjQ5OCwtMC40NDUsLTAuODMyLC0wLjQ0NXoiIGZpbGw9IiNGNTVDMUEiPjwvcGF0aD48dGV4dCB4PSIzNTQiIHk9IjYxLjUiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0iZW5kIiBmb250LXNpemU9Im1lZGl1bSIgZm9udC1mYW1pbHk9IlVidW50dSI+PC90ZXh0PjxyZWN0IHg9IjM2MCIgeT0iNzMiIHdpZHRoPSIyMiIgaGVpZ2h0PSIxNSIgcng9IjEiIGZpbGw9IiNFQTJFNTAiPjwvcmVjdD48dGV4dCB4PSIzNTQiIHk9Ijg1LjUiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0iZW5kIiBmb250LXNpemU9Im1lZGl1bSIgZm9udC1mYW1pbHk9IlVidW50dSI+U3VjY2VzczwvdGV4dD48cGF0aCBkPSJNMTYwLCA0MSB2LTMxIHEwLC0xMCwxMCwtMTAgaDE5MCBxMTAsMCwxMCwxMCB2MzEgaC0yMTAiIGZpbGw9IiM1MjUxNTIiPjwvcGF0aD48dGV4dCB4PSIyNjUiIHk9IjI4LjUiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9Im1lZGl1bSIgZm9udC1mYW1pbHk9IlVidW50dSI+U2V0IFBvc2l0aW9uPC90ZXh0Pjwvc3ZnPg=="}}]);
"use strict";(self.webpackChunkcircuits=self.webpackChunkcircuits||[]).push([[89291],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>b});var n=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var s=n.createContext({}),c=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},I=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),p=c(a),I=i,b=p["".concat(s,".").concat(I)]||p[I]||d[I]||r;return a?n.createElement(b,l(l({ref:e},u),{},{components:a})):n.createElement(b,l({ref:e},u))}));function b(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,l=new Array(r);l[0]=I;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[p]="string"==typeof t?t:i,l[1]=o;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}I.displayName="MDXCreateElement"},82005:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const r={sidebar_position:540,tags:["Chip"]},l="Set Rotation",o={unversionedId:"documentation/chips/0a6f6078-8075-43c7-bbb2-32b63ae48e92",id:"documentation/chips/0a6f6078-8075-43c7-bbb2-32b63ae48e92",title:"Set Rotation",description:"Sets the rotation of the target player or object. Players will rotate about the vertical axis only. Will fail in the following cases: If the target object is currently held, select/frozen by the maker pen, or is the child of a gizmo. Will also fail on players that are seated.",source:"@site/docs/documentation/chips/0a6f6078-8075-43c7-bbb2-32b63ae48e92.mdx",sourceDirName:"documentation/chips",slug:"/documentation/chips/0a6f6078-8075-43c7-bbb2-32b63ae48e92",permalink:"/docs/documentation/chips/0a6f6078-8075-43c7-bbb2-32b63ae48e92",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation/chips/0a6f6078-8075-43c7-bbb2-32b63ae48e92.mdx",tags:[{label:"Chip",permalink:"/docs/tags/chip"}],version:"current",sidebarPosition:540,frontMatter:{sidebar_position:540,tags:["Chip"]},sidebar:"tutorialSidebar",previous:{title:"Set Position",permalink:"/docs/documentation/chips/6e68ede8-32de-455f-9449-83951b4e4f73"},next:{title:"Set Transform",permalink:"/docs/documentation/chips/6873f341-1ae8-4ddd-9f8c-892a977ef974"}},s={},c=[{value:"Uses",id:"uses",level:3},{value:"Tips",id:"tips",level:3},{value:"Issues",id:"issues",level:3}],u={toc:c},p="wrapper";function d(t){let{components:e,...r}=t;return(0,i.kt)(p,(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"set-rotation"},"Set Rotation"),(0,i.kt)("p",null,"Sets the rotation of the target player or object. Players will rotate about the vertical axis only. Will fail in the following cases: If the target object is currently held, select/frozen by the maker pen, or is the child of a gizmo. Will also fail on players that are seated."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example banner",src:a(50318).Z,width:"800",height:"210"})),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Input Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Input Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"No name.")),(0,i.kt)("td",{parentName:"tr",align:null},"exec")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Target"),(0,i.kt)("td",{parentName:"tr",align:null},"Union(player , rec room object)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Rotation"),(0,i.kt)("td",{parentName:"tr",align:null},"Union(vector3 , quaternion)")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Output Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Output Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"No name.")),(0,i.kt)("td",{parentName:"tr",align:null},"exec")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Success"),(0,i.kt)("td",{parentName:"tr",align:null},"bool")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Properties"),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Is beta required?"),(0,i.kt)("th",null,"\u274c")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"Is this chip a trolling risk?"),(0,i.kt)("th",null,"\u274c")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"Chip UUPD"),(0,i.kt)("th",null,"._uuid"))))))),(0,i.kt)("h3",{id:"uses"},"Uses"),(0,i.kt)("p",null,"None so far!"),(0,i.kt)("h3",{id:"tips"},"Tips"),(0,i.kt)("p",null,"None so far!"),(0,i.kt)("h3",{id:"issues"},"Issues"),(0,i.kt)("p",null,"None so far!"))}d.isMDXComponent=!0},50318:(t,e,a)=>{a.d(e,{Z:()=>n});const n="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Ym94PSIwIDAgODAwIDIxMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1VYnVudHUnKTs8L3N0eWxlPjwvZGVmcz48cGF0aCBmaWxsPSIjODE4MDgxIiBkPSJNMTYwLCA0MSB2NzYgcTAsMTAsMTAsMTAgaDE5MCBxMTAsMCwxMCwtMTAgdi03NiBoMjEwIj48L3BhdGg+PHBhdGggZD0iTTE2NSw0OWgtMTYuNDY1Yy0wLjU1MiwwLC0xLDAuNDQ4LC0xLDF2MTZjMCwwLjU1MiwwLjQ0OCwxLDEsMWgxNi40NjVjMC4zMzQsMCwwLjY0NywtMC4xNjcsMC44MzIsLTAuNDQ1bDUuMzMzLC04YzAuMjI0LC0wLjMzNiwwLjIyNCwtMC43NzQsMCwtMS4xMWwtNS4zMzMsLThjLTAuMTg1LC0wLjI3OCwtMC40OTgsLTAuNDQ1LC0wLjgzMiwtMC40NDV6IiBmaWxsPSIjRjU1QzFBIj48L3BhdGg+PHRleHQgeD0iMTc2IiB5PSI2MS41IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXNpemU9Im1lZGl1bSIgZm9udC1mYW1pbHk9IlVidW50dSI+PC90ZXh0PjxyZWN0IHg9IjE0OCIgeT0iNzMiIHdpZHRoPSIyMiIgaGVpZ2h0PSIxNSIgcng9IjEiIGZpbGw9IiNGNkVFRTgiPjwvcmVjdD48dGV4dCB4PSIxNzYiIHk9Ijg1LjUiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtc2l6ZT0ibWVkaXVtIiBmb250LWZhbWlseT0iVWJ1bnR1Ij5UYXJnZXQ8L3RleHQ+PHJlY3QgeD0iMTQ4IiB5PSI5NCIgd2lkdGg9IjIyIiBoZWlnaHQ9IjE1IiByeD0iMSIgZmlsbD0iI0Y2RUVFOCI+PC9yZWN0Pjx0ZXh0IHg9IjE3NiIgeT0iMTA2LjUiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtc2l6ZT0ibWVkaXVtIiBmb250LWZhbWlseT0iVWJ1bnR1Ij5Sb3RhdGlvbjwvdGV4dD48cGF0aCBkPSJNMzc3LDQ5aC0xNi40NjVjLTAuNTUyLDAsLTEsMC40NDgsLTEsMXYxNmMwLDAuNTUyLDAuNDQ4LDEsMSwxaDE2LjQ2NWMwLjMzNCwwLDAuNjQ3LC0wLjE2NywwLjgzMiwtMC40NDVsNS4zMzMsLThjMC4yMjQsLTAuMzM2LDAuMjI0LC0wLjc3NCwwLC0xLjExbC01LjMzMywtOGMtMC4xODUsLTAuMjc4LC0wLjQ5OCwtMC40NDUsLTAuODMyLC0wLjQ0NXoiIGZpbGw9IiNGNTVDMUEiPjwvcGF0aD48dGV4dCB4PSIzNTQiIHk9IjYxLjUiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0iZW5kIiBmb250LXNpemU9Im1lZGl1bSIgZm9udC1mYW1pbHk9IlVidW50dSI+PC90ZXh0PjxyZWN0IHg9IjM2MCIgeT0iNzMiIHdpZHRoPSIyMiIgaGVpZ2h0PSIxNSIgcng9IjEiIGZpbGw9IiNFQTJFNTAiPjwvcmVjdD48dGV4dCB4PSIzNTQiIHk9Ijg1LjUiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0iZW5kIiBmb250LXNpemU9Im1lZGl1bSIgZm9udC1mYW1pbHk9IlVidW50dSI+U3VjY2VzczwvdGV4dD48cGF0aCBkPSJNMTYwLCA0MSB2LTMxIHEwLC0xMCwxMCwtMTAgaDE5MCBxMTAsMCwxMCwxMCB2MzEgaC0yMTAiIGZpbGw9IiM1MjUxNTIiPjwvcGF0aD48dGV4dCB4PSIyNjUiIHk9IjI4LjUiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9Im1lZGl1bSIgZm9udC1mYW1pbHk9IlVidW50dSI+U2V0IFJvdGF0aW9uPC90ZXh0Pjwvc3ZnPg=="}}]);
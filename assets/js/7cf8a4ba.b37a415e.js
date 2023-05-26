"use strict";(self.webpackChunkcircuits=self.webpackChunkcircuits||[]).push([[15887],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>m});var n=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var s=n.createContext({}),d=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},c="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},I=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=d(a),I=i,m=c["".concat(s,".").concat(I)]||c[I]||p[I]||r;return a?n.createElement(m,l(l({ref:e},u),{},{components:a})):n.createElement(m,l({ref:e},u))}));function m(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,l=new Array(r);l[0]=I;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[c]="string"==typeof t?t:i,l[1]=o;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}I.displayName="MDXCreateElement"},91667:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));const r={sidebar_position:541,tags:["Chip"]},l="Set Transform",o={unversionedId:"documentation/chips/6873f341-1ae8-4ddd-9f8c-892a977ef974",id:"documentation/chips/6873f341-1ae8-4ddd-9f8c-892a977ef974",title:"Set Transform",description:"Sets the transform (position and rotation) of the target player or object. Players will rotate about the vertical axis only. Will fail in the following cases: If the target object is currently held, select/frozen by the maker pen, or is the child of a gizmo. Will also fail on players that are seated.",source:"@site/docs/documentation/chips/6873f341-1ae8-4ddd-9f8c-892a977ef974.mdx",sourceDirName:"documentation/chips",slug:"/documentation/chips/6873f341-1ae8-4ddd-9f8c-892a977ef974",permalink:"/docs/documentation/chips/6873f341-1ae8-4ddd-9f8c-892a977ef974",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation/chips/6873f341-1ae8-4ddd-9f8c-892a977ef974.mdx",tags:[{label:"Chip",permalink:"/docs/tags/chip"}],version:"current",sidebarPosition:541,frontMatter:{sidebar_position:541,tags:["Chip"]},sidebar:"tutorialSidebar",previous:{title:"Set Rotation",permalink:"/docs/documentation/chips/0a6f6078-8075-43c7-bbb2-32b63ae48e92"},next:{title:"SFX",permalink:"/docs/documentation/chips/d65a4666-5036-436b-ad42-a20aafa2174d"}},s={},d=[{value:"Uses",id:"uses",level:3},{value:"Tips",id:"tips",level:3},{value:"Issues",id:"issues",level:3}],u={toc:d},c="wrapper";function p(t){let{components:e,...r}=t;return(0,i.kt)(c,(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"set-transform"},"Set Transform"),(0,i.kt)("p",null,"Sets the transform (position and rotation) of the target player or object. Players will rotate about the vertical axis only. Will fail in the following cases: If the target object is currently held, select/frozen by the maker pen, or is the child of a gizmo. Will also fail on players that are seated."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example banner",src:a(97501).Z,width:"800",height:"228"})),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Input Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Input Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"No name.")),(0,i.kt)("td",{parentName:"tr",align:null},"exec")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Target"),(0,i.kt)("td",{parentName:"tr",align:null},"Union(player , rec room object)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Position"),(0,i.kt)("td",{parentName:"tr",align:null},"vector3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Rotation"),(0,i.kt)("td",{parentName:"tr",align:null},"Union(vector3 , quaternion)")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Output Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Output Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"No name.")),(0,i.kt)("td",{parentName:"tr",align:null},"exec")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Success"),(0,i.kt)("td",{parentName:"tr",align:null},"bool")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Properties"),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Is beta required?"),(0,i.kt)("th",null,"\u274c")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"Is this chip a trolling risk?"),(0,i.kt)("th",null,"\u274c")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"Chip UUID"),(0,i.kt)("th",null,"6873f341-1ae8-4ddd-9f8c-892a977ef974"))))))),(0,i.kt)("h3",{id:"uses"},"Uses"),(0,i.kt)("p",null,"None so far!"),(0,i.kt)("h3",{id:"tips"},"Tips"),(0,i.kt)("p",null,"None so far!"),(0,i.kt)("h3",{id:"issues"},"Issues"),(0,i.kt)("p",null,"None so far!"))}p.isMDXComponent=!0},97501:(t,e,a)=>{a.d(e,{Z:()=>n});const n="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjIyOC4zIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdib3g9IjAgMCA4MDAgMjI4LjMiPjxwYXRoIGZpbGw9IiM4MTgwODEiIGQ9Ik0xNjAsIDQxIHYxMDEgcTAsMTAsMTAsMTAgaDIwOC4zIHExMCwwLDEwLC0xMCB2LTEwMSBoMjI4LjMiPjwvcGF0aD48cGF0aCBkPSJNMTY1LDQ5aC0xNi40NjVjLTAuNTUyLDAsLTEsMC40NDgsLTEsMXYxNmMwLDAuNTUyLDAuNDQ4LDEsMSwxaDE2LjQ2NWMwLjMzNCwwLDAuNjQ3LC0wLjE2NywwLjgzMiwtMC40NDVsNS4zMzMsLThjMC4yMjQsLTAuMzM2LDAuMjI0LC0wLjc3NCwwLC0xLjExbC01LjMzMywtOGMtMC4xODUsLTAuMjc4LC0wLjQ5OCwtMC40NDUsLTAuODMyLC0wLjQ0NXoiIGZpbGw9IiNGNTVDMUEiPjwvcGF0aD48dGV4dCB4PSIxNzYiIHk9IjYxLjUiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtc2l6ZT0ibWVkaXVtIiBjbGFzcz0idXd1bnR1Ij48L3RleHQ+PHJlY3QgeD0iMTQ4IiB5PSI3MyIgd2lkdGg9IjIyIiBoZWlnaHQ9IjE1IiByeD0iMSIgZmlsbD0iI0Y2RUVFOCI+PC9yZWN0Pjx0ZXh0IHg9IjE3NiIgeT0iODUuNSIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC1zaXplPSJtZWRpdW0iIGNsYXNzPSJ1d3VudHUiPlRhcmdldDwvdGV4dD48cmVjdCB4PSIxNDgiIHk9Ijk0IiB3aWR0aD0iMjIiIGhlaWdodD0iMTUiIHJ4PSIxIiBmaWxsPSIjRjVDNTFGIj48L3JlY3Q+PHRleHQgeD0iMTc2IiB5PSIxMDYuNSIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC1zaXplPSJtZWRpdW0iIGNsYXNzPSJ1d3VudHUiPlBvc2l0aW9uPC90ZXh0PjxyZWN0IHg9IjE0OCIgeT0iMTE1IiB3aWR0aD0iMjIiIGhlaWdodD0iMTUiIHJ4PSIxIiBmaWxsPSIjRjZFRUU4Ij48L3JlY3Q+PHRleHQgeD0iMTc2IiB5PSIxMjcuNSIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC1zaXplPSJtZWRpdW0iIGNsYXNzPSJ1d3VudHUiPlJvdGF0aW9uPC90ZXh0PjxwYXRoIGQ9Ik0zOTUuMyw0OWgtMTYuNDY1Yy0wLjU1MiwwLC0xLDAuNDQ4LC0xLDF2MTZjMCwwLjU1MiwwLjQ0OCwxLDEsMWgxNi40NjVjMC4zMzQsMCwwLjY0NywtMC4xNjcsMC44MzIsLTAuNDQ1bDUuMzMzLC04YzAuMjI0LC0wLjMzNiwwLjIyNCwtMC43NzQsMCwtMS4xMWwtNS4zMzMsLThjLTAuMTg1LC0wLjI3OCwtMC40OTgsLTAuNDQ1LC0wLjgzMiwtMC40NDV6IiBmaWxsPSIjRjU1QzFBIj48L3BhdGg+PHRleHQgeD0iMzcyLjMiIHk9IjYxLjUiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0iZW5kIiBmb250LXNpemU9Im1lZGl1bSIgY2xhc3M9InV3dW50dSI+PC90ZXh0PjxyZWN0IHg9IjM3OC4zIiB5PSI3MyIgd2lkdGg9IjIyIiBoZWlnaHQ9IjE1IiByeD0iMSIgZmlsbD0iI0VBMkU1MCI+PC9yZWN0Pjx0ZXh0IHg9IjM3Mi4zIiB5PSI4NS41IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9ImVuZCIgZm9udC1zaXplPSJtZWRpdW0iIGNsYXNzPSJ1d3VudHUiPlN1Y2Nlc3M8L3RleHQ+PHBhdGggZD0iTTE2MCwgNDEgdi0zMSBxMCwtMTAsMTAsLTEwIGgyMDguMyBxMTAsMCwxMCwxMCB2MzEgaC0yMjguMyIgZmlsbD0iIzUyNTE1MiI+PC9wYXRoPjx0ZXh0IHg9IjI3NC4xNSIgeT0iMjkuNSIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMThweCIgY2xhc3M9IlV3dW50dSI+U2V0IFRyYW5zZm9ybTwvdGV4dD48L3N2Zz4="}}]);
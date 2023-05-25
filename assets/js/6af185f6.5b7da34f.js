"use strict";(self.webpackChunkcircuits=self.webpackChunkcircuits||[]).push([[89160],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>u});var i=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function I(t,e){if(null==t)return{};var a,i,n=function(t,e){if(null==t)return{};var a,i,n={},l=Object.keys(t);for(i=0;i<l.length;i++)a=l[i],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(i=0;i<l.length;i++)a=l[i],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=i.createContext({}),d=function(t){var e=i.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},s=function(t){var e=d(t.components);return i.createElement(o.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},p=i.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,s=I(t,["components","mdxType","originalType","parentName"]),c=d(a),p=n,u=c["".concat(o,".").concat(p)]||c[p]||m[p]||l;return a?i.createElement(u,r(r({ref:e},s),{},{components:a})):i.createElement(u,r({ref:e},s))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,r=new Array(l);r[0]=p;var I={};for(var o in e)hasOwnProperty.call(e,o)&&(I[o]=e[o]);I.originalType=t,I[c]="string"==typeof t?t:n,r[1]=I;for(var d=2;d<l;d++)r[d]=a[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}p.displayName="MDXCreateElement"},53864:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>I,toc:()=>d});var i=a(87462),n=(a(67294),a(3905));const l={sidebar_position:476,tags:["Chip"]},r="Raycast",I={unversionedId:"documentation/chips/af203a1f-f3c9-479b-86f0-72224b094179",id:"documentation/chips/af203a1f-f3c9-479b-86f0-72224b094179",title:"Raycast",description:'Fires an invisible ray from the "Start Position", in the "Direction" specified. Returns True if any object or player is hit within the target "Max Distance". Otherwise, returns False. You can configure the chip itself to ignore players or objects specifically.',source:"@site/docs/documentation/chips/af203a1f-f3c9-479b-86f0-72224b094179.mdx",sourceDirName:"documentation/chips",slug:"/documentation/chips/af203a1f-f3c9-479b-86f0-72224b094179",permalink:"/docs/documentation/chips/af203a1f-f3c9-479b-86f0-72224b094179",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation/chips/af203a1f-f3c9-479b-86f0-72224b094179.mdx",tags:[{label:"Chip",permalink:"/docs/tags/chip"}],version:"current",sidebarPosition:476,frontMatter:{sidebar_position:476,tags:["Chip"]},sidebar:"tutorialSidebar",previous:{title:"Random Int",permalink:"/docs/documentation/chips/fb2645f0-4042-4ef1-b988-af2f80e651ec"},next:{title:"Recalculate Room Authority",permalink:"/docs/documentation/chips/d5df73b6-4b92-4867-ab3a-5d308876598b"}},o={},d=[{value:"Uses",id:"uses",level:3},{value:"Tips",id:"tips",level:3},{value:"Issues",id:"issues",level:3}],s={toc:d},c="wrapper";function m(t){let{components:e,...l}=t;return(0,n.kt)(c,(0,i.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"raycast"},"Raycast"),(0,n.kt)("p",null,'Fires an invisible ray from the "Start Position", in the "Direction" specified. Returns True if any object or player is hit within the target "Max Distance". Otherwise, returns False. You can configure the chip itself to ignore players or objects specifically.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Example banner",src:a(34841).Z,width:"800",height:"244"})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Input Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Input Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Start Position"),(0,n.kt)("td",{parentName:"tr",align:null},"vector3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Direction"),(0,n.kt)("td",{parentName:"tr",align:null},"vector3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Max Distance (m)"),(0,n.kt)("td",{parentName:"tr",align:null},"float")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Output Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Output Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Hit"),(0,n.kt)("td",{parentName:"tr",align:null},"bool")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Player"),(0,n.kt)("td",{parentName:"tr",align:null},"player")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Object"),(0,n.kt)("td",{parentName:"tr",align:null},"rec room object")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Distance"),(0,n.kt)("td",{parentName:"tr",align:null},"float")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Hit Position"),(0,n.kt)("td",{parentName:"tr",align:null},"vector3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Surface Normal"),(0,n.kt)("td",{parentName:"tr",align:null},"vector3")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Properties"),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Is beta required?"),(0,n.kt)("th",null,"\u274c")),(0,n.kt)("tr",null,(0,n.kt)("th",null,"Is this chip a trolling risk?"),(0,n.kt)("th",null,"\u274c")),(0,n.kt)("tr",null,(0,n.kt)("th",null,"Chip UUPD"),(0,n.kt)("th",null,"._uuid"))))))),(0,n.kt)("h3",{id:"uses"},"Uses"),(0,n.kt)("p",null,"None so far!"),(0,n.kt)("h3",{id:"tips"},"Tips"),(0,n.kt)("p",null,"None so far!"),(0,n.kt)("h3",{id:"issues"},"Issues"),(0,n.kt)("p",null,"None so far!"))}m.isMDXComponent=!0},34841:(t,e,a)=>{a.d(e,{Z:()=>i});const i="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjI0NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Ym94PSIwIDAgODAwIDI0NCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1VYnVudHUnKTs8L3N0eWxlPjwvZGVmcz48cGF0aCBmaWxsPSIjODE4MDgxIiBkPSJNMTYwLCA0MSB2MTUxIHEwLDEwLDEwLDEwIGgyMjQgcTEwLDAsMTAsLTEwIHYtMTUxIGgyNDQiPjwvcGF0aD48cmVjdCB4PSIxNDgiIHk9IjQ5IiB3aWR0aD0iMjIiIGhlaWdodD0iMTUiIHJ4PSIxIiBmaWxsPSIjRjVDNTFGIj48L3JlY3Q+PHRleHQgeD0iMTc2IiB5PSI2MS41IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXNpemU9Im1lZGl1bSIgZm9udC1mYW1pbHk9IlVidW50dSI+U3RhcnQgUG9zaXRpb248L3RleHQ+PHJlY3QgeD0iMTQ4IiB5PSI3MCIgd2lkdGg9IjIyIiBoZWlnaHQ9IjE1IiByeD0iMSIgZmlsbD0iI0Y1QzUxRiI+PC9yZWN0Pjx0ZXh0IHg9IjE3NiIgeT0iODIuNSIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC1zaXplPSJtZWRpdW0iIGZvbnQtZmFtaWx5PSJVYnVudHUiPkRpcmVjdGlvbjwvdGV4dD48ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9kaV8yNTU2XzE5MTMyKSI+PHJlY3QgeD0iMTQ4IiB5PSI5MSIgd2lkdGg9IjIyIiBoZWlnaHQ9IjE1IiByeD0iMSIgZmlsbD0iIzE4NkJERCI+PC9yZWN0PjwvZz48ZyBmaWx0ZXI9InVybCgjZmlsdGVyMV9kaV8yNTU2XzE5MTMyKSI+PHJlY3QgeD0iOTQiIHk9Ijg3IiB3aWR0aD0iNDUiIGhlaWdodD0iMjMiIHJ4PSIxIiBmaWxsPSIjMTg2QkREIj48L3JlY3Q+PHJlY3QgeD0iOTgiIHk9IjkxLjAwMSIgd2lkdGg9IjM3IiBoZWlnaHQ9IjE1IiByeD0iMSIgZmlsbD0iIzgxODA4MSI+PC9yZWN0PjwvZz48ZyBmaWx0ZXI9InVybCgjZmlsdGVyMl9kaV8yNTU2XzE5MTMyKSI+PHJlY3QgeD0iMTM5IiB5PSI5NSIgd2lkdGg9IjkiIGhlaWdodD0iNyIgZmlsbD0iIzE4NkJERCI+PC9yZWN0PjwvZz48dGV4dCB4PSIxNzYiIHk9IjEwMy41IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXNpemU9Im1lZGl1bSIgZm9udC1mYW1pbHk9IlVidW50dSI+TWF4IERpc3RhbmNlIChtKTwvdGV4dD48cmVjdCB4PSIzMjAiIHk9IjQ5IiB3aWR0aD0iMjIiIGhlaWdodD0iMTUiIHJ4PSIxIiBmaWxsPSIjRUEyRTUwIj48L3JlY3Q+PHRleHQgeD0iMzE0IiB5PSI2MS41IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9ImVuZCIgZm9udC1zaXplPSJtZWRpdW0iIGZvbnQtZmFtaWx5PSJVYnVudHUiPkhpdDwvdGV4dD48cmVjdCB4PSIzMjAiIHk9IjcwIiB3aWR0aD0iMjIiIGhlaWdodD0iMTUiIHJ4PSIxIiBmaWxsPSIjRjVDNTFGIj48L3JlY3Q+PHRleHQgeD0iMzE0IiB5PSI4Mi41IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9ImVuZCIgZm9udC1zaXplPSJtZWRpdW0iIGZvbnQtZmFtaWx5PSJVYnVudHUiPlBsYXllcjwvdGV4dD48cmVjdCB4PSIzMjAiIHk9IjkxIiB3aWR0aD0iMjIiIGhlaWdodD0iMTUiIHJ4PSIxIiBmaWxsPSIjRjVDNTFGIj48L3JlY3Q+PHRleHQgeD0iMzE0IiB5PSIxMDMuNSIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJlbmQiIGZvbnQtc2l6ZT0ibWVkaXVtIiBmb250LWZhbWlseT0iVWJ1bnR1Ij5PYmplY3Q8L3RleHQ+PHJlY3QgeD0iMzIwIiB5PSIxMTIiIHdpZHRoPSIyMiIgaGVpZ2h0PSIxNSIgcng9IjEiIGZpbGw9IiMxODZCREQiPjwvcmVjdD48dGV4dCB4PSIzMTQiIHk9IjEyNC41IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9ImVuZCIgZm9udC1zaXplPSJtZWRpdW0iIGZvbnQtZmFtaWx5PSJVYnVudHUiPkRpc3RhbmNlPC90ZXh0PjxyZWN0IHg9IjMyMCIgeT0iMTMzIiB3aWR0aD0iMjIiIGhlaWdodD0iMTUiIHJ4PSIxIiBmaWxsPSIjRjVDNTFGIj48L3JlY3Q+PHRleHQgeD0iMzE0IiB5PSIxNDUuNSIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJlbmQiIGZvbnQtc2l6ZT0ibWVkaXVtIiBmb250LWZhbWlseT0iVWJ1bnR1Ij5IaXQgUG9zaXRpb248L3RleHQ+PHJlY3QgeD0iMzIwIiB5PSIxNTQiIHdpZHRoPSIyMiIgaGVpZ2h0PSIxNSIgcng9IjEiIGZpbGw9IiNGNUM1MUYiPjwvcmVjdD48dGV4dCB4PSIzMTQiIHk9IjE2Ni41IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9ImVuZCIgZm9udC1zaXplPSJtZWRpdW0iIGZvbnQtZmFtaWx5PSJVYnVudHUiPlN1cmZhY2UgTm9ybWFsPC90ZXh0PjxwYXRoIGQ9Ik0xNjAsIDQxIHYtMzEgcTAsLTEwLDEwLC0xMCBoMjI0IHExMCwwLDEwLDEwIHYzMSBoLTI0NCIgZmlsbD0iIzUyNTE1MiI+PC9wYXRoPjx0ZXh0IHg9IjI0NSIgeT0iMjguNSIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0ibWVkaXVtIiBmb250LWZhbWlseT0iVWJ1bnR1Ij5SYXljYXN0PC90ZXh0Pjwvc3ZnPg=="}}]);
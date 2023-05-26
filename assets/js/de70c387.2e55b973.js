"use strict";(self.webpackChunkcircuits=self.webpackChunkcircuits||[]).push([[89291],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),u=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},c="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},I=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=u(a),I=r,m=c["".concat(s,".").concat(I)]||c[I]||p[I]||i;return a?n.createElement(m,l(l({ref:e},d),{},{components:a})):n.createElement(m,l({ref:e},d))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=I;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[c]="string"==typeof t?t:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}I.displayName="MDXCreateElement"},82005:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_position:540,tags:["Chip"]},l="Set Rotation",o={unversionedId:"documentation/chips/0a6f6078-8075-43c7-bbb2-32b63ae48e92",id:"documentation/chips/0a6f6078-8075-43c7-bbb2-32b63ae48e92",title:"Set Rotation",description:"Sets the rotation of the target player or object. Players will rotate about the vertical axis only. Will fail in the following cases: If the target object is currently held, select/frozen by the maker pen, or is the child of a gizmo. Will also fail on players that are seated.",source:"@site/docs/documentation/chips/0a6f6078-8075-43c7-bbb2-32b63ae48e92.mdx",sourceDirName:"documentation/chips",slug:"/documentation/chips/0a6f6078-8075-43c7-bbb2-32b63ae48e92",permalink:"/docs/documentation/chips/0a6f6078-8075-43c7-bbb2-32b63ae48e92",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation/chips/0a6f6078-8075-43c7-bbb2-32b63ae48e92.mdx",tags:[{label:"Chip",permalink:"/docs/tags/chip"}],version:"current",sidebarPosition:540,frontMatter:{sidebar_position:540,tags:["Chip"]},sidebar:"tutorialSidebar",previous:{title:"Set Position",permalink:"/docs/documentation/chips/6e68ede8-32de-455f-9449-83951b4e4f73"},next:{title:"Set Transform",permalink:"/docs/documentation/chips/6873f341-1ae8-4ddd-9f8c-892a977ef974"}},s={},u=[{value:"Uses",id:"uses",level:3},{value:"Tips",id:"tips",level:3},{value:"Issues",id:"issues",level:3}],d={toc:u},c="wrapper";function p(t){let{components:e,...i}=t;return(0,r.kt)(c,(0,n.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"set-rotation"},"Set Rotation"),(0,r.kt)("p",null,"Sets the rotation of the target player or object. Players will rotate about the vertical axis only. Will fail in the following cases: If the target object is currently held, select/frozen by the maker pen, or is the child of a gizmo. Will also fail on players that are seated."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:a(50318).Z,width:"800",height:"214"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Input Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Input Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"No name.")),(0,r.kt)("td",{parentName:"tr",align:null},"exec")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Target"),(0,r.kt)("td",{parentName:"tr",align:null},"Union(player , rec room object)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rotation"),(0,r.kt)("td",{parentName:"tr",align:null},"Union(vector3 , quaternion)")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Output Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Output Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"No name.")),(0,r.kt)("td",{parentName:"tr",align:null},"exec")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Success"),(0,r.kt)("td",{parentName:"tr",align:null},"bool")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Properties"),(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Is beta required?"),(0,r.kt)("th",null,"\u274c")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Is this chip a trolling risk?"),(0,r.kt)("th",null,"\u274c")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Chip UUID"),(0,r.kt)("th",null,"0a6f6078-8075-43c7-bbb2-32b63ae48e92"))))))),(0,r.kt)("h3",{id:"uses"},"Uses"),(0,r.kt)("p",null,"None so far!"),(0,r.kt)("h3",{id:"tips"},"Tips"),(0,r.kt)("p",null,"None so far!"),(0,r.kt)("h3",{id:"issues"},"Issues"),(0,r.kt)("p",null,"None so far!"))}p.isMDXComponent=!0},50318:(t,e,a)=>{a.d(e,{Z:()=>n});const n="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjIxMy41NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Ym94PSIwIDAgODAwIDIxMy41NCI+PHBhdGggZmlsbD0iIzgxODA4MSIgZD0iTTE2MCwgNDEgdjc2IHEwLDEwLDEwLDEwIGgxOTMuNTQgcTEwLDAsMTAsLTEwIHYtNzYgaDIxMy41NCI+PC9wYXRoPjxwYXRoIGQ9Ik0xNjUsNDloLTE2LjQ2NWMtMC41NTIsMCwtMSwwLjQ0OCwtMSwxdjE2YzAsMC41NTIsMC40NDgsMSwxLDFoMTYuNDY1YzAuMzM0LDAsMC42NDcsLTAuMTY3LDAuODMyLC0wLjQ0NWw1LjMzMywtOGMwLjIyNCwtMC4zMzYsMC4yMjQsLTAuNzc0LDAsLTEuMTFsLTUuMzMzLC04Yy0wLjE4NSwtMC4yNzgsLTAuNDk4LC0wLjQ0NSwtMC44MzIsLTAuNDQ1eiIgZmlsbD0iI0Y1NUMxQSI+PC9wYXRoPjx0ZXh0IHg9IjE3NiIgeT0iNjEuNSIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC1zaXplPSJtZWRpdW0iIGNsYXNzPSJ1d3VudHUiPjwvdGV4dD48cmVjdCB4PSIxNDgiIHk9IjczIiB3aWR0aD0iMjIiIGhlaWdodD0iMTUiIHJ4PSIxIiBmaWxsPSIjRjZFRUU4Ij48L3JlY3Q+PHRleHQgeD0iMTc2IiB5PSI4NS41IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXNpemU9Im1lZGl1bSIgY2xhc3M9InV3dW50dSI+VGFyZ2V0PC90ZXh0PjxyZWN0IHg9IjE0OCIgeT0iOTQiIHdpZHRoPSIyMiIgaGVpZ2h0PSIxNSIgcng9IjEiIGZpbGw9IiNGNkVFRTgiPjwvcmVjdD48dGV4dCB4PSIxNzYiIHk9IjEwNi41IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXNpemU9Im1lZGl1bSIgY2xhc3M9InV3dW50dSI+Um90YXRpb248L3RleHQ+PHBhdGggZD0iTTM4MC41Mzk5OTk5OTk5OTk5Niw0OWgtMTYuNDY1Yy0wLjU1MiwwLC0xLDAuNDQ4LC0xLDF2MTZjMCwwLjU1MiwwLjQ0OCwxLDEsMWgxNi40NjVjMC4zMzQsMCwwLjY0NywtMC4xNjcsMC44MzIsLTAuNDQ1bDUuMzMzLC04YzAuMjI0LC0wLjMzNiwwLjIyNCwtMC43NzQsMCwtMS4xMWwtNS4zMzMsLThjLTAuMTg1LC0wLjI3OCwtMC40OTgsLTAuNDQ1LC0wLjgzMiwtMC40NDV6IiBmaWxsPSIjRjU1QzFBIj48L3BhdGg+PHRleHQgeD0iMzU3LjUzOTk5OTk5OTk5OTk2IiB5PSI2MS41IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9ImVuZCIgZm9udC1zaXplPSJtZWRpdW0iIGNsYXNzPSJ1d3VudHUiPjwvdGV4dD48cmVjdCB4PSIzNjMuNTM5OTk5OTk5OTk5OTYiIHk9IjczIiB3aWR0aD0iMjIiIGhlaWdodD0iMTUiIHJ4PSIxIiBmaWxsPSIjRUEyRTUwIj48L3JlY3Q+PHRleHQgeD0iMzU3LjUzOTk5OTk5OTk5OTk2IiB5PSI4NS41IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9ImVuZCIgZm9udC1zaXplPSJtZWRpdW0iIGNsYXNzPSJ1d3VudHUiPlN1Y2Nlc3M8L3RleHQ+PHBhdGggZD0iTTE2MCwgNDEgdi0zMSBxMCwtMTAsMTAsLTEwIGgxOTMuNTQgcTEwLDAsMTAsMTAgdjMxIGgtMjEzLjU0IiBmaWxsPSIjNTI1MTUyIj48L3BhdGg+PHRleHQgeD0iMjY2Ljc3IiB5PSIyOS41IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxOHB4IiBjbGFzcz0iVXd1bnR1Ij5TZXQgUm90YXRpb248L3RleHQ+PC9zdmc+"}}]);
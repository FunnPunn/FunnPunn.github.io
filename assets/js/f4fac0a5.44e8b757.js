"use strict";(self.webpackChunkcircuits=self.webpackChunkcircuits||[]).push([[71330],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>m});var n=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var c=n.createContext({}),I=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=I(t.components);return n.createElement(c.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,c=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=I(a),s=i,m=d["".concat(c,".").concat(s)]||d[s]||u[s]||r;return a?n.createElement(m,l(l({ref:e},p),{},{components:a})):n.createElement(m,l({ref:e},p))}));function m(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,l=new Array(r);l[0]=s;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o[d]="string"==typeof t?t:i,l[1]=o;for(var I=2;I<r;I++)l[I]=a[I];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},56631:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>I});var n=a(87462),i=(a(67294),a(3905));const r={sidebar_position:292,tags:["Chip"]},l="Lerp",o={unversionedId:"documentation/chips/91b0ffa8-4eb1-4a30-aaf3-7a049071cb42",id:"documentation/chips/91b0ffa8-4eb1-4a30-aaf3-7a049071cb42",title:"Lerp",description:"Computes a linear interpolation. The interpolant is clamped between 0 and 1.",source:"@site/docs/documentation/chips/91b0ffa8-4eb1-4a30-aaf3-7a049071cb42.mdx",sourceDirName:"documentation/chips",slug:"/documentation/chips/91b0ffa8-4eb1-4a30-aaf3-7a049071cb42",permalink:"/docs/documentation/chips/91b0ffa8-4eb1-4a30-aaf3-7a049071cb42",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation/chips/91b0ffa8-4eb1-4a30-aaf3-7a049071cb42.mdx",tags:[{label:"Chip",permalink:"/docs/tags/chip"}],version:"current",sidebarPosition:292,frontMatter:{sidebar_position:292,tags:["Chip"]},sidebar:"tutorialSidebar",previous:{title:"Laser Pointer Set Length",permalink:"/docs/documentation/chips/085cb783-a29a-4e0e-93ba-c86b4bff4856"},next:{title:"Lerp Unclamped",permalink:"/docs/documentation/chips/6e9219ab-89d2-47e3-a105-562a9a1fddda"}},c={},I=[{value:"Uses",id:"uses",level:3},{value:"Tips",id:"tips",level:3},{value:"Issues",id:"issues",level:3}],p={toc:I},d="wrapper";function u(t){let{components:e,...r}=t;return(0,i.kt)(d,(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lerp"},"Lerp"),(0,i.kt)("p",null,"Computes a linear interpolation. The interpolant is clamped between 0 and 1."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example banner",src:a(67861).Z,width:"800",height:"150"})),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Input Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Input Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Start"),(0,i.kt)("td",{parentName:"tr",align:null},"Union(float , quaternion , vector3 , color)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"End"),(0,i.kt)("td",{parentName:"tr",align:null},"Union(float , quaternion , vector3 , color)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Progress"),(0,i.kt)("td",{parentName:"tr",align:null},"float")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Output Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Output Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Result"),(0,i.kt)("td",{parentName:"tr",align:null},"Union(float , quaternion , vector3 , color)")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Properties"),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Is beta required?"),(0,i.kt)("th",null,"\u274c")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"Is this chip a trolling risk?"),(0,i.kt)("th",null,"\u274c")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"Chip UUID"),(0,i.kt)("th",null,"91b0ffa8-4eb1-4a30-aaf3-7a049071cb42"))))))),(0,i.kt)("h3",{id:"uses"},"Uses"),(0,i.kt)("p",null,"None so far!"),(0,i.kt)("h3",{id:"tips"},"Tips"),(0,i.kt)("p",null,"None so far!"),(0,i.kt)("h3",{id:"issues"},"Issues"),(0,i.kt)("p",null,"None so far!"))}u.isMDXComponent=!0},67861:(t,e,a)=>{a.d(e,{Z:()=>n});const n="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjE1MC4xOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Ym94PSIwIDAgODAwIDE1MC4xOCI+PHBhdGggZmlsbD0iIzgxODA4MSIgZD0iTTE2MCwgNDEgdjc2IHEwLDEwLDEwLDEwIGgxMzAuMTggcTEwLDAsMTAsLTEwIHYtNzYgaDE1MC4xOCI+PC9wYXRoPjxyZWN0IHg9IjE0OCIgeT0iNDkiIHdpZHRoPSIyMiIgaGVpZ2h0PSIxNSIgcng9IjEiIGZpbGw9IiNGNkVFRTgiPjwvcmVjdD48dGV4dCB4PSIxNzYiIHk9IjYxLjUiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtc2l6ZT0ibWVkaXVtIiBjbGFzcz0idXd1bnR1Ij5TdGFydDwvdGV4dD48cmVjdCB4PSIxNDgiIHk9IjcwIiB3aWR0aD0iMjIiIGhlaWdodD0iMTUiIHJ4PSIxIiBmaWxsPSIjRjZFRUU4Ij48L3JlY3Q+PHRleHQgeD0iMTc2IiB5PSI4Mi41IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXNpemU9Im1lZGl1bSIgY2xhc3M9InV3dW50dSI+RW5kPC90ZXh0PjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2RpXzI1NTZfMTkxMzIpIj48cmVjdCB4PSIxNDgiIHk9IjkxIiB3aWR0aD0iMjIiIGhlaWdodD0iMTUiIHJ4PSIxIiBmaWxsPSIjMTg2QkREIj48L3JlY3Q+PC9nPjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIxX2RpXzI1NTZfMTkxMzIpIj48cmVjdCB4PSI5NCIgeT0iODciIHdpZHRoPSI0NSIgaGVpZ2h0PSIyMyIgcng9IjEiIGZpbGw9IiMxODZCREQiPjwvcmVjdD48cmVjdCB4PSI5OCIgeT0iOTEuMDAxIiB3aWR0aD0iMzciIGhlaWdodD0iMTUiIHJ4PSIxIiBmaWxsPSIjODE4MDgxIj48L3JlY3Q+PC9nPjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIyX2RpXzI1NTZfMTkxMzIpIj48cmVjdCB4PSIxMzkiIHk9Ijk1IiB3aWR0aD0iOSIgaGVpZ2h0PSI3IiBmaWxsPSIjMTg2QkREIj48L3JlY3Q+PC9nPjx0ZXh0IHg9IjE3NiIgeT0iMTAzLjUiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtc2l6ZT0ibWVkaXVtIiBjbGFzcz0idXd1bnR1Ij5Qcm9ncmVzczwvdGV4dD48cmVjdCB4PSIzMDAuMTgiIHk9IjQ5IiB3aWR0aD0iMjIiIGhlaWdodD0iMTUiIHJ4PSIxIiBmaWxsPSIjRjZFRUU4Ij48L3JlY3Q+PHRleHQgeD0iMjk0LjE4IiB5PSI2MS41IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9ImVuZCIgZm9udC1zaXplPSJtZWRpdW0iIGNsYXNzPSJ1d3VudHUiPlJlc3VsdDwvdGV4dD48cGF0aCBkPSJNMTYwLCA0MSB2LTMxIHEwLC0xMCwxMCwtMTAgaDEzMC4xOCBxMTAsMCwxMCwxMCB2MzEgaC0xNTAuMTgiIGZpbGw9IiM1MjUxNTIiPjwvcGF0aD48dGV4dCB4PSIyMzUuMDkiIHk9IjI5LjUiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjE4cHgiIGNsYXNzPSJVd3VudHUiPkxlcnA8L3RleHQ+PC9zdmc+"}}]);
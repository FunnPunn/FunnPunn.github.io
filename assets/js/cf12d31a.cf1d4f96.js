"use strict";(self.webpackChunkcircuits=self.webpackChunkcircuits||[]).push([[90075],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),c=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=c(t.components);return a.createElement(u.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,u=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),p=c(n),k=r,m=p["".concat(u,".").concat(k)]||p[k]||d[k]||i;return n?a.createElement(m,l(l({ref:e},s),{},{components:n})):a.createElement(m,l({ref:e},s))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o[p]="string"==typeof t?t:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},13850:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:464,tags:["Chip"]},l="Quaternion Euler Angles",o={unversionedId:"documentation/chips/81048ea5-2778-4816-99c5-1c50faad8a87",id:"documentation/chips/81048ea5-2778-4816-99c5-1c50faad8a87",title:"Quaternion Euler Angles",description:"Outputs the input quaternion as a vector3.",source:"@site/docs/documentation/chips/81048ea5-2778-4816-99c5-1c50faad8a87.mdx",sourceDirName:"documentation/chips",slug:"/documentation/chips/81048ea5-2778-4816-99c5-1c50faad8a87",permalink:"/docs/documentation/chips/81048ea5-2778-4816-99c5-1c50faad8a87",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation/chips/81048ea5-2778-4816-99c5-1c50faad8a87.mdx",tags:[{label:"Chip",permalink:"/docs/tags/chip"}],version:"current",sidebarPosition:464,frontMatter:{sidebar_position:464,tags:["Chip"]},sidebar:"tutorialSidebar",previous:{title:"Quaternion Dot",permalink:"/docs/documentation/chips/268d931e-172b-48e8-8eb8-8ec2a9614f0d"},next:{title:"Quaternion Get Angle Axis",permalink:"/docs/documentation/chips/b415c3ce-5f9f-472b-8d70-daeb728b7c2d"}},u={},c=[{value:"Uses",id:"uses",level:3},{value:"Tips",id:"tips",level:3},{value:"Issues",id:"issues",level:3}],s={toc:c},p="wrapper";function d(t){let{components:e,...i}=t;return(0,r.kt)(p,(0,a.Z)({},s,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quaternion-euler-angles"},"Quaternion Euler Angles"),(0,r.kt)("p",null,"Outputs the input quaternion as a vector3."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:n(86331).Z,width:"800",height:"311"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Input Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Input Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Value"),(0,r.kt)("td",{parentName:"tr",align:null},"quaternion")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Output Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Output Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"vector3")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Properties"),(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Is beta required?"),(0,r.kt)("th",null,"\u274c")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Is this chip a trolling risk?"),(0,r.kt)("th",null,"\u274c")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Chip UUID"),(0,r.kt)("th",null,"81048ea5-2778-4816-99c5-1c50faad8a87"))))))),(0,r.kt)("h3",{id:"uses"},"Uses"),(0,r.kt)("p",null,"None so far!"),(0,r.kt)("h3",{id:"tips"},"Tips"),(0,r.kt)("p",null,"None so far!"),(0,r.kt)("h3",{id:"issues"},"Issues"),(0,r.kt)("p",null,"None so far!"))}d.isMDXComponent=!0},86331:(t,e,n)=>{n.d(e,{Z:()=>a});const a="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjMxMC45MTk5OTk5OTk5OTk5NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Ym94PSIwIDAgODAwIDMxMC45MTk5OTk5OTk5OTk5NiI+PHBhdGggZmlsbD0iIzgxODA4MSIgZD0iTTE2MCwgNDEgdjI2IHEwLDEwLDEwLDEwIGgyOTAuOTE5OTk5OTk5OTk5OTYgcTEwLDAsMTAsLTEwIHYtMjYgaDMxMC45MTk5OTk5OTk5OTk5NiI+PC9wYXRoPjxyZWN0IHg9IjE0OCIgeT0iNDkiIHdpZHRoPSIyMiIgaGVpZ2h0PSIxNSIgcng9IjEiIGZpbGw9IiNGNUM1MUYiPjwvcmVjdD48dGV4dCB4PSIxNzYiIHk9IjYxLjUiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtc2l6ZT0ibWVkaXVtIiBjbGFzcz0idXd1bnR1Ij5WYWx1ZTwvdGV4dD48cmVjdCB4PSI0NjAuOTE5OTk5OTk5OTk5OTYiIHk9IjQ5IiB3aWR0aD0iMjIiIGhlaWdodD0iMTUiIHJ4PSIxIiBmaWxsPSIjRjVDNTFGIj48L3JlY3Q+PHRleHQgeD0iNDU0LjkxOTk5OTk5OTk5OTk2IiB5PSI2MS41IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9ImVuZCIgZm9udC1zaXplPSJtZWRpdW0iIGNsYXNzPSJ1d3VudHUiPlJlc3VsdDwvdGV4dD48cGF0aCBkPSJNMTYwLCA0MSB2LTMxIHEwLC0xMCwxMCwtMTAgaDI5MC45MTk5OTk5OTk5OTk5NiBxMTAsMCwxMCwxMCB2MzEgaC0zMTAuOTE5OTk5OTk5OTk5OTYiIGZpbGw9IiM1MjUxNTIiPjwvcGF0aD48dGV4dCB4PSIzMTUuNDYiIHk9IjI5LjUiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjE4cHgiIGNsYXNzPSJVd3VudHUiPlF1YXRlcm5pb24gRXVsZXIgQW5nbGVzPC90ZXh0Pjwvc3ZnPg=="}}]);
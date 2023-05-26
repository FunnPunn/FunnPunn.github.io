"use strict";(self.webpackChunkcircuits=self.webpackChunkcircuits||[]).push([[92127],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,k=u["".concat(c,".").concat(b)]||u[b]||d[b]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},60755:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_position:115,tags:["Chip"]},i="Get All Players (Deprecated)",o={unversionedId:"documentation/chips/09b0bf5b-95df-474b-b81a-4e8e2c78ed0a",id:"documentation/chips/09b0bf5b-95df-474b-b81a-4e8e2c78ed0a",title:"Get All Players (Deprecated)",description:"Outputs a list of all the players in the room currently.",source:"@site/docs/documentation/chips/09b0bf5b-95df-474b-b81a-4e8e2c78ed0a.mdx",sourceDirName:"documentation/chips",slug:"/documentation/chips/09b0bf5b-95df-474b-b81a-4e8e2c78ed0a",permalink:"/docs/documentation/chips/09b0bf5b-95df-474b-b81a-4e8e2c78ed0a",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation/chips/09b0bf5b-95df-474b-b81a-4e8e2c78ed0a.mdx",tags:[{label:"Chip",permalink:"/docs/tags/chip"}],version:"current",sidebarPosition:115,frontMatter:{sidebar_position:115,tags:["Chip"]},sidebar:"tutorialSidebar",previous:{title:"Delay",permalink:"/docs/documentation/chips/cefee2a5-d4a8-4dff-8c4e-bad684ca8d34"},next:{title:"Destination Room Variable",permalink:"/docs/documentation/chips/31eab00d-a6f7-4505-9f84-02d3e1eedd86"}},c={},s=[{value:"Uses",id:"uses",level:3},{value:"Tips",id:"tips",level:3},{value:"Issues",id:"issues",level:3}],p={toc:s},u="wrapper";function d(e){let{components:t,...l}=e;return(0,r.kt)(u,(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"get-all-players-deprecated"},"Get All Players (Deprecated)"),(0,r.kt)("p",null,"Outputs a list of all the players in the room currently."),(0,r.kt)("admonition",{title:"DEPRECATED",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"This chip has been deprecated. Please move to a different chip.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:n(97482).Z,width:"800",height:"344"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Input Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Input Type")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Output Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Output Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Players"),(0,r.kt)("td",{parentName:"tr",align:null},"List","[player]")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Properties"),(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Is beta required?"),(0,r.kt)("th",null,"\u274c")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Is this chip a trolling risk?"),(0,r.kt)("th",null,"\u274c")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Chip UUID"),(0,r.kt)("th",null,"09b0bf5b-95df-474b-b81a-4e8e2c78ed0a"))))))),(0,r.kt)("h3",{id:"uses"},"Uses"),(0,r.kt)("p",null,"None so far!"),(0,r.kt)("h3",{id:"tips"},"Tips"),(0,r.kt)("p",null,"None so far!"),(0,r.kt)("h3",{id:"issues"},"Issues"),(0,r.kt)("p",null,"None so far!"))}d.isMDXComponent=!0},97482:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjM0My42Nzk5OTk5OTk5OTk5NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Ym94PSIwIDAgODAwIDM0My42Nzk5OTk5OTk5OTk5NSI+PHBhdGggZmlsbD0iIzgxODA4MSIgZD0iTTE2MCwgNDEgdjI2IHEwLDEwLDEwLDEwIGgzMjMuNjc5OTk5OTk5OTk5OTUgcTEwLDAsMTAsLTEwIHYtMjYgaDM0My42Nzk5OTk5OTk5OTk5NSI+PC9wYXRoPjxyZWN0IHg9IjQ5My42Nzk5OTk5OTk5OTk5NSIgeT0iNDkiIHdpZHRoPSIyMiIgaGVpZ2h0PSIxNSIgcng9IjEiIGZpbGw9IiNGNUM1MUYiPjwvcmVjdD48dGV4dCB4PSI0ODcuNjc5OTk5OTk5OTk5OTUiIHk9IjYxLjUiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0iZW5kIiBmb250LXNpemU9Im1lZGl1bSIgY2xhc3M9InV3dW50dSI+UGxheWVyczwvdGV4dD48cGF0aCBkPSJNMTYwLCA0MSB2LTMxIHEwLC0xMCwxMCwtMTAgaDMyMy42Nzk5OTk5OTk5OTk5NSBxMTAsMCwxMCwxMCB2MzEgaC0zNDMuNjc5OTk5OTk5OTk5OTUiIGZpbGw9IiM1MjUxNTIiPjwvcGF0aD48dGV4dCB4PSIzMzEuODQiIHk9IjI5LjUiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjE4cHgiIGNsYXNzPSJVd3VudHUiPkdldCBBbGwgUGxheWVycyAoRGVwcmVjYXRlZCk8L3RleHQ+PC9zdmc+"}}]);
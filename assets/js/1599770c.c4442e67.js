"use strict";(self.webpackChunkcircuits=self.webpackChunkcircuits||[]).push([[93690],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),d=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},I="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),I=d(a),u=r,m=I["".concat(s,".").concat(u)]||I[u]||p[u]||i;return a?n.createElement(m,l(l({ref:e},c),{},{components:a})):n.createElement(m,l({ref:e},c))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[I]="string"==typeof t?t:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},87483:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_position:371,tags:["Chip"]},l="Parse Color",o={unversionedId:"documentation/chips/7a36c4b7-fb89-4ddc-a3b2-bff8597f7b17",id:"documentation/chips/7a36c4b7-fb89-4ddc-a3b2-bff8597f7b17",title:"Parse Color",description:"Attempt to parse the given string as a hexadecimal color in the '#RRGGBB' format.",source:"@site/docs/documentation/chips/7a36c4b7-fb89-4ddc-a3b2-bff8597f7b17.mdx",sourceDirName:"documentation/chips",slug:"/documentation/chips/7a36c4b7-fb89-4ddc-a3b2-bff8597f7b17",permalink:"/docs/documentation/chips/7a36c4b7-fb89-4ddc-a3b2-bff8597f7b17",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation/chips/7a36c4b7-fb89-4ddc-a3b2-bff8597f7b17.mdx",tags:[{label:"Chip",permalink:"/docs/tags/chip"}],version:"current",sidebarPosition:371,frontMatter:{sidebar_position:371,tags:["Chip"]},sidebar:"tutorialSidebar",previous:{title:"Parse Bool",permalink:"/docs/documentation/chips/92c05ebc-1967-49a4-94b5-2d01fe1e6b85"},next:{title:"Parse Float",permalink:"/docs/documentation/chips/5e25f40a-2b8c-4327-a89c-7a749838da7d"}},s={},d=[{value:"Uses",id:"uses",level:3},{value:"Tips",id:"tips",level:3},{value:"Issues",id:"issues",level:3}],c={toc:d},I="wrapper";function p(t){let{components:e,...i}=t;return(0,r.kt)(I,(0,n.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"parse-color"},"Parse Color"),(0,r.kt)("p",null,"Attempt to parse the given string as a hexadecimal color in the '#RRGGBB' format."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:a(19706).Z,width:"800",height:"209"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Input Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Input Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"string")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Output Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Output Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"color")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Parse Success"),(0,r.kt)("td",{parentName:"tr",align:null},"bool")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Properties"),(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Is beta required?"),(0,r.kt)("th",null,"\u274c")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Is this chip a trolling risk?"),(0,r.kt)("th",null,"\u274c")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Chip UUID"),(0,r.kt)("th",null,"7a36c4b7-fb89-4ddc-a3b2-bff8597f7b17"))))))),(0,r.kt)("h3",{id:"uses"},"Uses"),(0,r.kt)("p",null,"None so far!"),(0,r.kt)("h3",{id:"tips"},"Tips"),(0,r.kt)("p",null,"None so far!"),(0,r.kt)("h3",{id:"issues"},"Issues"),(0,r.kt)("p",null,"None so far!"))}p.isMDXComponent=!0},19706:(t,e,a)=>{a.d(e,{Z:()=>n});const n="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjIwOS4yMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Ym94PSIwIDAgODAwIDIwOS4yMiI+PHBhdGggZmlsbD0iIzgxODA4MSIgZD0iTTE2MCwgNDEgdjUxIHEwLDEwLDEwLDEwIGgxODkuMjIgcTEwLDAsMTAsLTEwIHYtNTEgaDIwOS4yMiI+PC9wYXRoPjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2RpXzI1NTZfMTkxMzIpIj48cmVjdCB4PSIxNDgiIHk9IjQ5IiB3aWR0aD0iMjIiIGhlaWdodD0iMTUiIHJ4PSIxIiBmaWxsPSIjNzg0MjgzIj48L3JlY3Q+PC9nPjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIxX2RpXzI1NTZfMTkxMzIpIj48cmVjdCB4PSI5NCIgeT0iNDUiIHdpZHRoPSI0NSIgaGVpZ2h0PSIyMyIgcng9IjEiIGZpbGw9IiM3ODQyODMiPjwvcmVjdD48cmVjdCB4PSI5OCIgeT0iNDkuMDAxIiB3aWR0aD0iMzciIGhlaWdodD0iMTUiIHJ4PSIxIiBmaWxsPSIjODE4MDgxIj48L3JlY3Q+PC9nPjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIyX2RpXzI1NTZfMTkxMzIpIj48cmVjdCB4PSIxMzkiIHk9IjUzIiB3aWR0aD0iOSIgaGVpZ2h0PSI3IiBmaWxsPSIjNzg0MjgzIj48L3JlY3Q+PC9nPjx0ZXh0IHg9IjE3NiIgeT0iNjEuNSIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC1zaXplPSJtZWRpdW0iIGNsYXNzPSJ1d3VudHUiPlN0cmluZzwvdGV4dD48cmVjdCB4PSIzNTkuMjIiIHk9IjQ5IiB3aWR0aD0iMjIiIGhlaWdodD0iMTUiIHJ4PSIxIiBmaWxsPSIjMDA0RkI5Ij48L3JlY3Q+PHRleHQgeD0iMzUzLjIyIiB5PSI2MS41IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9ImVuZCIgZm9udC1zaXplPSJtZWRpdW0iIGNsYXNzPSJ1d3VudHUiPlJlc3VsdDwvdGV4dD48cmVjdCB4PSIzNTkuMjIiIHk9IjcwIiB3aWR0aD0iMjIiIGhlaWdodD0iMTUiIHJ4PSIxIiBmaWxsPSIjRUEyRTUwIj48L3JlY3Q+PHRleHQgeD0iMzUzLjIyIiB5PSI4Mi41IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9ImVuZCIgZm9udC1zaXplPSJtZWRpdW0iIGNsYXNzPSJ1d3VudHUiPlBhcnNlIFN1Y2Nlc3M8L3RleHQ+PHBhdGggZD0iTTE2MCwgNDEgdi0zMSBxMCwtMTAsMTAsLTEwIGgxODkuMjIgcTEwLDAsMTAsMTAgdjMxIGgtMjA5LjIyIiBmaWxsPSIjNTI1MTUyIj48L3BhdGg+PHRleHQgeD0iMjY0LjYxIiB5PSIyOS41IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxOHB4IiBjbGFzcz0iVXd1bnR1Ij5QYXJzZSBDb2xvcjwvdGV4dD48L3N2Zz4="}}]);
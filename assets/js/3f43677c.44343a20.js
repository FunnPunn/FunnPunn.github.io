"use strict";(self.webpackChunkcircuits=self.webpackChunkcircuits||[]).push([[44719],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),b=a,m=c["".concat(p,".").concat(b)]||c[b]||d[b]||l;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},80024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={sidebar_position:363,tags:["Chip"]},o="Noise",i={unversionedId:"documentation/chips/06f8732b-b1cb-4b79-815e-5b389c1dd78f",id:"documentation/chips/06f8732b-b1cb-4b79-815e-5b389c1dd78f",title:"Noise",description:"Samples a 3D Perlin noise field and returns a value usually bounded in [0,1].",source:"@site/docs/documentation/chips/06f8732b-b1cb-4b79-815e-5b389c1dd78f.md",sourceDirName:"documentation/chips",slug:"/documentation/chips/06f8732b-b1cb-4b79-815e-5b389c1dd78f",permalink:"/docs/documentation/chips/06f8732b-b1cb-4b79-815e-5b389c1dd78f",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation/chips/06f8732b-b1cb-4b79-815e-5b389c1dd78f.md",tags:[{label:"Chip",permalink:"/docs/tags/chip"}],version:"current",sidebarPosition:363,frontMatter:{sidebar_position:363,tags:["Chip"]},sidebar:"tutorialSidebar",previous:{title:"Nand",permalink:"/docs/documentation/chips/502e86d1-5b3a-4213-97e2-df25836ffcc4"},next:{title:"Nor",permalink:"/docs/documentation/chips/2891bcb4-a6ab-4a2e-a08d-dd2a55f1cf66"}},p={},s=[{value:"Ports:",id:"ports",level:2},{value:"Properties:",id:"properties",level:2},{value:"Uses",id:"uses",level:3},{value:"Issues",id:"issues",level:3},{value:"Tips",id:"tips",level:3}],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"noise"},"Noise"),(0,a.kt)("p",null,"Samples a 3D Perlin noise field and returns a value usually bounded in ","[0,1]","."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"image coming soon\n")),(0,a.kt)("p",null,"|-----|"),(0,a.kt)("h2",{id:"ports"},"Ports:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Input Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Input Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Point"),(0,a.kt)("td",{parentName:"tr",align:null},"vector3")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Output Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Output Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Result"),(0,a.kt)("td",{parentName:"tr",align:null},"float")))),(0,a.kt)("h2",{id:"properties"},"Properties:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Is Trolling Risk?"),(0,a.kt)("td",{parentName:"tr",align:null},"No.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Is Beta?"),(0,a.kt)("td",{parentName:"tr",align:null},"No.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Chip UUID"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"06f8732b-b1cb-4b79-815e-5b389c1dd78f"))))),(0,a.kt)("h3",{id:"uses"},"Uses"),(0,a.kt)("p",null,"None so far!"),(0,a.kt)("h3",{id:"issues"},"Issues"),(0,a.kt)("p",null,"None so far!"),(0,a.kt)("h3",{id:"tips"},"Tips"),(0,a.kt)("p",null,"None so far!"))}d.isMDXComponent=!0}}]);
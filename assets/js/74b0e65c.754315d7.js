"use strict";(self.webpackChunkcircuits=self.webpackChunkcircuits||[]).push([[28471],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96763:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={sidebar_position:539,tags:["Chip"]},o="Set Position",i={unversionedId:"documentation/chips/6e68ede8-32de-455f-9449-83951b4e4f73",id:"documentation/chips/6e68ede8-32de-455f-9449-83951b4e4f73",title:"Set Position",description:"Sets the position of the target player or object. Will fail in the following cases: If the target object is currently held, select/frozen by the maker pen, or is the child of a gizmo. Will also fail on players that are seated.",source:"@site/docs/documentation/chips/6e68ede8-32de-455f-9449-83951b4e4f73.mdx",sourceDirName:"documentation/chips",slug:"/documentation/chips/6e68ede8-32de-455f-9449-83951b4e4f73",permalink:"/docs/documentation/chips/6e68ede8-32de-455f-9449-83951b4e4f73",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation/chips/6e68ede8-32de-455f-9449-83951b4e4f73.mdx",tags:[{label:"Chip",permalink:"/docs/tags/chip"}],version:"current",sidebarPosition:539,frontMatter:{sidebar_position:539,tags:["Chip"]},sidebar:"tutorialSidebar",previous:{title:"Set Position (Deprecated)",permalink:"/docs/documentation/chips/ff1c2a15-4099-4aaa-afe3-c217b2fca15b"},next:{title:"Set Rotation",permalink:"/docs/documentation/chips/0a6f6078-8075-43c7-bbb2-32b63ae48e92"}},s={},p=[{value:"Uses",id:"uses",level:3},{value:"Tips",id:"tips",level:3},{value:"Issues",id:"issues",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"set-position"},"Set Position"),(0,a.kt)("p",null,"Sets the position of the target player or object. Will fail in the following cases: If the target object is currently held, select/frozen by the maker pen, or is the child of a gizmo. Will also fail on players that are seated."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Input Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Input Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"No name.")),(0,a.kt)("td",{parentName:"tr",align:null},"exec")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Target"),(0,a.kt)("td",{parentName:"tr",align:null},"Union(player , rec room object)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Position"),(0,a.kt)("td",{parentName:"tr",align:null},"vector3")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Output Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Output Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"No name.")),(0,a.kt)("td",{parentName:"tr",align:null},"exec")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Success"),(0,a.kt)("td",{parentName:"tr",align:null},"bool")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Properties"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Is beta required?"),(0,a.kt)("th",null,"\u274c")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Is this chip a trolling risk?"),(0,a.kt)("th",null,"\u274c")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Chip UUPD"),(0,a.kt)("th",null,"6e68ede8-32de-455f-9449-83951b4e4f73"))))))),(0,a.kt)("h3",{id:"uses"},"Uses"),(0,a.kt)("p",null,"None so far!"),(0,a.kt)("h3",{id:"tips"},"Tips"),(0,a.kt)("p",null,"None so far!"),(0,a.kt)("h3",{id:"issues"},"Issues"),(0,a.kt)("p",null,"None so far!"))}d.isMDXComponent=!0}}]);
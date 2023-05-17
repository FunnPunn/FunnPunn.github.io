"use strict";(self.webpackChunkcircuits=self.webpackChunkcircuits||[]).push([[51171],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(k,l(l({ref:t},s),{},{components:a})):n.createElement(k,l({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},99437:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_position:46,tags:["Chip"]},l="Award Room Key",i={unversionedId:"documentation/chips/7e40f770-c9a4-4233-8845-cac6ec99ae67",id:"documentation/chips/7e40f770-c9a4-4233-8845-cac6ec99ae67",title:"Award Room Key",description:'This is a beta chip! To enable beta, go to "This Room" on your watch -> Settings -> Allow Creative Tools Beta Content.',source:"@site/docs/documentation/chips/7e40f770-c9a4-4233-8845-cac6ec99ae67.md",sourceDirName:"documentation/chips",slug:"/documentation/chips/7e40f770-c9a4-4233-8845-cac6ec99ae67",permalink:"/docs/documentation/chips/7e40f770-c9a4-4233-8845-cac6ec99ae67",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation/chips/7e40f770-c9a4-4233-8845-cac6ec99ae67.md",tags:[{label:"Chip",permalink:"/docs/tags/chip"}],version:"current",sidebarPosition:46,frontMatter:{sidebar_position:46,tags:["Chip"]},sidebar:"tutorialSidebar",previous:{title:"Award Currency",permalink:"/docs/documentation/chips/03461631-734f-491b-ab86-6bdf66947556"},next:{title:"Background Objects Constant",permalink:"/docs/documentation/chips/c6e9ffef-b505-41d3-bb2d-ff86838398c6"}},p={},c=[{value:"Ports:",id:"ports",level:2},{value:"Properties:",id:"properties",level:2},{value:"Uses",id:"uses",level:3},{value:"Issues",id:"issues",level:3},{value:"Tips",id:"tips",level:3}],s={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"award-room-key"},"Award Room Key"),(0,r.kt)("admonition",{title:"Beta Notice",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'This is a beta chip! To enable beta, go to "This Room" on your watch -> Settings -> Allow Creative Tools Beta Content.')),(0,r.kt)("p",null,"Unlocks a room key for the target player. Multiple award room key requests from the same client are sent in bulk with a one-second cooldown.\nThe Success port will be TRUE if the key was successfully unlocked for the player or if the player previously owned the key. If the key could not be awarded the Success port will be FALSE.\nUse the Log Output toggle in the configuration settings to see more information about why a failure occurred. Logging output may impact room performance and should be toggled off when not in use."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"image coming soon\n")),(0,r.kt)("p",null,"|-----|"),(0,r.kt)("h2",{id:"ports"},"Ports:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Input Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Input Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"No name.")),(0,r.kt)("td",{parentName:"tr",align:null},"exec")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Room Key"),(0,r.kt)("td",{parentName:"tr",align:null},"room key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Player"),(0,r.kt)("td",{parentName:"tr",align:null},"player")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Output Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Output Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"No name.")),(0,r.kt)("td",{parentName:"tr",align:null},"exec")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"On Award Room Key Complete"),(0,r.kt)("td",{parentName:"tr",align:null},"exec")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Success"),(0,r.kt)("td",{parentName:"tr",align:null},"bool")))),(0,r.kt)("h2",{id:"properties"},"Properties:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Is Trolling Risk?"),(0,r.kt)("td",{parentName:"tr",align:null},"No.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Is Beta?"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Chip UUID"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"7e40f770-c9a4-4233-8845-cac6ec99ae67"))))),(0,r.kt)("h3",{id:"uses"},"Uses"),(0,r.kt)("p",null,"None so far!"),(0,r.kt)("h3",{id:"issues"},"Issues"),(0,r.kt)("p",null,"None so far!"),(0,r.kt)("h3",{id:"tips"},"Tips"),(0,r.kt)("p",null,"None so far!"))}d.isMDXComponent=!0}}]);
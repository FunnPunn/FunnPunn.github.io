"use strict";(self.webpackChunkcircuits=self.webpackChunkcircuits||[]).push([[33742],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},p="mdxType",b={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(c,".").concat(d)]||p[d]||b[d]||i;return n?r.createElement(f,o(o({ref:e},u),{},{components:n})):r.createElement(f,o({ref:e},u))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[p]="string"==typeof t?t:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89511:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>b,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:9,tags:["Chip"]},o="AI Has Line of Sight To Target",l={unversionedId:"documentation/chips/5858a52e-54fb-4bb2-80a0-ec5fce88b3ef",id:"documentation/chips/5858a52e-54fb-4bb2-80a0-ec5fce88b3ef",title:"AI Has Line of Sight To Target",description:"Outputs if the input AI has line of sight to the input target.",source:"@site/docs/documentation/chips/5858a52e-54fb-4bb2-80a0-ec5fce88b3ef.mdx",sourceDirName:"documentation/chips",slug:"/documentation/chips/5858a52e-54fb-4bb2-80a0-ec5fce88b3ef",permalink:"/docs/documentation/chips/5858a52e-54fb-4bb2-80a0-ec5fce88b3ef",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation/chips/5858a52e-54fb-4bb2-80a0-ec5fce88b3ef.mdx",tags:[{label:"Chip",permalink:"/docs/tags/chip"}],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,tags:["Chip"]},sidebar:"tutorialSidebar",previous:{title:"AI Get Target",permalink:"/docs/documentation/chips/1637b250-e497-4f4a-9d5e-64206488391c"},next:{title:"AI Look At",permalink:"/docs/documentation/chips/b5badf49-acfe-4a42-80e2-5262878e2d89"}},c={},s=[{value:"Uses",id:"uses",level:3},{value:"Tips",id:"tips",level:3},{value:"Issues",id:"issues",level:3}],u={toc:s},p="wrapper";function b(t){let{components:e,...n}=t;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ai-has-line-of-sight-to-target"},"AI Has Line of Sight To Target"),(0,a.kt)("p",null,"Outputs if the input AI has line of sight to the input target."),(0,a.kt)("admonition",{title:"BETA",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},'This chip requires beta content to be enabled in the room. You can access the setting in "This Room -> Settings".')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Input Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Input Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AI"),(0,a.kt)("td",{parentName:"tr",align:null},"ai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Target"),(0,a.kt)("td",{parentName:"tr",align:null},"Union(ai , combatant , rec room object , patrol point , player , vector3)")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Output Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Output Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Has LoS"),(0,a.kt)("td",{parentName:"tr",align:null},"bool")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Properties"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Is beta required?"),(0,a.kt)("th",null,"\u2705")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Is this chip a trolling risk?"),(0,a.kt)("th",null,"\u274c")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Chip UUPD"),(0,a.kt)("th",null,"5858a52e-54fb-4bb2-80a0-ec5fce88b3ef"))))))),(0,a.kt)("h3",{id:"uses"},"Uses"),(0,a.kt)("p",null,"None so far!"),(0,a.kt)("h3",{id:"tips"},"Tips"),(0,a.kt)("p",null,"None so far!"),(0,a.kt)("h3",{id:"issues"},"Issues"),(0,a.kt)("p",null,"None so far!"))}b.isMDXComponent=!0}}]);
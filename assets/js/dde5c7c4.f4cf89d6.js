"use strict";(self.webpackChunkcircuits=self.webpackChunkcircuits||[]).push([[8839],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),p=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(a),m=n,b=c["".concat(u,".").concat(m)]||c[m]||d[m]||l;return a?r.createElement(b,o(o({ref:t},s),{},{components:a})):r.createElement(b,o({ref:t},s))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},59134:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={sidebar_position:44,tags:["Chip"]},o="Award Consumable",i={unversionedId:"documentation/chips/9ceb3e5a-2030-4034-98a4-dc2809828b63",id:"documentation/chips/9ceb3e5a-2030-4034-98a4-dc2809828b63",title:"Award Consumable",description:"Award a room consumable to a player. Multiple award room consumable requests from the same client are sent in bulk with a ten-second cooldown. The Success port will be TRUE if the consumable was entirely, or in part, awarded to the player. If the consumable could not be awarded, the Success port will be FALSE. Use the Log Output toggle in the configuration settings to see more information about why a failure occurred. Logging output may impact room performance and should be toggled off when not in use.",source:"@site/docs/documentation/chips/9ceb3e5a-2030-4034-98a4-dc2809828b63.md",sourceDirName:"documentation/chips",slug:"/documentation/chips/9ceb3e5a-2030-4034-98a4-dc2809828b63",permalink:"/docs/documentation/chips/9ceb3e5a-2030-4034-98a4-dc2809828b63",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation/chips/9ceb3e5a-2030-4034-98a4-dc2809828b63.md",tags:[{label:"Chip",permalink:"/docs/tags/chip"}],version:"current",sidebarPosition:44,frontMatter:{sidebar_position:44,tags:["Chip"]},sidebar:"tutorialSidebar",previous:{title:"Audio Player Stop",permalink:"/docs/documentation/chips/f6c546cc-becd-44cc-999b-bf2031b5f737"},next:{title:"Award Currency",permalink:"/docs/documentation/chips/03461631-734f-491b-ab86-6bdf66947556"}},u={},p=[{value:"Ports:",id:"ports",level:2},{value:"Properties:",id:"properties",level:2},{value:"Uses",id:"uses",level:3},{value:"Issues",id:"issues",level:3},{value:"Tips",id:"tips",level:3}],s={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"award-consumable"},"Award Consumable"),(0,n.kt)("p",null,"Award a room consumable to a player. Multiple award room consumable requests from the same client are sent in bulk with a ten-second cooldown. The Success port will be TRUE if the consumable was entirely, or in part, awarded to the player. If the consumable could not be awarded, the Success port will be FALSE. Use the Log Output toggle in the configuration settings to see more information about why a failure occurred. Logging output may impact room performance and should be toggled off when not in use."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"th",src:"https://images-ext-2.discordapp.net/external/MPmIaQzlEPmgGWlgi-WxBBXt0Bjv_zWPkg1y1f_sy3s/https/www.recroomcircuits.com/image/circuit/absolute-value?width=206&height=108",alt:null}))))),(0,n.kt)("h2",{id:"ports"},"Ports:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Input Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Input Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"No name.")),(0,n.kt)("td",{parentName:"tr",align:null},"exec")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Consumable"),(0,n.kt)("td",{parentName:"tr",align:null},"consumable")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Player"),(0,n.kt)("td",{parentName:"tr",align:null},"player")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Quantity"),(0,n.kt)("td",{parentName:"tr",align:null},"int")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Output Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Output Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"No name.")),(0,n.kt)("td",{parentName:"tr",align:null},"exec")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"On Award Consumable Complete"),(0,n.kt)("td",{parentName:"tr",align:null},"exec")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Success"),(0,n.kt)("td",{parentName:"tr",align:null},"bool")))),(0,n.kt)("h2",{id:"properties"},"Properties:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Is Trolling Risk?"),(0,n.kt)("td",{parentName:"tr",align:null},"No.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Is Beta?"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Chip UUID"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"9ceb3e5a-2030-4034-98a4-dc2809828b63"))))),(0,n.kt)("h3",{id:"uses"},"Uses"),(0,n.kt)("p",null,"None so far!"),(0,n.kt)("h3",{id:"issues"},"Issues"),(0,n.kt)("p",null,"None so far!"),(0,n.kt)("h3",{id:"tips"},"Tips"),(0,n.kt)("p",null,"None so far!"))}d.isMDXComponent=!0}}]);
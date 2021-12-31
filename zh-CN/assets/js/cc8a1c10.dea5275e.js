"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[2539],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,g=d["".concat(u,".").concat(f)]||d[f]||s[f]||a;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2662:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),l=["components"],o={},u=void 0,p={unversionedId:"configuration/filter-plugins/Lowercase",id:"configuration/filter-plugins/Lowercase",title:"Lowercase",description:"Filter plugin : Lowercase",source:"@site/docs/configuration/filter-plugins/Lowercase.md",sourceDirName:"configuration/filter-plugins",slug:"/configuration/filter-plugins/Lowercase",permalink:"/zh-CN/docs/configuration/filter-plugins/Lowercase",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/configuration/filter-plugins/Lowercase.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Kv",permalink:"/zh-CN/docs/configuration/filter-plugins/Kv"},next:{title:"Remove",permalink:"/zh-CN/docs/configuration/filter-plugins/Remove"}},c=[{value:"Filter plugin : Lowercase",id:"filter-plugin--lowercase",children:[{value:"Description",id:"description",children:[],level:3},{value:"Options",id:"options",children:[{value:"source_field string",id:"source_field-string",children:[],level:5},{value:"target_field string",id:"target_field-string",children:[],level:5},{value:"common options string",id:"common-options-string",children:[],level:5}],level:3}],level:2}],s={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"filter-plugin--lowercase"},"Filter plugin : Lowercase"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Author: InterestingLab"),(0,a.kt)("li",{parentName:"ul"},"Homepage: ",(0,a.kt)("a",{parentName:"li",href:"https://interestinglab.github.io/seatunnel-docs"},"https://interestinglab.github.io/seatunnel-docs")),(0,a.kt)("li",{parentName:"ul"},"Version: 1.0.0")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"\u5c06\u6307\u5b9a\u5b57\u6bb5\u5185\u5bb9\u5168\u90e8\u8f6c\u6362\u4e3a\u5c0f\u5199\u5b57\u6bcd"),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"required"),(0,a.kt)("th",{parentName:"tr",align:null},"default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#source_field-string"},"source_field")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"raw_message")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#target_field-string"},"target_field")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"lowercased")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#common-options-string"},"common-options")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"-")))),(0,a.kt)("h5",{id:"source_field-string"},"source_field ","[string]"),(0,a.kt)("p",null,"\u6e90\u5b57\u6bb5\uff0c\u82e5\u4e0d\u914d\u7f6e\u9ed8\u8ba4\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"raw_message")),(0,a.kt)("h5",{id:"target_field-string"},"target_field ","[string]"),(0,a.kt)("p",null,"\u76ee\u6807\u5b57\u6bb5\uff0c\u82e5\u4e0d\u914d\u7f6e\u9ed8\u8ba4\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"lowercased")),(0,a.kt)("h5",{id:"common-options-string"},"common options ","[string]"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Filter")," \u63d2\u4ef6\u901a\u7528\u53c2\u6570\uff0c\u8be6\u60c5\u53c2\u7167 ",(0,a.kt)("a",{parentName:"p",href:"/zh-cn/v1/configuration/filter-plugin"},"Filter Plugin")),(0,a.kt)("h1",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'lowercase {\n    source_field = "address"\n    target_field = "address_lowercased"\n}\n')))}d.isMDXComponent=!0}}]);
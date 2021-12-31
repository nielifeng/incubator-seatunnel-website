"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[7042],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return g}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=u(n),g=a,d=c["".concat(p,".").concat(g)]||c[g]||s[g]||i;return n?r.createElement(d,l(l({ref:e},m),{},{components:n})):r.createElement(d,l({ref:e},m))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6017:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return m},default:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={},p=void 0,u={unversionedId:"configuration/input-plugins/FileStream",id:"configuration/input-plugins/FileStream",title:"FileStream",description:"Input plugin : FileStream [Streaming]",source:"@site/docs/configuration/input-plugins/FileStream.md",sourceDirName:"configuration/input-plugins",slug:"/configuration/input-plugins/FileStream",permalink:"/zh-CN/docs/configuration/input-plugins/FileStream",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/configuration/input-plugins/FileStream.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"File",permalink:"/zh-CN/docs/configuration/input-plugins/File"},next:{title:"Hdfs",permalink:"/zh-CN/docs/configuration/input-plugins/Hdfs"}},m=[{value:"Input plugin : FileStream Streaming",id:"input-plugin--filestream-streaming",children:[{value:"Description",id:"description",children:[],level:3},{value:"Options",id:"options",children:[{value:"format string",id:"format-string",children:[],level:5},{value:"path string",id:"path-string",children:[],level:5},{value:"rowTag string",id:"rowtag-string",children:[],level:5},{value:"common options string",id:"common-options-string",children:[],level:5}],level:3},{value:"Example",id:"example",children:[],level:3}],level:2}],s={toc:m};function c(t){var e=t.components,n=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"input-plugin--filestream-streaming"},"Input plugin : FileStream ","[Streaming]"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Author: InterestingLab"),(0,i.kt)("li",{parentName:"ul"},"Homepage: ",(0,i.kt)("a",{parentName:"li",href:"https://interestinglab.github.io/seatunnel-docs"},"https://interestinglab.github.io/seatunnel-docs")),(0,i.kt)("li",{parentName:"ul"},"Version: 1.1.0")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"\u4ece\u672c\u5730\u6587\u4ef6\u76ee\u5f55\u4e2d\u8bfb\u53d6\u539f\u59cb\u6570\u636e\uff0c\u4f1a\u76d1\u542c\u65b0\u6587\u4ef6\u751f\u6210\u3002"),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#format-string"},"format")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"text")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#path-string"},"path")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#rowtag-string"},"rowTag")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#common-options-string"},"common-options")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")))),(0,i.kt)("h5",{id:"format-string"},"format ","[string]"),(0,i.kt)("p",null,"\u6587\u4ef6\u683c\u5f0f"),(0,i.kt)("h5",{id:"path-string"},"path ","[string]"),(0,i.kt)("p",null,"\u6587\u4ef6\u76ee\u5f55\u8def\u5f84"),(0,i.kt)("h5",{id:"rowtag-string"},"rowTag ","[string]"),(0,i.kt)("p",null,"\u4ec5\u5f53format\u4e3axml\u65f6\u4f7f\u7528\uff0c\u8868\u793aXML\u683c\u5f0f\u6570\u636e\u7684Tag"),(0,i.kt)("h5",{id:"common-options-string"},"common options ","[string]"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Input")," \u63d2\u4ef6\u901a\u7528\u53c2\u6570\uff0c\u8be6\u60c5\u53c2\u7167 ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/v1/configuration/input-plugin"},"Input Plugin")),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'fileStream {\n    path = "file:///var/log/"\n}\n')),(0,i.kt)("p",null,"\u6216\u8005\u6307\u5b9a",(0,i.kt)("inlineCode",{parentName:"p"},"format")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'fileStream {\n    path = "file:///var/log/"\n    format = "xml"\n    rowTag = "book"\n}\n')))}c.isMDXComponent=!0}}]);
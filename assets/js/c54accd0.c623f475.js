"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[6162],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=u(n),f=i,m=d["".concat(p,".").concat(f)]||d[f]||c[f]||a;return n?r.createElement(m,o(o({ref:e},s),{},{components:n})):r.createElement(m,o({ref:e},s))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5820:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return s},toc:function(){return c},default:function(){return f}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={},p=void 0,u={unversionedId:"configuration/input-plugins/S3",id:"version-1.x/configuration/input-plugins/S3",title:"S3",description:"Input plugin : S3",source:"@site/versioned_docs/version-1.x/configuration/input-plugins/S3.md",sourceDirName:"configuration/input-plugins",slug:"/configuration/input-plugins/S3",permalink:"/docs/1.x/configuration/input-plugins/S3",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-1.x/configuration/input-plugins/S3.md",tags:[],version:"1.x",frontMatter:{},sidebar:"docs",previous:{title:"RedisStream",permalink:"/docs/1.x/configuration/input-plugins/RedisStream"},next:{title:"Socket",permalink:"/docs/1.x/configuration/input-plugins/Socket"}},s={},c=[{value:"Input plugin : S3",id:"input-plugin--s3",level:2},{value:"Description",id:"description",level:3},{value:"Options",id:"options",level:3},{value:"path string",id:"path-string",level:5},{value:"Example",id:"example",level:3}],d={toc:c};function f(t){var e=t.components,n=(0,i.Z)(t,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"input-plugin--s3"},"Input plugin : S3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Author: InterestingLab"),(0,a.kt)("li",{parentName:"ul"},"Homepage: ",(0,a.kt)("a",{parentName:"li",href:"https://interestinglab.github.io/seatunnel-docs"},"https://interestinglab.github.io/seatunnel-docs")),(0,a.kt)("li",{parentName:"ul"},"Version: 1.1.0")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"Read raw data from AWS S3 storage."),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"required"),(0,a.kt)("th",{parentName:"tr",align:null},"default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#path-string"},"path")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")))),(0,a.kt)("h5",{id:"path-string"},"path ","[string]"),(0,a.kt)("p",null,"File path on S3, supported path formats are ",(0,a.kt)("strong",{parentName:"p"},"s3://"),", ",(0,a.kt)("strong",{parentName:"p"},"s3a://"),", ",(0,a.kt)("strong",{parentName:"p"},"s3n://")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'hdfs {\n    path = "s3n://bucket/access.log"\n}\n')))}f.isMDXComponent=!0}}]);
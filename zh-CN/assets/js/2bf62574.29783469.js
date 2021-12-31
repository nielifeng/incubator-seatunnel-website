"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[6706],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=u(n),c=r,k=s["".concat(p,".").concat(c)]||s[c]||d[c]||l;return n?a.createElement(k,i(i({ref:e},m),{},{components:n})):a.createElement(k,i({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},475:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return m},default:function(){return s}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={},p=void 0,u={unversionedId:"configuration/input-plugins/FakeStream",id:"configuration/input-plugins/FakeStream",title:"FakeStream",description:"Input plugin : FakeStream [Streaming]",source:"@site/docs/configuration/input-plugins/FakeStream.md",sourceDirName:"configuration/input-plugins",slug:"/configuration/input-plugins/FakeStream",permalink:"/zh-CN/docs/configuration/input-plugins/FakeStream",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/configuration/input-plugins/FakeStream.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Elasticsearch",permalink:"/zh-CN/docs/configuration/input-plugins/Elasticsearch"},next:{title:"File",permalink:"/zh-CN/docs/configuration/input-plugins/File"}},m=[{value:"Input plugin : FakeStream Streaming",id:"input-plugin--fakestream-streaming",children:[{value:"Description",id:"description",children:[],level:3},{value:"Options",id:"options",children:[{value:"data_format string",id:"data_format-string",children:[],level:5},{value:"json_keys array",id:"json_keys-array",children:[],level:5},{value:"num_of_fields number",id:"num_of_fields-number",children:[],level:5},{value:"rate number",id:"rate-number",children:[],level:5},{value:"text_delimeter string",id:"text_delimeter-string",children:[],level:5},{value:"common options string",id:"common-options-string",children:[],level:5}],level:3},{value:"Examples",id:"examples",children:[],level:3}],level:2}],d={toc:m};function s(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"input-plugin--fakestream-streaming"},"Input plugin : FakeStream ","[Streaming]"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Author: InterestingLab"),(0,l.kt)("li",{parentName:"ul"},"Homepage: ",(0,l.kt)("a",{parentName:"li",href:"https://interestinglab.github.io/seatunnel-docs"},"https://interestinglab.github.io/seatunnel-docs")),(0,l.kt)("li",{parentName:"ul"},"Version: 1.0.0")),(0,l.kt)("h3",{id:"description"},"Description"),(0,l.kt)("p",null,"Fake Input\u4e3b\u8981\u7528\u4e8e\u65b9\u4fbf\u5f97\u751f\u6210\u7528\u6237\u6307\u5b9a\u7684\u6570\u636e\uff0c\u4f5c\u4e3a\u8f93\u5165\u6765\u5bf9seatunnel\u8fdb\u884c\u529f\u80fd\u9a8c\u8bc1\uff0c\u6d4b\u8bd5\uff0c\u4ee5\u53ca\u6027\u80fd\u6d4b\u8bd5\u7b49\u3002"),(0,l.kt)("h3",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#data_format-string"},"data_format")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"text")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#json_keys-array"},"json_keys")),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#num_of_fields-number"},"num_of_fields")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#rate-number"},"rate")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#text_delimeter-string"},"text_delimeter")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},",")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#common-options-string"},"common-options")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h5",{id:"data_format-string"},"data_format ","[string]"),(0,l.kt)("p",null,"\u6d4b\u8bd5\u6570\u636e\u7c7b\u578b\uff0c\u652f\u6301text\u4ee5\u53cajson"),(0,l.kt)("h5",{id:"json_keys-array"},"json_keys ","[array]"),(0,l.kt)("p",null,"json\u6570\u636ekey\u5217\u8868\uff0c\u5f53",(0,l.kt)("inlineCode",{parentName:"p"},"data_format"),"\u4e3ajson\u65f6\u4f7f\u7528"),(0,l.kt)("h5",{id:"num_of_fields-number"},"num_of_fields ","[number]"),(0,l.kt)("p",null,"\u5b57\u6bb5\u4e2a\u6570\uff0c\u5f53",(0,l.kt)("inlineCode",{parentName:"p"},"data_format"),"\u4e3atext\u65f6\u4f7f\u7528"),(0,l.kt)("h5",{id:"rate-number"},"rate ","[number]"),(0,l.kt)("p",null,"\u6bcf\u79d2\u751f\u6210\u6d4b\u8bd5\u7528\u4f8b\u4e2a\u6570"),(0,l.kt)("h5",{id:"text_delimeter-string"},"text_delimeter ","[string]"),(0,l.kt)("p",null,"\u6587\u672c\u6570\u636e\u5206\u9694\u7b26\uff0c\u5f53",(0,l.kt)("inlineCode",{parentName:"p"},"data_format"),"\u4e3atext\u65f6\u4f7f\u7528"),(0,l.kt)("h5",{id:"common-options-string"},"common options ","[string]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Input")," \u63d2\u4ef6\u901a\u7528\u53c2\u6570\uff0c\u8be6\u60c5\u53c2\u7167 ",(0,l.kt)("a",{parentName:"p",href:"/zh-cn/v1/configuration/input-plugin"},"Input Plugin")),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"data_format")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'fakeStream {\n    data_format = "text"\n    text_delimeter = ","\n    num_of_fields = 5\n    rate = 5\n}\n')))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Input")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"+-------------------------------------------------------------------------------------------+\n|raw_message                                                                                |\n+-------------------------------------------------------------------------------------------+\n|Random1-1462437280,Random215896330,Random3-2009195549,Random41027365838,Random51525395111  |\n|Random1-2135047059,Random2-1030689538,Random3-854912064,Random4126768642,Random5-1483841750|\n+-------------------------------------------------------------------------------------------+\n")))),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4e0d\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"data_format")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"fakeStream {\n    content = ['name=ricky&age=23', 'name=gary&age=28']\n    rate = 5\n}\n")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Input")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"+-----------------+\n|raw_message      |\n+-----------------+\n|name=gary&age=28 |\n|name=ricky&age=23|\n+-----------------+\n")),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"\u4ece",(0,l.kt)("inlineCode",{parentName:"p"},"content"),"\u5217\u8868\u4e2d\u968f\u673a\u62bd\u53d6\u5176\u4e2d\u7684\u5b57\u7b26\u4e32")))))}s.isMDXComponent=!0}}]);
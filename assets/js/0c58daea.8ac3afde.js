"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[83945],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=u(n),c=r,g=d["".concat(p,".").concat(c)]||d[c]||s[c]||i;return n?a.createElement(g,l(l({ref:e},m),{},{components:n})):a.createElement(g,l({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90423:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return m},toc:function(){return s},default:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={},p=void 0,u={unversionedId:"configuration/output-plugins/File",id:"version-1.x/configuration/output-plugins/File",title:"File",description:"Output plugin : File",source:"@site/versioned_docs/version-1.x/configuration/output-plugins/File.md",sourceDirName:"configuration/output-plugins",slug:"/configuration/output-plugins/File",permalink:"/docs/1.x/configuration/output-plugins/File",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-1.x/configuration/output-plugins/File.md",tags:[],version:"1.x",frontMatter:{},sidebar:"docs",previous:{title:"Elasticsearch",permalink:"/docs/1.x/configuration/output-plugins/Elasticsearch"},next:{title:"Hdfs",permalink:"/docs/1.x/configuration/output-plugins/Hdfs"}},m={},s=[{value:"Output plugin : File",id:"output-plugin--file",level:2},{value:"Description",id:"description",level:3},{value:"Options",id:"options",level:3},{value:"options object",id:"options-object",level:5},{value:"partition_by array",id:"partition_by-array",level:5},{value:"path string",id:"path-string",level:5},{value:"path_time_format string",id:"path_time_format-string",level:5},{value:"save_mode string",id:"save_mode-string",level:5},{value:"format string",id:"format-string",level:5},{value:"Example",id:"example",level:3}],d={toc:s};function c(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"output-plugin--file"},"Output plugin : File"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Author: InterestingLab"),(0,i.kt)("li",{parentName:"ul"},"Homepage: ",(0,i.kt)("a",{parentName:"li",href:"https://interestinglab.github.io/seatunnel-docs"},"https://interestinglab.github.io/seatunnel-docs")),(0,i.kt)("li",{parentName:"ul"},"Version: 1.0.0")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"Write Rows to local file system."),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#options-object"},"options")),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#partition_by-array"},"partition_by")),(0,i.kt)("td",{parentName:"tr",align:null},"array"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#path-string"},"path")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#path_time_format-string"},"path_time_format")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"yyyyMMddHHmmss")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#save_mode-string"},"save_mode")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"error")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#format-string"},"format")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"json")))),(0,i.kt)("h5",{id:"options-object"},"options ","[object]"),(0,i.kt)("p",null,"Custom parameters."),(0,i.kt)("h5",{id:"partition_by-array"},"partition_by ","[array]"),(0,i.kt)("p",null,"Partition the data based on the fields."),(0,i.kt)("h5",{id:"path-string"},"path ","[string]"),(0,i.kt)("p",null,"Output File path. Start with ",(0,i.kt)("inlineCode",{parentName:"p"},"file://"),"."),(0,i.kt)("h5",{id:"path_time_format-string"},"path_time_format ","[string]"),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," contains time variable, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"xxxx-${now}"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"path_time_format")," can be used to specify the format of path, default is ",(0,i.kt)("inlineCode",{parentName:"p"},"yyyy.MM.dd"),". The commonly used time formats are listed below:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Symbol"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"y"),(0,i.kt)("td",{parentName:"tr",align:null},"Year")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"M"),(0,i.kt)("td",{parentName:"tr",align:null},"Month")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"d"),(0,i.kt)("td",{parentName:"tr",align:null},"Day of month")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"H"),(0,i.kt)("td",{parentName:"tr",align:null},"Hour in day (0-23)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"m"),(0,i.kt)("td",{parentName:"tr",align:null},"Minute in hour")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"s"),(0,i.kt)("td",{parentName:"tr",align:null},"Second in minute")))),(0,i.kt)("p",null,"The detailed time format syntax:",(0,i.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/tutorial/i18n/format/simpleDateFormat.html"},"Java SimpleDateFormat"),"."),(0,i.kt)("h5",{id:"save_mode-string"},"save_mode ","[string]"),(0,i.kt)("p",null,"Save mode, supports ",(0,i.kt)("inlineCode",{parentName:"p"},"overwrite"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"append"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ignore")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"error"),". The detail of save_mode see ",(0,i.kt)("a",{parentName:"p",href:"http://spark.apache.org/docs/2.2.0/sql-programming-guide.html#save-modes"},"save-modes"),"."),(0,i.kt)("h5",{id:"format-string"},"format ","[string]"),(0,i.kt)("p",null,"Output format, supports ",(0,i.kt)("inlineCode",{parentName:"p"},"csv"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"json"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"parquet")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"text"),"."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'file {\n    path = "file:///var/logs"\n    format = "text"\n}\n')))}c.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[3408],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(g,i(i({ref:e},s),{},{components:n})):r.createElement(g,i({ref:e},s))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},365:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={},u="Output plugin : **Hive**",p={unversionedId:"configuration/output-plugins/Hive",id:"configuration/output-plugins/Hive",title:"Output plugin : **Hive**",description:"* Author: InterestingLab",source:"@site/docs/configuration/output-plugins/Hive.md",sourceDirName:"configuration/output-plugins",slug:"/configuration/output-plugins/Hive",permalink:"/zh-CN/docs/configuration/output-plugins/Hive",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/configuration/output-plugins/Hive.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Hdfs",permalink:"/zh-CN/docs/configuration/output-plugins/Hdfs"},next:{title:"Jdbc",permalink:"/zh-CN/docs/configuration/output-plugins/Jdbc"}},s=[{value:"Description",id:"description",children:[],level:3},{value:"Options",id:"options",children:[{value:"sqlstring",id:"sqlstring",children:[],level:5},{value:"Source_table_name string",id:"source_table_name-string",children:[],level:5},{value:"result_table_name string",id:"result_table_name-string",children:[],level:5},{value:"save_mode string",id:"save_mode-string",children:[],level:5},{value:"sink_columnsstring",id:"sink_columnsstring",children:[],level:5},{value:"partition_by[Arraystring]",id:"partition_byarraystring",children:[],level:5}],level:3},{value:"Example",id:"example",children:[],level:3}],c={toc:s};function m(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"output-plugin--hive"},"Output plugin : ",(0,l.kt)("strong",{parentName:"h1"},"Hive")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Author: InterestingLab"),(0,l.kt)("li",{parentName:"ul"},"Homepage: ",(0,l.kt)("a",{parentName:"li",href:"https://interestinglab.github.io/seatunnel-docs"},"https://interestinglab.github.io/seatunnel-docs")),(0,l.kt)("li",{parentName:"ul"},"Version: 1.5.1")),(0,l.kt)("h3",{id:"description"},"Description"),(0,l.kt)("p",null,"\u5199\u5165\u6570\u636e\u5230",(0,l.kt)("a",{parentName:"p",href:"https://hive.apache.org"},"Apache Hive"),"\u8868\u4e2d"),(0,l.kt)("h3",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#hql"},"sql")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#source_table_name"},"source_table_name")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#result_table_name"},"result_table_name")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#sink_columns"},"sink_columns")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#save_mode"},"save_mode")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#partition_by"},"partition_by")),(0,l.kt)("td",{parentName:"tr",align:null},"Array","[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h5",{id:"sqlstring"},"sql","[string]"),(0,l.kt)("p",null,"\u6807\u51c6\u7684hql\u8bed\u53e5\uff1ainsert into/overwrite $table  select * from xxx_table"),(0,l.kt)("p",null,"\u5982\u679c\u6709\u8fd9\u4e2aoption\uff0c\u4f1a\u5ffd\u7565\u5176\u4ed6\u7684option"),(0,l.kt)("h5",{id:"source_table_name-string"},"Source_table_name ","[string]"),(0,l.kt)("p",null,"\u51c6\u5907\u8f93\u51fa\u5230hive\u7684\u8868\u540d"),(0,l.kt)("h5",{id:"result_table_name-string"},"result_table_name ","[string]"),(0,l.kt)("p",null,"\u7ed3\u679c\u5728hive\u4e2d\u7684\u5b58\u50a8\u8868\u540d"),(0,l.kt)("h5",{id:"save_mode-string"},"save_mode ","[string]"),(0,l.kt)("p",null,"\u5199\u5165spark\u4e2d\u91c7\u53d6\u7684\u6a21\u5f0f\uff0c\u4e0espark.mode\u8bed\u4e49\u76f8\u540c"),(0,l.kt)("h5",{id:"sink_columnsstring"},"sink_columns","[string]"),(0,l.kt)("p",null,"\u9009\u62e9source_table_name\u4e2d\u7684\u9700\u8981\u7684\u5b57\u6bb5\uff0c\u5b58\u50a8\u5728result_table_name\u4e2d,\u5b57\u6bb5\u95f4\u9017\u53f7\u5206\u9694"),(0,l.kt)("h5",{id:"partition_byarraystring"},"partition_by[Array","[string]","]"),(0,l.kt)("p",null,"hive\u5206\u533a"),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-conf"},'output {\n  Hive {\n    sql = "insert overwrite table seatunnel.test1 partition(province) select name,age,province from myTable2"\n  }\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-conf"},'output {\n  Hive {\n    source_table_name = "myTable2"\n    result_table_name = "seatunnel.test1"\n    save_mode = "overwrite"\n    sink_columns = "name,age,province"\n    partition_by = ["province"]\n  }\n}\n')))}m.isMDXComponent=!0}}]);
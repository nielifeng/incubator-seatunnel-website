"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[7846],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,u=function(e,t){if(null==e)return{};var n,r,u={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(u[n]=e[n]);return u}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(u[n]=e[n])}return u}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,u=e.mdxType,a=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=u,k=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function m(e,t){var n=arguments,u=t&&t.mdxType;if("string"==typeof e||u){var a=n.length,l=new Array(a);l[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:u,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8158:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return c},assets:function(){return s},toc:function(){return d},default:function(){return m}});var r=n(7462),u=n(3366),a=(n(7294),n(3905)),l=["components"],o={},i="Kudu",c={unversionedId:"connector-v2/source/Kudu",id:"connector-v2/source/Kudu",title:"Kudu",description:"Kudu source connector",source:"@site/docs/connector-v2/source/Kudu.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Kudu",permalink:"/zh-CN/docs/connector-v2/source/Kudu",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/source/Kudu.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"JDBC",permalink:"/zh-CN/docs/connector-v2/source/Jdbc"},next:{title:"Socket",permalink:"/zh-CN/docs/connector-v2/source/Socket"}},s={},d=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"kudu_master string",id:"kudu_master-string",level:3},{value:"kudu_table string",id:"kudu_table-string",level:3},{value:"columnsList string",id:"columnslist-string",level:3},{value:"Examples",id:"examples",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,u.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kudu"},"Kudu"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Kudu source connector")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Used to read data from Kudu. Currently, only supports Query with Batch Mode."),(0,a.kt)("p",null," The tested kudu version is 1.11.1."),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"required"),(0,a.kt)("th",{parentName:"tr",align:null},"default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"kudu_master"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"kudu_table"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"columnsList"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")))),(0,a.kt)("h3",{id:"kudu_master-string"},"kudu_master ","[string]"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kudu_master")," The address of kudu master,such as '192.168.88.110:7051'."),(0,a.kt)("h3",{id:"kudu_table-string"},"kudu_table ","[string]"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kudu_table")," The name of kudu table.."),(0,a.kt)("h3",{id:"columnslist-string"},"columnsList ","[string]"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"columnsList")," Specifies the column names of the table."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hocon"},'source {\n   KuduSource {\n      result_table_name = "studentlyh2"\n      kudu_master = "192.168.88.110:7051"\n      kudu_table = "studentlyh2"\n      columnsList = "id,name,age,sex"\n    }\n\n}\n')))}m.isMDXComponent=!0}}]);
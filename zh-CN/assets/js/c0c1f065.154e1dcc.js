"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[43],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6801:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={},s="Hudi",p={unversionedId:"connector-v2/source/Hudi",id:"connector-v2/source/Hudi",title:"Hudi",description:"Description",source:"@site/docs/connector-v2/source/Hudi.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Hudi",permalink:"/zh-CN/docs/connector-v2/source/Hudi",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/source/Hudi.md",tags:[],version:"current",frontMatter:{}},u={},c=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"table.path string",id:"tablepath-string",level:3},{value:"table.type string",id:"tabletype-string",level:3},{value:"conf.files string",id:"conffiles-string",level:3},{value:"use.kerberos boolean",id:"usekerberos-boolean",level:3},{value:"kerberos.principal string",id:"kerberosprincipal-string",level:3},{value:"kerberos.principal.file string",id:"kerberosprincipalfile-string",level:3},{value:"Examples",id:"examples",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"hudi"},"Hudi"),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Used to read data from Hudi. Currently, only supports hudi cow table and Snapshot Query with Batch Mode."),(0,l.kt)("p",null,"In order to use this connector, You must ensure your spark/flink cluster already integrated hive. The tested hive version is 2.3.9."),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table.path"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table.type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"conf.files"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"use.kerberos"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kerberos.principal"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kerberos.principal.file"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"tablepath-string"},"table.path ","[string]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"table.path")," The hdfs root path of hudi table,such as 'hdfs://nameserivce/data/hudi/hudi_table/'."),(0,l.kt)("h3",{id:"tabletype-string"},"table.type ","[string]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"table.type")," The type of hudi table. Now we only support 'cow', 'mor' is not support yet."),(0,l.kt)("h3",{id:"conffiles-string"},"conf.files ","[string]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"conf.files")," The environment conf file path list(local path), which used to init hdfs client to read hudi table file. The example is '/home/test/hdfs-site.xml;/home/test/core-site.xml;/home/test/yarn-site.xml'."),(0,l.kt)("h3",{id:"usekerberos-boolean"},"use.kerberos ","[boolean]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"use.kerberos")," Whether to enable Kerberos, default is false."),(0,l.kt)("h3",{id:"kerberosprincipal-string"},"kerberos.principal ","[string]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"kerberos.principal")," When use kerberos, we should set kerberos princal such as 'test_user@xxx'."),(0,l.kt)("h3",{id:"kerberosprincipalfile-string"},"kerberos.principal.file ","[string]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"kerberos.principal.file")," When use kerberos,  we should set kerberos princal file such as '/home/test/test_user.keytab'."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'source {\n\n  Hudi {\n    table.path = "hdfs://nameserivce/data/hudi/hudi_table/"\n    table.type = "cow"\n    conf.files = "/home/test/hdfs-site.xml;/home/test/core-site.xml;/home/test/yarn-site.xml"\n    use.kerberos = true\n    kerberos.principal = "test_user@xxx"\n    kerberos.principal.file = "/home/test/test_user.keytab"\n  }\n\n}\n')))}m.isMDXComponent=!0}}]);
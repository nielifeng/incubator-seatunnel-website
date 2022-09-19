"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[19179],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return k}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=u(n),k=a,g=m["".concat(s,".").concat(k)]||m[k]||d[k]||l;return n?r.createElement(g,i(i({ref:e},p),{},{components:n})):r.createElement(g,i({ref:e},p))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72582:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return p},toc:function(){return d},default:function(){return k}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={},s="Doris",u={unversionedId:"flink/configuration/sink-plugins/Doris",id:"version-2.1.0/flink/configuration/sink-plugins/Doris",title:"Doris",description:"Sink plugin: Doris [Flink]",source:"@site/versioned_docs/version-2.1.0/flink/configuration/sink-plugins/Doris.md",sourceDirName:"flink/configuration/sink-plugins",slug:"/flink/configuration/sink-plugins/Doris",permalink:"/docs/2.1.0/flink/configuration/sink-plugins/Doris",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.0/flink/configuration/sink-plugins/Doris.md",tags:[],version:"2.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Console",permalink:"/docs/2.1.0/flink/configuration/sink-plugins/Console"},next:{title:"Druid",permalink:"/docs/2.1.0/flink/configuration/sink-plugins/Druid"}},p={},d=[{value:"Description",id:"description",level:3},{value:"Options",id:"options",level:3},{value:"fenodes string",id:"fenodes-string",level:5},{value:"database string",id:"database-string",level:5},{value:"table string",id:"table-string",level:5},{value:"user string",id:"user-string",level:5},{value:"password string",id:"password-string",level:5},{value:"batch_size int",id:"batch_size-int",level:5},{value:"interval int",id:"interval-int",level:5},{value:"max_retries int",id:"max_retries-int",level:5},{value:"doris.* string",id:"doris-string",level:5},{value:"parallelism Int",id:"parallelism-int",level:3},{value:"Examples",id:"examples",level:3}],m={toc:d};function k(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"doris"},"Doris"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Sink plugin: Doris ","[Flink]")),(0,l.kt)("h3",{id:"description"},"Description"),(0,l.kt)("p",null,"Write Data to a Doris Table."),(0,l.kt)("h3",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"),(0,l.kt)("th",{parentName:"tr",align:null},"engine"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fenodes"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Flink")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"database"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Flink")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Flink")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"user"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Flink")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Flink")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch_size"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"Flink")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"interval"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"1000"),(0,l.kt)("td",{parentName:"tr",align:null},"Flink")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_retries"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Flink")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"doris.*"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Flink")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"parallelism"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Flink")))),(0,l.kt)("h5",{id:"fenodes-string"},"fenodes ","[string]"),(0,l.kt)("p",null,"Doris FE http address"),(0,l.kt)("h5",{id:"database-string"},"database ","[string]"),(0,l.kt)("p",null,"Doris database name"),(0,l.kt)("h5",{id:"table-string"},"table ","[string]"),(0,l.kt)("p",null,"Doris table name"),(0,l.kt)("h5",{id:"user-string"},"user ","[string]"),(0,l.kt)("p",null,"Doris username"),(0,l.kt)("h5",{id:"password-string"},"password ","[string]"),(0,l.kt)("p",null,"Doris password"),(0,l.kt)("h5",{id:"batch_size-int"},"batch_size ","[int]"),(0,l.kt)("p",null,"Maximum number of lines in a single write Doris,default value is 100."),(0,l.kt)("h5",{id:"interval-int"},"interval ","[int]"),(0,l.kt)("p",null,"The flush interval millisecond, after which the asynchronous thread will write the data in the cache to Doris.Set to 0 to turn off periodic writing."),(0,l.kt)("h5",{id:"max_retries-int"},"max_retries ","[int]"),(0,l.kt)("p",null,"Number of retries after writing Doris failed"),(0,l.kt)("h5",{id:"doris-string"},"doris.* ","[string]"),(0,l.kt)("p",null,"The doris stream load parameters.you can use 'doris.' prefix + stream_load properties. eg:doris.column_separator' = ','\n",(0,l.kt)("a",{parentName:"p",href:"https://doris.apache.org/administrator-guide/load-data/stream-load-manual.html"},"More Doris stream_load Configurations")),(0,l.kt)("h3",{id:"parallelism-int"},"parallelism ","[Int]"),(0,l.kt)("p",null,"The parallelism of an individual operator, for DorisSink"),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'DorisSink {\n     fenodes = "127.0.0.1:8030"\n     database = database\n     table = table\n     user = root\n     password = password\n     batch_size = 1\n     doris.column_separator="\\t"\n     doris.columns="id,user_name,user_name_cn,create_time,last_login_time"\n}\n')))}k.isMDXComponent=!0}}]);
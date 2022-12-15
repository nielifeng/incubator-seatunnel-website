"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[24851],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,k=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},70:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return p},assets:function(){return c},toc:function(){return d},default:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],s={},o="Elasticsearch",p={unversionedId:"connector-v2/sink/Elasticsearch",id:"connector-v2/sink/Elasticsearch",title:"Elasticsearch",description:"Description",source:"@site/docs/connector-v2/sink/Elasticsearch.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Elasticsearch",permalink:"/zh-CN/docs/connector-v2/sink/Elasticsearch",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/Elasticsearch.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Doris",permalink:"/zh-CN/docs/connector-v2/sink/Doris"},next:{title:"Email",permalink:"/zh-CN/docs/connector-v2/sink/Email"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"hosts array",id:"hosts-array",level:3},{value:"index string",id:"index-string",level:3},{value:"index_type string",id:"index_type-string",level:3},{value:"primary_keys list",id:"primary_keys-list",level:3},{value:"key_delimiter string",id:"key_delimiter-string",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"max_retry_count int",id:"max_retry_count-int",level:3},{value:"max_batch_size int",id:"max_batch_size-int",level:3},{value:"common options",id:"common-options",level:3},{value:"Examples",id:"examples",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3},{value:"next version",id:"next-version",level:3}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"elasticsearch"},"Elasticsearch"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Output data to ",(0,i.kt)("inlineCode",{parentName:"p"},"Elasticsearch"),"."),(0,i.kt)("h2",{id:"key-features"},"Key features"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"exactly-once")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"schema projection")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"cdc"))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Engine Supported"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"supported  ",(0,i.kt)("inlineCode",{parentName:"li"},"ElasticSearch version is >= 2.x and < 8.x"))))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hosts"),(0,i.kt)("td",{parentName:"tr",align:null},"array"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"index"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"index_type"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"primary_keys"),(0,i.kt)("td",{parentName:"tr",align:null},"list"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"key_delimiter"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"username"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"password"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"max_retry_count"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"max_batch_size"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"10")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"common-options"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")))),(0,i.kt)("h3",{id:"hosts-array"},"hosts ","[array]"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Elasticsearch")," cluster http address, the format is ",(0,i.kt)("inlineCode",{parentName:"p"},"host:port")," , allowing multiple hosts to be specified. Such as ",(0,i.kt)("inlineCode",{parentName:"p"},'["host1:9200", "host2:9200"]'),"."),(0,i.kt)("h3",{id:"index-string"},"index ","[string]"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Elasticsearch"),"  ",(0,i.kt)("inlineCode",{parentName:"p"},"index")," name.Index support contains variables of field name,such as ",(0,i.kt)("inlineCode",{parentName:"p"},"seatunnel_${age}"),",and the field must appear at seatunnel row.\nIf not, we will treat it as a normal index."),(0,i.kt)("h3",{id:"index_type-string"},"index_type ","[string]"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Elasticsearch")," index type, it is recommended not to specify in elasticsearch 6 and above"),(0,i.kt)("h3",{id:"primary_keys-list"},"primary_keys ","[list]"),(0,i.kt)("p",null,"Primary key fields used to generate the document ",(0,i.kt)("inlineCode",{parentName:"p"},"_id"),", this is cdc required options."),(0,i.kt)("h3",{id:"key_delimiter-string"},"key_delimiter ","[string]"),(0,i.kt)("p",null,'Delimiter for composite keys ("_" by default), e.g., "$" would result in document ',(0,i.kt)("inlineCode",{parentName:"p"},"_id"),' "KEY1$KEY2$KEY3".'),(0,i.kt)("h3",{id:"username-string"},"username ","[string]"),(0,i.kt)("p",null,"x-pack username"),(0,i.kt)("h3",{id:"password-string"},"password ","[string]"),(0,i.kt)("p",null,"x-pack password"),(0,i.kt)("h3",{id:"max_retry_count-int"},"max_retry_count ","[int]"),(0,i.kt)("p",null,"one bulk request max try size"),(0,i.kt)("h3",{id:"max_batch_size-int"},"max_batch_size ","[int]"),(0,i.kt)("p",null,"batch bulk doc max size"),(0,i.kt)("h3",{id:"common-options"},"common options"),(0,i.kt)("p",null,"Sink plugin common parameters, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/connector-v2/sink/common-options"},"Sink Common Options")," for details"),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Simple"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'sink {\n    Elasticsearch {\n        hosts = ["localhost:9200"]\n        index = "seatunnel-${age}"\n    }\n}\n')),(0,i.kt)("p",null,"CDC(Change data capture) event"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'sink {\n    Elasticsearch {\n        hosts = ["localhost:9200"]\n        index = "seatunnel-${age}"\n        \n        # cdc required options\n        primary_keys = ["key1", "key2", ...]\n    }\n}\n')),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add Elasticsearch Sink Connector")),(0,i.kt)("h3",{id:"next-version"},"next version"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[Feature]"," Support CDC write DELETE/UPDATE/INSERT events (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3673"},"3673"),")")))}m.isMDXComponent=!0}}]);
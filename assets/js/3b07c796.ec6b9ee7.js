"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[71264],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27801:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],i={},s="Redis",p={unversionedId:"connector-v2/source/Redis",id:"connector-v2/source/Redis",title:"Redis",description:"Redis source connector",source:"@site/docs/connector-v2/source/Redis.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Redis",permalink:"/docs/connector-v2/source/Redis",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/source/Redis.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Phoenix",permalink:"/docs/connector-v2/source/Phoenix"},next:{title:"S3File",permalink:"/docs/connector-v2/source/S3File"}},c={},u=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"host string",id:"host-string",level:3},{value:"port int",id:"port-int",level:3},{value:"keys string",id:"keys-string",level:3},{value:"data_type string",id:"data_type-string",level:3},{value:"auth String",id:"auth-string",level:3},{value:"format String",id:"format-string",level:3},{value:"schema Config",id:"schema-config",level:3},{value:"fields Config",id:"fields-config",level:4},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"redis"},"Redis"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Redis source connector")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Used to read data from Redis."),(0,l.kt)("h2",{id:"key-features"},"Key features"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"batch")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"stream")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"schema projection")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"parallelism")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"support user-defined split"))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"host"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"port"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keys"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data_type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auth"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"schema"),(0,l.kt)("td",{parentName:"tr",align:null},"config"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"format"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"json")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common-options"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"host-string"},"host ","[string]"),(0,l.kt)("p",null,"redis host"),(0,l.kt)("h3",{id:"port-int"},"port ","[int]"),(0,l.kt)("p",null,"redis port"),(0,l.kt)("h3",{id:"keys-string"},"keys ","[string]"),(0,l.kt)("p",null,"keys pattern"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Tips:Redis source connector support fuzzy key matching, user needs to ensure that the matched keys are the same type")),(0,l.kt)("h3",{id:"data_type-string"},"data_type ","[string]"),(0,l.kt)("p",null,"redis data types, support ",(0,l.kt)("inlineCode",{parentName:"p"},"key")," ",(0,l.kt)("inlineCode",{parentName:"p"},"hash")," ",(0,l.kt)("inlineCode",{parentName:"p"},"list")," ",(0,l.kt)("inlineCode",{parentName:"p"},"set")," ",(0,l.kt)("inlineCode",{parentName:"p"},"zset")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"key",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"The value of each key will be sent downstream as a single row of data.\nFor example, the value of key is ",(0,l.kt)("inlineCode",{parentName:"p"},"SeaTunnel test message"),", the data received downstream is ",(0,l.kt)("inlineCode",{parentName:"p"},"SeaTunnel test message")," and only one message will be received.")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"hash"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"The hash key-value pairs will be formatted as json to be sent downstream as a single row of data.\nFor example, the value of hash is ",(0,l.kt)("inlineCode",{parentName:"p"},"name:tyrantlucifer age:26"),", the data received downstream is ",(0,l.kt)("inlineCode",{parentName:"p"},'{"name":"tyrantlucifer", "age":"26"}')," and only one message will be received."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"list"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"Each element in the list will be sent downstream as a single row of data.\nFor example, the value of list is ",(0,l.kt)("inlineCode",{parentName:"p"},"[tyrantlucier, CalvinKirs]"),", the data received downstream are ",(0,l.kt)("inlineCode",{parentName:"p"},"tyrantlucifer")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"CalvinKirs")," and only two message will be received."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"set"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"Each element in the set will be sent downstream as a single row of data\nFor example, the value of set is ",(0,l.kt)("inlineCode",{parentName:"p"},"[tyrantlucier, CalvinKirs]"),", the data received downstream are ",(0,l.kt)("inlineCode",{parentName:"p"},"tyrantlucifer")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"CalvinKirs")," and only two message will be received."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"zset"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"Each element in the sorted set will be sent downstream as a single row of data\nFor example, the value of sorted set is ",(0,l.kt)("inlineCode",{parentName:"p"},"[tyrantlucier, CalvinKirs]"),", the data received downstream are ",(0,l.kt)("inlineCode",{parentName:"p"},"tyrantlucifer")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"CalvinKirs")," and only two message will be received.")))),(0,l.kt)("h3",{id:"auth-string"},"auth ","[String]"),(0,l.kt)("p",null,"redis authentication password, you need it when you connect to an encrypted cluster"),(0,l.kt)("h3",{id:"format-string"},"format ","[String]"),(0,l.kt)("p",null,"the format of upstream data, now only support ",(0,l.kt)("inlineCode",{parentName:"p"},"json")," ",(0,l.kt)("inlineCode",{parentName:"p"},"text"),", default ",(0,l.kt)("inlineCode",{parentName:"p"},"json"),"."),(0,l.kt)("p",null,"when you assign format is ",(0,l.kt)("inlineCode",{parentName:"p"},"json"),", you should also assign schema option, for example:"),(0,l.kt)("p",null,"upstream data is the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'\n{"code":  200, "data":  "get success", "success":  true}\n\n')),(0,l.kt)("p",null,"you should assign schema as the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},"\nschema {\n    fields {\n        code = int\n        data = string\n        success = boolean\n    }\n}\n\n")),(0,l.kt)("p",null,"connector will generate data as the following:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"code"),(0,l.kt)("th",{parentName:"tr",align:null},"data"),(0,l.kt)("th",{parentName:"tr",align:null},"success"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"get success"),(0,l.kt)("td",{parentName:"tr",align:null},"true")))),(0,l.kt)("p",null,"when you assign format is ",(0,l.kt)("inlineCode",{parentName:"p"},"text"),", connector will do nothing for upstream data, for example:"),(0,l.kt)("p",null,"upstream data is the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'\n{"code":  200, "data":  "get success", "success":  true}\n\n')),(0,l.kt)("p",null,"connector will generate data as the following:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"content"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'{"code":  200, "data":  "get success", "success":  true}')))),(0,l.kt)("h3",{id:"schema-config"},"schema ","[Config]"),(0,l.kt)("h4",{id:"fields-config"},"fields ","[Config]"),(0,l.kt)("p",null,"the schema fields of upstream data"),(0,l.kt)("h3",{id:"common-options"},"common options"),(0,l.kt)("p",null,"Source plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"p",href:"/docs/connector-v2/source/common-options"},"Source Common Options")," for details"),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"simple:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'  Redis {\n    host = localhost\n    port = 6379\n    keys = "key_test*"\n    data_type = key\n    format = text\n  }\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'  Redis {\n    host = localhost\n    port = 6379\n    keys = "key_test*"\n    data_type = key\n    format = json\n    schema {\n      fields {\n        name = string\n        age = int\n      }\n    }\n  }\n')),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add Redis Source Connector")))}m.isMDXComponent=!0}}]);
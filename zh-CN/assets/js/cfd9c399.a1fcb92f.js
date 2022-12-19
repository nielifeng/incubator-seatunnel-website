"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[6815],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=l.createContext({}),p=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return l.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=p(n),c=a,k=m["".concat(o,".").concat(c)]||m[c]||d[c]||r;return n?l.createElement(k,i(i({ref:t},s),{},{components:n})):l.createElement(k,i({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var p=2;p<r;p++)i[p]=n[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49293:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return o},metadata:function(){return p},assets:function(){return s},toc:function(){return d},default:function(){return c}});var l=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],u={},o="Assert",p={unversionedId:"connector-v2/sink/Assert",id:"version-2.3.0-beta/connector-v2/sink/Assert",title:"Assert",description:"Assert sink connector",source:"@site/versioned_docs/version-2.3.0-beta/connector-v2/sink/Assert.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Assert",permalink:"/zh-CN/docs/2.3.0-beta/connector-v2/sink/Assert",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.0-beta/connector-v2/sink/Assert.md",tags:[],version:"2.3.0-beta",frontMatter:{},sidebar:"docs",previous:{title:"Sink",permalink:"/zh-CN/docs/2.3.0-beta/category/sink-v2"},next:{title:"Clickhouse",permalink:"/zh-CN/docs/2.3.0-beta/connector-v2/sink/Clickhouse"}},s={},d=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"rules ConfigMap",id:"rules-configmap",level:3},{value:"field_rules ConfigList",id:"field_rules-configlist",level:3},{value:"field_name string",id:"field_name-string",level:3},{value:"field_type string",id:"field_type-string",level:3},{value:"field_value ConfigList",id:"field_value-configlist",level:3},{value:"rule_type string",id:"rule_type-string",level:3},{value:"rule_value double",id:"rule_value-double",level:3},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3},{value:"2.3.0-beta 2022-10-20",id:"230-beta-2022-10-20",level:3}],m={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"assert"},"Assert"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Assert sink connector")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"A flink sink plugin which can assert illegal data by user defined rules"),(0,r.kt)("h2",{id:"key-features"},"Key features"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.3.0-beta/concept/connector-v2-features"},"exactly-once")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.3.0-beta/concept/connector-v2-features"},"schema projection"))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"required"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rules"),(0,r.kt)("td",{parentName:"tr",align:null},"ConfigMap"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rules.field_rules"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rules.field_rules.field_name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rules.field_rules.field_type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rules.field_rules.field_value"),(0,r.kt)("td",{parentName:"tr",align:null},"ConfigList"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rules.field_rules.field_value.rule_type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rules.field_rules.field_value.rule_value"),(0,r.kt)("td",{parentName:"tr",align:null},"double"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rules.row_rules"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rules.row_rules.rule_type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rules.row_rules.rule_value"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"common-options"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"rules-configmap"},"rules ","[ConfigMap]"),(0,r.kt)("p",null,"Rule definition of user's available data.  Each rule represents one field validation or row num validation."),(0,r.kt)("h3",{id:"field_rules-configlist"},"field_rules ","[ConfigList]"),(0,r.kt)("p",null,"field rules for field validation"),(0,r.kt)("h3",{id:"field_name-string"},"field_name ","[string]"),(0,r.kt)("p",null,"field name\uff08string\uff09"),(0,r.kt)("h3",{id:"field_type-string"},"field_type ","[string]"),(0,r.kt)("p",null,"field type (string),  e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"string,boolean,byte,short,int,long,float,double,char,void,BigInteger,BigDecimal,Instant")),(0,r.kt)("h3",{id:"field_value-configlist"},"field_value ","[ConfigList]"),(0,r.kt)("p",null,"A list value rule define the data value validation"),(0,r.kt)("h3",{id:"rule_type-string"},"rule_type ","[string]"),(0,r.kt)("p",null,"The following rules are supported for now"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"NOT_NULL ",(0,r.kt)("inlineCode",{parentName:"li"},"value can't be null")),(0,r.kt)("li",{parentName:"ul"},"MIN ",(0,r.kt)("inlineCode",{parentName:"li"},"define the minimum value of data")),(0,r.kt)("li",{parentName:"ul"},"MAX ",(0,r.kt)("inlineCode",{parentName:"li"},"define the maximum value of data")),(0,r.kt)("li",{parentName:"ul"},"MIN_LENGTH ",(0,r.kt)("inlineCode",{parentName:"li"},"define the minimum string length of a string data")),(0,r.kt)("li",{parentName:"ul"},"MAX_LENGTH ",(0,r.kt)("inlineCode",{parentName:"li"},"define the maximum string length of a string data")),(0,r.kt)("li",{parentName:"ul"},"MIN_ROW ",(0,r.kt)("inlineCode",{parentName:"li"},"define the minimun number of rows")),(0,r.kt)("li",{parentName:"ul"},"MAX_ROW ",(0,r.kt)("inlineCode",{parentName:"li"},"define the maximum number of rows"))),(0,r.kt)("h3",{id:"rule_value-double"},"rule_value ","[double]"),(0,r.kt)("p",null,"the value related to rule type"),(0,r.kt)("h3",{id:"common-options"},"common options"),(0,r.kt)("p",null,"Sink plugin common parameters, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/2.3.0-beta/connector-v2/sink/common-options"},"Sink Common Options")," for details"),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"the whole config obey with ",(0,r.kt)("inlineCode",{parentName:"p"},"hocon")," style"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hocon"},"Assert {\n    rules =\n      {\n        row_rules = [\n          {\n            rule_type = MAX_ROW\n            rule_value = 10\n          },\n          {\n            rule_type = MIN_ROW\n            rule_value = 5\n          }\n        ],\n        field_rules = [{\n          field_name = name\n          field_type = string\n          field_value = [\n            {\n              rule_type = NOT_NULL\n            },\n            {\n              rule_type = MIN_LENGTH\n              rule_value = 5\n            },\n            {\n              rule_type = MAX_LENGTH\n              rule_value = 10\n            }\n          ]\n        }, {\n          field_name = age\n          field_type = int\n          field_value = [\n            {\n              rule_type = NOT_NULL\n            },\n            {\n              rule_type = MIN\n              rule_value = 32767\n            },\n            {\n              rule_type = MAX\n              rule_value = 2147483647\n            }\n          ]\n        }\n        ]\n      }\n\n  }\n\n")),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add Assert Sink Connector")),(0,r.kt)("h3",{id:"230-beta-2022-10-20"},"2.3.0-beta 2022-10-20"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[Improve]"," 1.Support check the number of rows (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/2844"},"2844"),") (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3031"},"3031"),"):",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"check rows not empty"),(0,r.kt)("li",{parentName:"ul"},"check minimum number of rows"),(0,r.kt)("li",{parentName:"ul"},"check maximum number of rows"))),(0,r.kt)("li",{parentName:"ul"},"[Improve]"," 2.Support direct define of data values(row) (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/2844"},"2844"),") (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3031"},"3031"),")"),(0,r.kt)("li",{parentName:"ul"},"[Improve]"," 3.Support setting parallelism as 1 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/2844"},"2844"),") (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3031"},"3031"),")")))}c.isMDXComponent=!0}}]);
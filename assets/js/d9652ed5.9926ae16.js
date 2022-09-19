"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[19238],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=l.createContext({}),s=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return l.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,k=c["".concat(o,".").concat(m)]||c[m]||d[m]||a;return n?l.createElement(k,i(i({ref:t},p),{},{components:n})):l.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var s=2;s<a;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3476:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return o},metadata:function(){return s},assets:function(){return p},toc:function(){return d},default:function(){return m}});var l=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],u={},o="Assert",s={unversionedId:"connector-v2/sink/Assert",id:"connector-v2/sink/Assert",title:"Assert",description:"Assert sink connector",source:"@site/docs/connector-v2/sink/Assert.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Assert",permalink:"/docs/connector-v2/sink/Assert",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/Assert.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Sink",permalink:"/docs/category/sink-v2"},next:{title:"Clickhouse",permalink:"/docs/connector-v2/sink/Clickhouse"}},p={},d=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"rules ConfigList",id:"rules-configlist",level:3},{value:"field_name string",id:"field_name-string",level:3},{value:"field_type string",id:"field_type-string",level:3},{value:"field_value ConfigList",id:"field_value-configlist",level:3},{value:"rule_type string",id:"rule_type-string",level:3},{value:"rule_value double",id:"rule_value-double",level:3},{value:"Example",id:"example",level:2}],c={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"assert"},"Assert"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Assert sink connector")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"A flink sink plugin which can assert illegal data by user defined rules"),(0,a.kt)("h2",{id:"key-features"},"Key features"),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,a.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once")),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,a.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"schema projection"))),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"required"),(0,a.kt)("th",{parentName:"tr",align:null},"default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rules"),(0,a.kt)("td",{parentName:"tr",align:null},"ConfigList"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rules.field_name"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rules.field_type"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rules.field_value"),(0,a.kt)("td",{parentName:"tr",align:null},"ConfigList"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rules.field_value.rule_type"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rules.field_value.rule_value"),(0,a.kt)("td",{parentName:"tr",align:null},"double"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"-")))),(0,a.kt)("h3",{id:"rules-configlist"},"rules ","[ConfigList]"),(0,a.kt)("p",null,"Rule definition of user's available data.  Each rule represents one field validation."),(0,a.kt)("h3",{id:"field_name-string"},"field_name ","[string]"),(0,a.kt)("p",null,"field name\uff08string\uff09"),(0,a.kt)("h3",{id:"field_type-string"},"field_type ","[string]"),(0,a.kt)("p",null,"field type (string),  e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"string,boolean,byte,short,int,long,float,double,char,void,BigInteger,BigDecimal,Instant")),(0,a.kt)("h3",{id:"field_value-configlist"},"field_value ","[ConfigList]"),(0,a.kt)("p",null,"A list value rule define the data value validation"),(0,a.kt)("h3",{id:"rule_type-string"},"rule_type ","[string]"),(0,a.kt)("p",null,"The following rules are supported for now"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"NOT_NULL ",(0,a.kt)("inlineCode",{parentName:"li"},"value can't be null")),(0,a.kt)("li",{parentName:"ul"},"MIN ",(0,a.kt)("inlineCode",{parentName:"li"},"define the minimum value of data")),(0,a.kt)("li",{parentName:"ul"},"MAX ",(0,a.kt)("inlineCode",{parentName:"li"},"define the maximum value of data")),(0,a.kt)("li",{parentName:"ul"},"MIN_LENGTH ",(0,a.kt)("inlineCode",{parentName:"li"},"define the minimum string length of a string data")),(0,a.kt)("li",{parentName:"ul"},"MAX_LENGTH ",(0,a.kt)("inlineCode",{parentName:"li"},"define the maximum string length of a string data"))),(0,a.kt)("h3",{id:"rule_value-double"},"rule_value ","[double]"),(0,a.kt)("p",null,"the value related to rule type"),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"the whole config obey with ",(0,a.kt)("inlineCode",{parentName:"p"},"hocon")," style"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hocon"},"Assert {\n    rules = \n        [{\n            field_name = name\n            field_type = string\n            field_value = [\n                {\n                    rule_type = NOT_NULL\n                },\n                {\n                    rule_type = MIN_LENGTH\n                    rule_value = 3\n                },\n                {\n                     rule_type = MAX_LENGTH\n                     rule_value = 5\n                }\n            ]\n        },{\n            field_name = age\n            field_type = int\n            field_value = [\n                {\n                    rule_type = NOT_NULL\n                },\n                {\n                    rule_type = MIN\n                    rule_value = 10\n                },\n                {\n                     rule_type = MAX\n                     rule_value = 20\n                }\n            ]\n        }\n        ]\n    \n}\n\n")))}m.isMDXComponent=!0}}]);
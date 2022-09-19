"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[81935],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||i;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47576:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return m},toc:function(){return u},default:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={},p="Kafka",s={unversionedId:"flink/configuration/source-plugins/Kafka",id:"version-2.1.0/flink/configuration/source-plugins/Kafka",title:"Kafka",description:"Source plugin : Kafka [Flink]",source:"@site/versioned_docs/version-2.1.0/flink/configuration/source-plugins/Kafka.md",sourceDirName:"flink/configuration/source-plugins",slug:"/flink/configuration/source-plugins/Kafka",permalink:"/docs/2.1.0/flink/configuration/source-plugins/Kafka",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.0/flink/configuration/source-plugins/Kafka.md",tags:[],version:"2.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Jdbc",permalink:"/docs/2.1.0/flink/configuration/source-plugins/Jdbc"},next:{title:"Socket",permalink:"/docs/2.1.0/flink/configuration/source-plugins/Socket"}},m={},u=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"topics string",id:"topics-string",level:3},{value:"consumer.group.id string",id:"consumergroupid-string",level:3},{value:"consumer.bootstrap.servers string",id:"consumerbootstrapservers-string",level:3},{value:"format.type string",id:"formattype-string",level:3},{value:"format.* string",id:"format-string",level:3},{value:"schema string",id:"schema-string",level:3},{value:"consumer.* string",id:"consumer-string",level:3},{value:"rowtime.field string",id:"rowtimefield-string",level:3},{value:"watermark long",id:"watermark-long",level:3},{value:"offset.reset string",id:"offsetreset-string",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Examples",id:"examples",level:2}],d={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"kafka"},"Kafka"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Source plugin : Kafka ","[Flink]")),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"To consume data from ",(0,i.kt)("inlineCode",{parentName:"p"},"Kafka")," , the supported ",(0,i.kt)("inlineCode",{parentName:"p"},"Kafka version >= 0.10.0")," ."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"topics"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"consumer.group.id"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"consumer.bootstrap.servers"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"schema"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"format.type"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"format.*"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"consumer.*"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"rowtime.field"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"watermark"),(0,i.kt)("td",{parentName:"tr",align:null},"long"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"offset.reset"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"common-options"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")))),(0,i.kt)("h3",{id:"topics-string"},"topics ","[string]"),(0,i.kt)("p",null,"Kafka topic name. If there are multiple topics, use ",(0,i.kt)("inlineCode",{parentName:"p"},",")," to split, for example: ",(0,i.kt)("inlineCode",{parentName:"p"},'"tpc1,tpc2"')," ."),(0,i.kt)("h3",{id:"consumergroupid-string"},"consumer.group.id ","[string]"),(0,i.kt)("p",null,"Kafka consumer group id, used to distinguish different consumer groups."),(0,i.kt)("h3",{id:"consumerbootstrapservers-string"},"consumer.bootstrap.servers ","[string]"),(0,i.kt)("p",null,"Kafka cluster address, separated by ",(0,i.kt)("inlineCode",{parentName:"p"},",")),(0,i.kt)("h3",{id:"formattype-string"},"format.type ","[string]"),(0,i.kt)("p",null,"Currently supports three formats"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"json")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"csv")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"avro"))),(0,i.kt)("h3",{id:"format-string"},"format.* ","[string]"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"csv")," format uses this parameter to set the separator and so on. For example, set the column delimiter to ",(0,i.kt)("inlineCode",{parentName:"p"},"\\t")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"format.field-delimiter=\\\\t")),(0,i.kt)("h3",{id:"schema-string"},"schema ","[string]"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"csv"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"schema")," of ",(0,i.kt)("inlineCode",{parentName:"li"},"csv")," is a string of ",(0,i.kt)("inlineCode",{parentName:"li"},"jsonArray")," , such as ",(0,i.kt)("inlineCode",{parentName:"li"},'"[{\\"field\\":\\"name\\",\\"type\\":\\"string\\"},{\\"field\\":\\"age\\ ",\\"type\\":\\"int\\"}]"')," ."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"json"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"schema")," parameter of ",(0,i.kt)("inlineCode",{parentName:"li"},"json")," is to provide a ",(0,i.kt)("inlineCode",{parentName:"li"},"json string")," of the original data, and the ",(0,i.kt)("inlineCode",{parentName:"li"},"schema")," can be automatically generated, but the original data with the most complete content needs to be provided, otherwise the fields will be lost."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"avro"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"schema")," parameter of ",(0,i.kt)("inlineCode",{parentName:"p"},"avro")," is to provide a standard ",(0,i.kt)("inlineCode",{parentName:"p"},"avro schema JSON string")," , such as ",(0,i.kt)("inlineCode",{parentName:"p"},'{\\"name\\":\\"test\\",\\"type\\":\\"record\\",\\"fields\\":[{ \\"name\\":\\"name\\",\\"type\\":\\"string\\"},{\\"name\\":\\"age\\",\\"type\\":\\"long\\"} ,{\\"name\\":\\"addrs\\",\\"type\\":{\\"name\\":\\"addrs\\",\\"type\\":\\"record\\",\\"fields\\" :[{\\"name\\":\\"province\\",\\"type\\":\\"string\\"},{\\"name\\":\\"city\\",\\"type\\":\\"string \\"}]}}]}'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To learn more about how the ",(0,i.kt)("inlineCode",{parentName:"p"},"Avro Schema JSON string")," should be defined, please refer to: ",(0,i.kt)("a",{parentName:"p",href:"https://avro.apache.org/docs/current/spec.html"},"https://avro.apache.org/docs/current/spec.html")))))),(0,i.kt)("h3",{id:"consumer-string"},"consumer.* ","[string]"),(0,i.kt)("p",null,"In addition to the above necessary parameters that must be specified by the ",(0,i.kt)("inlineCode",{parentName:"p"},"Kafka consumer")," client, users can also specify multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"consumer")," client non-mandatory parameters, covering ",(0,i.kt)("a",{parentName:"p",href:"https://kafka.apache.org/documentation.html#consumerconfigs"},"all consumer parameters specified in the official Kafka document"),"."),(0,i.kt)("p",null,"The way to specify parameters is to add the prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"consumer.")," to the original parameter name. For example, the way to specify ",(0,i.kt)("inlineCode",{parentName:"p"},"ssl.key.password")," is: ",(0,i.kt)("inlineCode",{parentName:"p"},"consumer.ssl.key.password = xxxx")," . If these non-essential parameters are not specified, they will use the default values given in the official Kafka documentation."),(0,i.kt)("h3",{id:"rowtimefield-string"},"rowtime.field ","[string]"),(0,i.kt)("p",null,"Set the field for generating ",(0,i.kt)("inlineCode",{parentName:"p"},"watermark")),(0,i.kt)("h3",{id:"watermark-long"},"watermark ","[long]"),(0,i.kt)("p",null,"Set the allowable delay for generating ",(0,i.kt)("inlineCode",{parentName:"p"},"watermark")),(0,i.kt)("h3",{id:"offsetreset-string"},"offset.reset ","[string]"),(0,i.kt)("p",null,"The consumer's initial ",(0,i.kt)("inlineCode",{parentName:"p"},"offset")," is only valid for new consumers. There are three modes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"latest"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Start consumption from the latest offset"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"earliest"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Start consumption from the earliest offset"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"specific"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Start consumption from the specified ",(0,i.kt)("inlineCode",{parentName:"li"},"offset")," , and specify the ",(0,i.kt)("inlineCode",{parentName:"li"},"start offset")," of each partition at this time. The setting method is through ",(0,i.kt)("inlineCode",{parentName:"li"},'offset.reset.specific="{0:111,1:123}"'))))),(0,i.kt)("h3",{id:"common-options-string"},"common options ","[string]"),(0,i.kt)("p",null,"Source plugin common parameters, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.1.0/flink/configuration/source-plugins/source-plugin"},"Source Plugin")," for details"),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'  KafkaTableStream {\n    consumer.bootstrap.servers = "127.0.0.1:9092"\n    consumer.group.id = "seatunnel5"\n    topics = test\n    result_table_name = test\n    format.type = csv\n    schema = "[{\\"field\\":\\"name\\",\\"type\\":\\"string\\"},{\\"field\\":\\"age\\",\\"type\\":\\"int\\"}]"\n    format.field-delimiter = ";"\n    format.allow-comments = "true"\n    format.ignore-parse-errors = "true"\n  }\n')))}c.isMDXComponent=!0}}]);
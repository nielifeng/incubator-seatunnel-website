"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[27414],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),k=p(n),m=r,d=k["".concat(s,".").concat(m)]||k[m]||u[m]||i;return n?a.createElement(d,l(l({ref:e},c),{},{components:n})):a.createElement(d,l({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},81029:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={},s="Kafka",p={unversionedId:"connector-v2/sink/Kafka",id:"connector-v2/sink/Kafka",title:"Kafka",description:"Kafka sink connector",source:"@site/docs/connector-v2/sink/Kafka.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Kafka",permalink:"/zh-CN/docs/connector-v2/sink/Kafka",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/Kafka.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"JDBC",permalink:"/zh-CN/docs/connector-v2/sink/Jdbc"},next:{title:"Kudu",permalink:"/zh-CN/docs/connector-v2/sink/Kudu"}},c={},u=[{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"topic string",id:"topic-string",level:3},{value:"bootstrap.servers string",id:"bootstrapservers-string",level:3},{value:"kafka.* kafka producer config",id:"kafka-kafka-producer-config",level:3},{value:"semantic string",id:"semantic-string",level:3},{value:"partition_key string",id:"partition_key-string",level:3},{value:"partition int",id:"partition-int",level:3},{value:"assign_partitions list",id:"assign_partitions-list",level:3},{value:"transaction_prefix string",id:"transaction_prefix-string",level:3},{value:"common options",id:"common-options",level:3},{value:"Examples",id:"examples",level:2},{value:"change log",id:"change-log",level:3},{value:"next version",id:"next-version",level:4}],k={toc:u};function m(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"kafka"},"Kafka"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Kafka sink connector"),(0,i.kt)("h2",{parentName:"blockquote",id:"description"},"Description")),(0,i.kt)("p",null,"Write Rows to a Kafka topic."),(0,i.kt)("h2",{id:"key-features"},"Key features"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"exactly-once"))),(0,i.kt)("p",null,"By default, we will use 2pc to guarantee the message is sent to kafka exactly once."),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"schema projection"))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"topic"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bootstrap.servers"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"kafka.*"),(0,i.kt)("td",{parentName:"tr",align:null},"kafka producer config"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"semantic"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"NON")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"partition_key"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"partition"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"assign_partitions"),(0,i.kt)("td",{parentName:"tr",align:null},"list"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"transaction_prefix"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"common-options"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")))),(0,i.kt)("h3",{id:"topic-string"},"topic ","[string]"),(0,i.kt)("p",null,"Kafka Topic."),(0,i.kt)("h3",{id:"bootstrapservers-string"},"bootstrap.servers ","[string]"),(0,i.kt)("p",null,"Kafka Brokers List."),(0,i.kt)("h3",{id:"kafka-kafka-producer-config"},"kafka.* ","[kafka producer config]"),(0,i.kt)("p",null,"In addition to the above parameters that must be specified by the ",(0,i.kt)("inlineCode",{parentName:"p"},"Kafka producer")," client, the user can also specify multiple non-mandatory parameters for the ",(0,i.kt)("inlineCode",{parentName:"p"},"producer")," client, covering ",(0,i.kt)("a",{parentName:"p",href:"https://kafka.apache.org/documentation.html#producerconfigs"},"all the producer parameters specified in the official Kafka document"),"."),(0,i.kt)("p",null,"The way to specify the parameter is to add the prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"kafka.")," to the original parameter name. For example, the way to specify ",(0,i.kt)("inlineCode",{parentName:"p"},"request.timeout.ms")," is: ",(0,i.kt)("inlineCode",{parentName:"p"},"kafka.request.timeout.ms = 60000")," . If these non-essential parameters are not specified, they will use the default values given in the official Kafka documentation."),(0,i.kt)("h3",{id:"semantic-string"},"semantic ","[string]"),(0,i.kt)("p",null,"Semantics that can be chosen EXACTLY_ONCE/AT_LEAST_ONCE/NON, default NON."),(0,i.kt)("p",null,"In EXACTLY_ONCE, producer will write all messages in a Kafka transaction that will be committed to Kafka on a checkpoint."),(0,i.kt)("p",null,"In AT_LEAST_ONCE, producer will wait for all outstanding messages in the Kafka buffers to be acknowledged by the Kafka producer on a checkpoint."),(0,i.kt)("p",null,"NON does not provide any guarantees: messages may be lost in case of issues on the Kafka broker and messages may be duplicated."),(0,i.kt)("h3",{id:"partition_key-string"},"partition_key ","[string]"),(0,i.kt)("p",null,"Configure which field is used as the key of the kafka message."),(0,i.kt)("p",null,"For example, if you want to use value of a field from upstream data as key, you can assign it to the field name."),(0,i.kt)("p",null,"Upstream data is the following:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"age"),(0,i.kt)("th",{parentName:"tr",align:null},"data"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Jack"),(0,i.kt)("td",{parentName:"tr",align:null},"16"),(0,i.kt)("td",{parentName:"tr",align:null},"data-example1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Mary"),(0,i.kt)("td",{parentName:"tr",align:null},"23"),(0,i.kt)("td",{parentName:"tr",align:null},"data-example2")))),(0,i.kt)("p",null,"If name is set as the key, then the hash value of the name column will determine which partition the message is sent to."),(0,i.kt)("p",null,"If the field name does not exist in the upstream data, the configured parameter will be used as the key."),(0,i.kt)("h3",{id:"partition-int"},"partition ","[int]"),(0,i.kt)("p",null,"We can specify the partition, all messages will be sent to this partition."),(0,i.kt)("h3",{id:"assign_partitions-list"},"assign_partitions ","[list]"),(0,i.kt)("p",null,"We can decide which partition to send based on the content of the message. The function of this parameter is to distribute information."),(0,i.kt)("p",null,"For example, there are five partitions in total, and the assign_partitions field in config is as follows:\nassign_partitions = ",'["shoe", "clothing"]'),(0,i.kt)("p",null,'Then the message containing "shoe" will be sent to partition zero ,because "shoe" is subscripted as zero in assign_partitions, and the message containing "clothing" will be sent to partition one.For other messages, the hash algorithm will be used to divide them into the remaining partitions.'),(0,i.kt)("p",null,"This function by ",(0,i.kt)("inlineCode",{parentName:"p"},"MessageContentPartitioner")," class implements ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.kafka.clients.producer.Partitioner")," interface.If we need custom partitions, we need to implement this interface as well."),(0,i.kt)("h3",{id:"transaction_prefix-string"},"transaction_prefix ","[string]"),(0,i.kt)("p",null,"If semantic is specified as EXACTLY_ONCE, the producer will write all messages in a Kafka transaction.\nKafka distinguishes different transactions by different transactionId. This parameter is prefix of  kafka  transactionId, make sure different job use different prefix."),(0,i.kt)("h3",{id:"common-options"},"common options"),(0,i.kt)("p",null,"Sink plugin common parameters, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/connector-v2/sink/common-options"},"Sink Common Options")," for details."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},'sink {\n\n  kafka {\n      topic = "seatunnel"\n      bootstrap.servers = "localhost:9092"\n      partition = 3\n      kafka.request.timeout.ms = 60000\n      semantics = EXACTLY_ONCE\n  }\n  \n}\n')),(0,i.kt)("h3",{id:"change-log"},"change log"),(0,i.kt)("h4",{id:"next-version"},"next version"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add kafka sink doc "),(0,i.kt)("li",{parentName:"ul"},"New feature : Kafka specified partition to send "),(0,i.kt)("li",{parentName:"ul"},"New feature : Determine the partition that kafka send message based on the message content"),(0,i.kt)("li",{parentName:"ul"},"New feature : Configure which field is used as the key of the kafka message")))}m.isMDXComponent=!0}}]);
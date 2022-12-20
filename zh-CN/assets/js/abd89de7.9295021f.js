"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[27414],{3905:function(t,e,a){a.d(e,{Zo:function(){return k},kt:function(){return m}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},k=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,k=o(t,["components","mdxType","originalType","parentName"]),c=p(a),m=r,d=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return a?n.createElement(d,l(l({ref:e},k),{},{components:a})):n.createElement(d,l({ref:e},k))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},81029:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return k},toc:function(){return u},default:function(){return m}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],o={},s="Kafka",p={unversionedId:"connector-v2/sink/Kafka",id:"connector-v2/sink/Kafka",title:"Kafka",description:"Kafka sink connector",source:"@site/docs/connector-v2/sink/Kafka.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Kafka",permalink:"/zh-CN/docs/connector-v2/sink/Kafka",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/Kafka.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"JDBC",permalink:"/zh-CN/docs/connector-v2/sink/Jdbc"},next:{title:"Kudu",permalink:"/zh-CN/docs/connector-v2/sink/Kudu"}},k={},u=[{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"topic string",id:"topic-string",level:3},{value:"bootstrap.servers string",id:"bootstrapservers-string",level:3},{value:"kafka.* kafka producer config",id:"kafka-kafka-producer-config",level:3},{value:"semantic string",id:"semantic-string",level:3},{value:"partition_key_fields array",id:"partition_key_fields-array",level:3},{value:"partition int",id:"partition-int",level:3},{value:"assign_partitions array",id:"assign_partitions-array",level:3},{value:"transaction_prefix string",id:"transaction_prefix-string",level:3},{value:"format",id:"format",level:3},{value:"field_delimiter",id:"field_delimiter",level:3},{value:"common options config",id:"common-options-config",level:3},{value:"Examples",id:"examples",level:2},{value:"AWS MSK SASL/SCRAM",id:"aws-msk-saslscram",level:3},{value:"AWS MSK IAM",id:"aws-msk-iam",level:3},{value:"Changelog",id:"changelog",level:2},{value:"2.3.0-beta 2022-10-20",id:"230-beta-2022-10-20",level:3},{value:"next version",id:"next-version",level:3}],c={toc:u};function m(t){var e=t.components,a=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"kafka"},"Kafka"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Kafka sink connector"),(0,i.kt)("h2",{parentName:"blockquote",id:"description"},"Description")),(0,i.kt)("p",null,"Write Rows to a Kafka topic."),(0,i.kt)("h2",{id:"key-features"},"Key features"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"exactly-once"))),(0,i.kt)("p",null,"By default, we will use 2pc to guarantee the message is sent to kafka exactly once."),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"schema projection"))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"topic"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bootstrap.servers"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"kafka.*"),(0,i.kt)("td",{parentName:"tr",align:null},"kafka producer config"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"semantic"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"NON")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"partition_key_fields"),(0,i.kt)("td",{parentName:"tr",align:null},"array"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"partition"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"assign_partitions"),(0,i.kt)("td",{parentName:"tr",align:null},"array"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"transaction_prefix"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"format"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"json")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"field_delimiter"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},",")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"common-options"),(0,i.kt)("td",{parentName:"tr",align:null},"config"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")))),(0,i.kt)("h3",{id:"topic-string"},"topic ","[string]"),(0,i.kt)("p",null,"Kafka Topic."),(0,i.kt)("h3",{id:"bootstrapservers-string"},"bootstrap.servers ","[string]"),(0,i.kt)("p",null,"Kafka Brokers List."),(0,i.kt)("h3",{id:"kafka-kafka-producer-config"},"kafka.* ","[kafka producer config]"),(0,i.kt)("p",null,"In addition to the above parameters that must be specified by the ",(0,i.kt)("inlineCode",{parentName:"p"},"Kafka producer")," client, the user can also specify multiple non-mandatory parameters for the ",(0,i.kt)("inlineCode",{parentName:"p"},"producer")," client, covering ",(0,i.kt)("a",{parentName:"p",href:"https://kafka.apache.org/documentation.html#producerconfigs"},"all the producer parameters specified in the official Kafka document"),"."),(0,i.kt)("p",null,"The way to specify the parameter is to add the prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"kafka.")," to the original parameter name. For example, the way to specify ",(0,i.kt)("inlineCode",{parentName:"p"},"request.timeout.ms")," is: ",(0,i.kt)("inlineCode",{parentName:"p"},"kafka.request.timeout.ms = 60000")," . If these non-essential parameters are not specified, they will use the default values given in the official Kafka documentation."),(0,i.kt)("h3",{id:"semantic-string"},"semantic ","[string]"),(0,i.kt)("p",null,"Semantics that can be chosen EXACTLY_ONCE/AT_LEAST_ONCE/NON, default NON."),(0,i.kt)("p",null,"In EXACTLY_ONCE, producer will write all messages in a Kafka transaction that will be committed to Kafka on a checkpoint."),(0,i.kt)("p",null,"In AT_LEAST_ONCE, producer will wait for all outstanding messages in the Kafka buffers to be acknowledged by the Kafka producer on a checkpoint."),(0,i.kt)("p",null,"NON does not provide any guarantees: messages may be lost in case of issues on the Kafka broker and messages may be duplicated."),(0,i.kt)("h3",{id:"partition_key_fields-array"},"partition_key_fields ","[array]"),(0,i.kt)("p",null,"Configure which fields are used as the key of the kafka message."),(0,i.kt)("p",null,"For example, if you want to use value of fields from upstream data as key, you can assign field names to this property."),(0,i.kt)("p",null,"Upstream data is the following:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"age"),(0,i.kt)("th",{parentName:"tr",align:null},"data"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Jack"),(0,i.kt)("td",{parentName:"tr",align:null},"16"),(0,i.kt)("td",{parentName:"tr",align:null},"data-example1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Mary"),(0,i.kt)("td",{parentName:"tr",align:null},"23"),(0,i.kt)("td",{parentName:"tr",align:null},"data-example2")))),(0,i.kt)("p",null,"If name is set as the key, then the hash value of the name column will determine which partition the message is sent to."),(0,i.kt)("p",null,"If not set partition key fields, the null message key will be sent to."),(0,i.kt)("h3",{id:"partition-int"},"partition ","[int]"),(0,i.kt)("p",null,"We can specify the partition, all messages will be sent to this partition."),(0,i.kt)("h3",{id:"assign_partitions-array"},"assign_partitions ","[array]"),(0,i.kt)("p",null,"We can decide which partition to send based on the content of the message. The function of this parameter is to distribute information."),(0,i.kt)("p",null,"For example, there are five partitions in total, and the assign_partitions field in config is as follows:\nassign_partitions = ",'["shoe", "clothing"]'),(0,i.kt)("p",null,'Then the message containing "shoe" will be sent to partition zero ,because "shoe" is subscripted as zero in assign_partitions, and the message containing "clothing" will be sent to partition one.For other messages, the hash algorithm will be used to divide them into the remaining partitions.'),(0,i.kt)("p",null,"This function by ",(0,i.kt)("inlineCode",{parentName:"p"},"MessageContentPartitioner")," class implements ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.kafka.clients.producer.Partitioner")," interface.If we need custom partitions, we need to implement this interface as well."),(0,i.kt)("h3",{id:"transaction_prefix-string"},"transaction_prefix ","[string]"),(0,i.kt)("p",null,"If semantic is specified as EXACTLY_ONCE, the producer will write all messages in a Kafka transaction.\nKafka distinguishes different transactions by different transactionId. This parameter is prefix of  kafka  transactionId, make sure different job use different prefix."),(0,i.kt)("h3",{id:"format"},"format"),(0,i.kt)("p",null,'Data format. The default format is json. Optional text format. The default field separator is ",".\nIf you customize the delimiter, add the "field_delimiter" option.'),(0,i.kt)("h3",{id:"field_delimiter"},"field_delimiter"),(0,i.kt)("p",null,"Customize the field delimiter for data format."),(0,i.kt)("h3",{id:"common-options-config"},"common options ","[config]"),(0,i.kt)("p",null,"Sink plugin common parameters, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/connector-v2/sink/common-options"},"Sink Common Options")," for details."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},'sink {\n\n  kafka {\n      topic = "seatunnel"\n      bootstrap.servers = "localhost:9092"\n      partition = 3\n      format = json\n      kafka.request.timeout.ms = 60000\n      semantics = EXACTLY_ONCE\n  }\n  \n}\n')),(0,i.kt)("h3",{id:"aws-msk-saslscram"},"AWS MSK SASL/SCRAM"),(0,i.kt)("p",null,"Replace the following ",(0,i.kt)("inlineCode",{parentName:"p"},"${username}")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"${password}")," with the configuration values in AWS MSK."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},'sink {\n  kafka {\n      topic = "seatunnel"\n      bootstrap.servers = "localhost:9092"\n      partition = 3\n      format = json\n      kafka.request.timeout.ms = 60000\n      semantics = EXACTLY_ONCE\n      kafka.security.protocol=SASL_SSL\n      kafka.sasl.mechanism=SCRAM-SHA-512\n      kafka.sasl.jaas.config="org.apache.kafka.common.security.scram.ScramLoginModule required \\nusername=${username}\\npassword=${password};"\n  }\n  \n}\n')),(0,i.kt)("h3",{id:"aws-msk-iam"},"AWS MSK IAM"),(0,i.kt)("p",null,"Download ",(0,i.kt)("inlineCode",{parentName:"p"},"aws-msk-iam-auth-1.1.5.jar")," from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/aws/aws-msk-iam-auth/releases"},"https://github.com/aws/aws-msk-iam-auth/releases")," and put it in ",(0,i.kt)("inlineCode",{parentName:"p"},"$SEATUNNEL_HOME/plugin/kafka/lib")," dir."),(0,i.kt)("p",null,"Please ensure the IAM policy have ",(0,i.kt)("inlineCode",{parentName:"p"},'"kafka-cluster:Connect",'),". Like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},'"Effect": "Allow",\n"Action": [\n    "kafka-cluster:Connect",\n    "kafka-cluster:AlterCluster",\n    "kafka-cluster:DescribeCluster"\n],\n')),(0,i.kt)("p",null,"Sink Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},'sink {\n  kafka {\n      topic = "seatunnel"\n      bootstrap.servers = "localhost:9092"\n      partition = 3\n      format = json\n      kafka.request.timeout.ms = 60000\n      semantics = EXACTLY_ONCE\n      kafka.security.protocol=SASL_SSL\n      kafka.sasl.mechanism=AWS_MSK_IAM\n      kafka.sasl.jaas.config="software.amazon.msk.auth.iam.IAMLoginModule required;"\n      kafka.sasl.client.callback.handler.class="software.amazon.msk.auth.iam.IAMClientCallbackHandler"\n  }\n  \n}\n')),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("h3",{id:"230-beta-2022-10-20"},"2.3.0-beta 2022-10-20"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add Kafka Sink Connector")),(0,i.kt)("h3",{id:"next-version"},"next version"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[Improve]"," Support to specify multiple partition keys ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3230"},"3230")),(0,i.kt)("li",{parentName:"ul"},"[Improve]"," Add text format for kafka sink connector ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3711"},"3711"))))}m.isMDXComponent=!0}}]);
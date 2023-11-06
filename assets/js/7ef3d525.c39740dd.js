"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[7464],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=c(n),m=r,d=g["".concat(l,".").concat(m)]||g[m]||u[m]||o;return n?a.createElement(d,s(s({ref:t},p),{},{components:n})):a.createElement(d,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},52478:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return p},toc:function(){return u},default:function(){return m}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),s=["components"],i={},l="Ogg Format",c={unversionedId:"connector-v2/formats/ogg-json",id:"connector-v2/formats/ogg-json",title:"Ogg Format",description:"Oracle GoldenGate (a.k.a ogg) is a managed service providing a real-time data mesh platform, which uses replication to keep data highly available, and enabling real-time analysis. Customers can design, execute, and monitor their data replication and stream data processing solutions without the need to allocate or manage compute environments. Ogg provides a format schema for changelog and supports to serialize messages using JSON.",source:"@site/docs/connector-v2/formats/ogg-json.md",sourceDirName:"connector-v2/formats",slug:"/connector-v2/formats/ogg-json",permalink:"/docs/connector-v2/formats/ogg-json",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/formats/ogg-json.md",tags:[],version:"current",frontMatter:{}},p={},u=[{value:"Kafka uses example",id:"kafka-uses-example",level:2}],g={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ogg-format"},"Ogg Format"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.oracle.com/integration/goldengate/"},"Oracle GoldenGate")," (a.k.a ogg) is a managed service providing a real-time data mesh platform, which uses replication to keep data highly available, and enabling real-time analysis. Customers can design, execute, and monitor their data replication and stream data processing solutions without the need to allocate or manage compute environments. Ogg provides a format schema for changelog and supports to serialize messages using JSON."),(0,o.kt)("p",null,"Seatunnel supports to interpret Ogg JSON messages as INSERT/UPDATE/DELETE messages into seatunnel system. This is useful in many cases to leverage this feature, such as"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    synchronizing incremental data from databases to other systems\n    auditing logs\n    real-time materialized views on databases\n    temporal join changing history of a database table and so on.\n")),(0,o.kt)("p",null,"Seatunnel also supports to encode the INSERT/UPDATE/DELETE messages in Seatunnel as Ogg JSON messages, and emit to storage like Kafka. However, currently Seatunnel can\u2019t combine UPDATE_BEFORE and UPDATE_AFTER into a single UPDATE message. Therefore, Seatunnel encodes UPDATE_BEFORE and UPDATE_AFTER as DELETE and INSERT Ogg messages."),(0,o.kt)("h1",{id:"format-options"},"Format Options"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"option"),(0,o.kt)("th",{parentName:"tr",align:null},"default"),(0,o.kt)("th",{parentName:"tr",align:null},"required"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"format"),(0,o.kt)("td",{parentName:"tr",align:null},"(none)"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify what format to use, here should be '-json'.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ogg_json.ignore-parse-errors"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"Skip fields and rows with parse errors instead of failing. Fields are set to null in case of errors.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ogg_json.database.include"),(0,o.kt)("td",{parentName:"tr",align:null},"(none)"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},'An optional regular expression to only read the specific databases changelog rows by regular matching the "database" meta field in the Canal record. The pattern string is compatible with Java\'s Pattern.')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ogg_json.table.include"),(0,o.kt)("td",{parentName:"tr",align:null},"(none)"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},'An optional regular expression to only read the specific tables changelog rows by regular matching the "table" meta field in the Canal record. The pattern string is compatible with Java\'s Pattern.')))),(0,o.kt)("h1",{id:"how-to-use-ogg-format"},"How to use Ogg format"),(0,o.kt)("h2",{id:"kafka-uses-example"},"Kafka uses example"),(0,o.kt)("p",null,"Ogg provides a unified format for changelog, here is a simple example for an update operation captured from a Oracle products table:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "before": {\n    "id": 111,\n    "name": "scooter",\n    "description": "Big 2-wheel scooter",\n    "weight": 5.18\n  },\n  "after": {\n    "id": 111,\n    "name": "scooter",\n    "description": "Big 2-wheel scooter",\n    "weight": 5.15\n  },\n  "op_type": "U",\n  "op_ts": "2020-05-13 15:40:06.000000",\n  "current_ts": "2020-05-13 15:40:07.000000",\n  "primary_keys": [\n    "id"\n  ],\n  "pos": "00000000000000000000143",\n  "table": "PRODUCTS"\n}\n')),(0,o.kt)("p",null,"Note: please refer to documentation about the meaning of each fields."),(0,o.kt)("p",null,"The Oracle products table has 4 columns (id, name, description and weight).\nThe above JSON message is an update change event on the products table where the weight value of the row with id = 111 is changed from 5.18 to 5.15.\nAssuming the messages have been synchronized to Kafka topic products_binlog, then we can use the following Seatunnel to consume this topic and interpret the change events."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'env {\n    execution.parallelism = 1\n    job.mode = "STREAMING"\n}\nsource {\n  Kafka {\n    bootstrap.servers = "127.0.0.1:9092"\n    topic = "ogg"\n    result_table_name = "kafka_name"\n    start_mode = earliest\n    schema = {\n      fields {\n           id = "int"\n           name = "string"\n           description = "string"\n           weight = "double"\n      }\n    },\n    format = ogg_json\n  }\n}\nsink {\n    jdbc {\n        url = "jdbc:mysql://127.0.0.1/test"\n        driver = "com.mysql.cj.jdbc.Driver"\n        user = "root"\n        password = "12345678"\n        table = "ogg"\n        primary_keys = ["id"]\n    }\n}\n')))}m.isMDXComponent=!0}}]);
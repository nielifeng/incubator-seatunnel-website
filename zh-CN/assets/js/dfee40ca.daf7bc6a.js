"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[63028],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return k}});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=d(n),k=l,c=u["".concat(p,".").concat(k)]||u[k]||m[k]||r;return n?a.createElement(c,i(i({ref:e},s),{},{components:n})):a.createElement(c,i({ref:e},s))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},24395:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return d},assets:function(){return s},toc:function(){return m},default:function(){return k}});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),i=["components"],o={},p="OssFile",d={unversionedId:"connector-v2/source/OssFile",id:"connector-v2/source/OssFile",title:"OssFile",description:"Oss file source connector",source:"@site/docs/connector-v2/source/OssFile.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/OssFile",permalink:"/zh-CN/docs/connector-v2/source/OssFile",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/source/OssFile.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Oracle",permalink:"/zh-CN/docs/connector-v2/source/Oracle"},next:{title:"OssJindoFile",permalink:"/zh-CN/docs/connector-v2/source/OssJindoFile"}},s={},m=[{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Usage Dependency",id:"usage-dependency",level:2},{value:"For Spark/Flink Engine",id:"for-sparkflink-engine",level:3},{value:"For SeaTunnel Zeta Engine",id:"for-seatunnel-zeta-engine",level:3},{value:"Key features",id:"key-features",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2},{value:"JSON File Type",id:"json-file-type",level:3},{value:"Text Or CSV File Type",id:"text-or-csv-file-type",level:3},{value:"Orc File Type",id:"orc-file-type",level:3},{value:"Parquet File Type",id:"parquet-file-type",level:3},{value:"Options",id:"options",level:2},{value:"compress_codec string",id:"compress_codec-string",level:3},{value:"file_filter_pattern string",id:"file_filter_pattern-string",level:3},{value:"schema config",id:"schema-config",level:3},{value:"fields Config",id:"fields-config",level:4},{value:"How to Create a Oss Data Synchronization Jobs",id:"how-to-create-a-oss-data-synchronization-jobs",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3},{value:"2.3.0-beta 2022-10-20",id:"230-beta-2022-10-20",level:3},{value:"Tips",id:"tips",level:3}],u={toc:m};function k(t){var e=t.components,n=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ossfile"},"OssFile"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Oss file source connector")),(0,r.kt)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Spark",(0,r.kt)("br",null),"\nFlink",(0,r.kt)("br",null),"\nSeaTunnel Zeta",(0,r.kt)("br",null))),(0,r.kt)("h2",{id:"usage-dependency"},"Usage Dependency"),(0,r.kt)("h3",{id:"for-sparkflink-engine"},"For Spark/Flink Engine"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You must ensure your spark/flink cluster already integrated hadoop. The tested hadoop version is 2.x."),(0,r.kt)("li",{parentName:"ol"},"You must ensure ",(0,r.kt)("inlineCode",{parentName:"li"},"hadoop-aliyun-xx.jar"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"aliyun-sdk-oss-xx.jar")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"jdom-xx.jar")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"${SEATUNNEL_HOME}/plugins/")," dir and the version of ",(0,r.kt)("inlineCode",{parentName:"li"},"hadoop-aliyun")," jar need equals your hadoop version which used in spark/flink and ",(0,r.kt)("inlineCode",{parentName:"li"},"aliyun-sdk-oss-xx.jar")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"jdom-xx.jar")," version needs to be the version corresponding to the ",(0,r.kt)("inlineCode",{parentName:"li"},"hadoop-aliyun")," version. Eg: ",(0,r.kt)("inlineCode",{parentName:"li"},"hadoop-aliyun-3.1.4.jar")," dependency ",(0,r.kt)("inlineCode",{parentName:"li"},"aliyun-sdk-oss-3.4.1.jar")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"jdom-1.1.jar"),".")),(0,r.kt)("h3",{id:"for-seatunnel-zeta-engine"},"For SeaTunnel Zeta Engine"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You must ensure ",(0,r.kt)("inlineCode",{parentName:"li"},"seatunnel-hadoop3-3.1.4-uber.jar"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"aliyun-sdk-oss-3.4.1.jar"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"hadoop-aliyun-3.1.4.jar")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"jdom-1.1.jar")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"${SEATUNNEL_HOME}/lib/")," dir.")),(0,r.kt)("h2",{id:"key-features"},"Key features"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"batch")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"stream")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"exactly-once"))),(0,r.kt)("p",null,"Read all the data in a split in a pollNext call. What splits are read will be saved in snapshot."),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"column projection")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"parallelism")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"support user-defined split")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","file format type",(0,r.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","text"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","csv"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","parquet"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","orc"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","json"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","excel")))),(0,r.kt)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,r.kt)("p",null,"Data type mapping is related to the type of file being read, We supported as the following file types:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"text")," ",(0,r.kt)("inlineCode",{parentName:"p"},"csv")," ",(0,r.kt)("inlineCode",{parentName:"p"},"parquet")," ",(0,r.kt)("inlineCode",{parentName:"p"},"orc")," ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," ",(0,r.kt)("inlineCode",{parentName:"p"},"excel")),(0,r.kt)("h3",{id:"json-file-type"},"JSON File Type"),(0,r.kt)("p",null,"If you assign file type to ",(0,r.kt)("inlineCode",{parentName:"p"},"json"),", you should also assign schema option to tell connector how to parse data to the row you want."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("p",null,"upstream data is the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{"code":  200, "data":  "get success", "success":  true}\n\n')),(0,r.kt)("p",null,"You can also save multiple pieces of data in one file and split them by newline:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"lines",lines:!0},'\n{"code":  200, "data":  "get success", "success":  true}\n{"code":  300, "data":  "get failed", "success":  false}\n\n')),(0,r.kt)("p",null,"you should assign schema as the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hocon"},"\nschema {\n    fields {\n        code = int\n        data = string\n        success = boolean\n    }\n}\n\n")),(0,r.kt)("p",null,"connector will generate data as the following:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"code"),(0,r.kt)("th",{parentName:"tr",align:null},"data"),(0,r.kt)("th",{parentName:"tr",align:null},"success"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"get success"),(0,r.kt)("td",{parentName:"tr",align:null},"true")))),(0,r.kt)("h3",{id:"text-or-csv-file-type"},"Text Or CSV File Type"),(0,r.kt)("p",null,"If you assign file type to ",(0,r.kt)("inlineCode",{parentName:"p"},"text")," ",(0,r.kt)("inlineCode",{parentName:"p"},"csv"),", you can choose to specify the schema information or not."),(0,r.kt)("p",null,"For example, upstream data is the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\ntyrantlucifer#26#male\n\n")),(0,r.kt)("p",null,"If you do not assign data schema connector will treat the upstream data as the following:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"content"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tyrantlucifer#26#male")))),(0,r.kt)("p",null,"If you assign data schema, you should also assign the option ",(0,r.kt)("inlineCode",{parentName:"p"},"field_delimiter")," too except CSV file type"),(0,r.kt)("p",null,"you should assign schema and delimiter as the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hocon"},'\nfield_delimiter = "#"\nschema {\n    fields {\n        name = string\n        age = int\n        gender = string \n    }\n}\n\n')),(0,r.kt)("p",null,"connector will generate data as the following:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"age"),(0,r.kt)("th",{parentName:"tr",align:null},"gender"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tyrantlucifer"),(0,r.kt)("td",{parentName:"tr",align:null},"26"),(0,r.kt)("td",{parentName:"tr",align:null},"male")))),(0,r.kt)("h3",{id:"orc-file-type"},"Orc File Type"),(0,r.kt)("p",null,"If you assign file type to ",(0,r.kt)("inlineCode",{parentName:"p"},"parquet")," ",(0,r.kt)("inlineCode",{parentName:"p"},"orc"),", schema option not required, connector can find the schema of upstream data automatically."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Orc Data type"),(0,r.kt)("th",{parentName:"tr",align:null},"SeaTunnel Data type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.kt)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INT"),(0,r.kt)("td",{parentName:"tr",align:null},"INT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BYTE"),(0,r.kt)("td",{parentName:"tr",align:null},"BYTE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SHORT"),(0,r.kt)("td",{parentName:"tr",align:null},"SHORT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LONG"),(0,r.kt)("td",{parentName:"tr",align:null},"LONG")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.kt)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.kt)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BINARY"),(0,r.kt)("td",{parentName:"tr",align:null},"BINARY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STRING",(0,r.kt)("br",null),"VARCHAR",(0,r.kt)("br",null),"CHAR",(0,r.kt)("br",null)),(0,r.kt)("td",{parentName:"tr",align:null},"STRING")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATE"),(0,r.kt)("td",{parentName:"tr",align:null},"LOCAL_DATE_TYPE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP"),(0,r.kt)("td",{parentName:"tr",align:null},"LOCAL_DATE_TIME_TYPE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DECIMAL"),(0,r.kt)("td",{parentName:"tr",align:null},"DECIMAL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LIST(STRING)"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING_ARRAY_TYPE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LIST(BOOLEAN)"),(0,r.kt)("td",{parentName:"tr",align:null},"BOOLEAN_ARRAY_TYPE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LIST(TINYINT)"),(0,r.kt)("td",{parentName:"tr",align:null},"BYTE_ARRAY_TYPE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LIST(SMALLINT)"),(0,r.kt)("td",{parentName:"tr",align:null},"SHORT_ARRAY_TYPE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LIST(INT)"),(0,r.kt)("td",{parentName:"tr",align:null},"INT_ARRAY_TYPE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LIST(BIGINT)"),(0,r.kt)("td",{parentName:"tr",align:null},"LONG_ARRAY_TYPE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LIST(FLOAT)"),(0,r.kt)("td",{parentName:"tr",align:null},"FLOAT_ARRAY_TYPE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LIST(DOUBLE)"),(0,r.kt)("td",{parentName:"tr",align:null},"DOUBLE_ARRAY_TYPE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Map<K,V>"),(0,r.kt)("td",{parentName:"tr",align:null},"MapType, This type of K and V will transform to SeaTunnel type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STRUCT"),(0,r.kt)("td",{parentName:"tr",align:null},"SeaTunnelRowType")))),(0,r.kt)("h3",{id:"parquet-file-type"},"Parquet File Type"),(0,r.kt)("p",null,"If you assign file type to ",(0,r.kt)("inlineCode",{parentName:"p"},"parquet")," ",(0,r.kt)("inlineCode",{parentName:"p"},"orc"),", schema option not required, connector can find the schema of upstream data automatically."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Orc Data type"),(0,r.kt)("th",{parentName:"tr",align:null},"SeaTunnel Data type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INT_8"),(0,r.kt)("td",{parentName:"tr",align:null},"BYTE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INT_16"),(0,r.kt)("td",{parentName:"tr",align:null},"SHORT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATE"),(0,r.kt)("td",{parentName:"tr",align:null},"DATE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP_MILLIS"),(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INT64"),(0,r.kt)("td",{parentName:"tr",align:null},"LONG")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INT96"),(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BINARY"),(0,r.kt)("td",{parentName:"tr",align:null},"BYTES")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.kt)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.kt)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.kt)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FIXED_LEN_BYTE_ARRAY"),(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP",(0,r.kt)("br",null)," DECIMAL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DECIMAL"),(0,r.kt)("td",{parentName:"tr",align:null},"DECIMAL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LIST(STRING)"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING_ARRAY_TYPE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LIST(BOOLEAN)"),(0,r.kt)("td",{parentName:"tr",align:null},"BOOLEAN_ARRAY_TYPE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LIST(TINYINT)"),(0,r.kt)("td",{parentName:"tr",align:null},"BYTE_ARRAY_TYPE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LIST(SMALLINT)"),(0,r.kt)("td",{parentName:"tr",align:null},"SHORT_ARRAY_TYPE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LIST(INT)"),(0,r.kt)("td",{parentName:"tr",align:null},"INT_ARRAY_TYPE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LIST(BIGINT)"),(0,r.kt)("td",{parentName:"tr",align:null},"LONG_ARRAY_TYPE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LIST(FLOAT)"),(0,r.kt)("td",{parentName:"tr",align:null},"FLOAT_ARRAY_TYPE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LIST(DOUBLE)"),(0,r.kt)("td",{parentName:"tr",align:null},"DOUBLE_ARRAY_TYPE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Map<K,V>"),(0,r.kt)("td",{parentName:"tr",align:null},"MapType, This type of K and V will transform to SeaTunnel type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STRUCT"),(0,r.kt)("td",{parentName:"tr",align:null},"SeaTunnelRowType")))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"required"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},'The Oss path that needs to be read can have sub paths, but the sub paths need to meet certain format requirements. Specific requirements can be referred to "parse_partition_from_path" option')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"file_format_type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"File type, supported as the following file types: ",(0,r.kt)("inlineCode",{parentName:"td"},"text")," ",(0,r.kt)("inlineCode",{parentName:"td"},"csv")," ",(0,r.kt)("inlineCode",{parentName:"td"},"parquet")," ",(0,r.kt)("inlineCode",{parentName:"td"},"orc")," ",(0,r.kt)("inlineCode",{parentName:"td"},"json")," ",(0,r.kt)("inlineCode",{parentName:"td"},"excel"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bucket"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"The bucket address of oss file system, for example: ",(0,r.kt)("inlineCode",{parentName:"td"},"oss://seatunnel-test"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"fs oss endpoint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"read_columns"),(0,r.kt)("td",{parentName:"tr",align:null},"list"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"The read column list of the data source, user can use it to implement field projection. The file type supported column projection as the following shown: ",(0,r.kt)("inlineCode",{parentName:"td"},"text")," ",(0,r.kt)("inlineCode",{parentName:"td"},"csv")," ",(0,r.kt)("inlineCode",{parentName:"td"},"parquet")," ",(0,r.kt)("inlineCode",{parentName:"td"},"orc")," ",(0,r.kt)("inlineCode",{parentName:"td"},"json")," ",(0,r.kt)("inlineCode",{parentName:"td"},"excel")," . If the user wants to use this feature when reading ",(0,r.kt)("inlineCode",{parentName:"td"},"text")," ",(0,r.kt)("inlineCode",{parentName:"td"},"json")," ",(0,r.kt)("inlineCode",{parentName:"td"},"csv"),' files, the "schema" option must be configured.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"access_key"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"access_secret"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"delimiter"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"\\001"),(0,r.kt)("td",{parentName:"tr",align:null},"Field delimiter, used to tell connector how to slice and dice fields when reading text files. Default ",(0,r.kt)("inlineCode",{parentName:"td"},"\\001"),", the same as hive's default delimiter.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"parse_partition_from_path"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Control whether parse the partition keys and values from file path. For example if you read a file from path ",(0,r.kt)("inlineCode",{parentName:"td"},"oss://hadoop-cluster/tmp/seatunnel/parquet/name=tyrantlucifer/age=26"),'. Every record data from file will be added these two fields: name="tyrantlucifer", age=16')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"date_format"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"yyyy-MM-dd"),(0,r.kt)("td",{parentName:"tr",align:null},"Date type format, used to tell connector how to convert string to date, supported as the following formats:",(0,r.kt)("inlineCode",{parentName:"td"},"yyyy-MM-dd")," ",(0,r.kt)("inlineCode",{parentName:"td"},"yyyy.MM.dd")," ",(0,r.kt)("inlineCode",{parentName:"td"},"yyyy/MM/dd"),". default ",(0,r.kt)("inlineCode",{parentName:"td"},"yyyy-MM-dd"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"datetime_format"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"yyyy-MM-dd HH:mm:ss"),(0,r.kt)("td",{parentName:"tr",align:null},"Datetime type format, used to tell connector how to convert string to datetime, supported as the following formats:",(0,r.kt)("inlineCode",{parentName:"td"},"yyyy-MM-dd HH:mm:ss")," ",(0,r.kt)("inlineCode",{parentName:"td"},"yyyy.MM.dd HH:mm:ss")," ",(0,r.kt)("inlineCode",{parentName:"td"},"yyyy/MM/dd HH:mm:ss")," ",(0,r.kt)("inlineCode",{parentName:"td"},"yyyyMMddHHmmss"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"time_format"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"HH:mm:ss"),(0,r.kt)("td",{parentName:"tr",align:null},"Time type format, used to tell connector how to convert string to time, supported as the following formats:",(0,r.kt)("inlineCode",{parentName:"td"},"HH:mm:ss")," ",(0,r.kt)("inlineCode",{parentName:"td"},"HH:mm:ss.SSS"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"skip_header_row_number"),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"Skip the first few lines, but only for the txt and csv. For example, set like following:",(0,r.kt)("inlineCode",{parentName:"td"},"skip_header_row_number = 2"),". Then SeaTunnel will skip the first 2 lines from source files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"schema"),(0,r.kt)("td",{parentName:"tr",align:null},"config"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"The schema of upstream data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sheet_name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Reader the sheet of the workbook,Only used when file_format is excel.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"compress_codec"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"Which compress codec the files used.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"file_filter_pattern"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*.txt")," means you only need read the files end with ",(0,r.kt)("inlineCode",{parentName:"td"},".txt"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"common-options"),(0,r.kt)("td",{parentName:"tr",align:null},"config"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Source plugin common parameters, please refer to ",(0,r.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/common-options"},"Source Common Options")," for details.")))),(0,r.kt)("h3",{id:"compress_codec-string"},"compress_codec ","[string]"),(0,r.kt)("p",null,"The compress codec of files and the details that supported as the following shown:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"txt: ",(0,r.kt)("inlineCode",{parentName:"li"},"lzo")," ",(0,r.kt)("inlineCode",{parentName:"li"},"none")),(0,r.kt)("li",{parentName:"ul"},"json: ",(0,r.kt)("inlineCode",{parentName:"li"},"lzo")," ",(0,r.kt)("inlineCode",{parentName:"li"},"none")),(0,r.kt)("li",{parentName:"ul"},"csv: ",(0,r.kt)("inlineCode",{parentName:"li"},"lzo")," ",(0,r.kt)("inlineCode",{parentName:"li"},"none")),(0,r.kt)("li",{parentName:"ul"},"orc/parquet:",(0,r.kt)("br",{parentName:"li"}),"automatically recognizes the compression type, no additional settings required.")),(0,r.kt)("h3",{id:"file_filter_pattern-string"},"file_filter_pattern ","[string]"),(0,r.kt)("p",null,"Filter pattern, which used for filtering files."),(0,r.kt)("h3",{id:"schema-config"},"schema ","[config]"),(0,r.kt)("p",null,"Only need to be configured when the file_format_type are text, json, excel or csv ( Or other format we can't read the schema from metadata)."),(0,r.kt)("h4",{id:"fields-config"},"fields ","[Config]"),(0,r.kt)("p",null,"The schema of upstream data."),(0,r.kt)("h2",{id:"how-to-create-a-oss-data-synchronization-jobs"},"How to Create a Oss Data Synchronization Jobs"),(0,r.kt)("p",null,"The following example demonstrates how to create a data synchronization job that reads data from Oss and prints it on the local client:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Set the basic configuration of the task to be performed\nenv {\n  execution.parallelism = 1\n  job.mode = "BATCH"\n}\n\n# Create a source to connect to Oss\nsource {\n  OssFile {\n    path = "/seatunnel/orc"\n    bucket = "oss://tyrantlucifer-image-bed"\n    access_key = "xxxxxxxxxxxxxxxxx"\n    access_secret = "xxxxxxxxxxxxxxxxxxxxxx"\n    endpoint = "oss-cn-beijing.aliyuncs.com"\n    file_format_type = "orc"\n  }\n}\n\n# Console printing of the read Oss data\nsink {\n  Console {\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Set the basic configuration of the task to be performed\nenv {\n  execution.parallelism = 1\n  job.mode = "BATCH"\n}\n\n# Create a source to connect to Oss\nsource {\n  OssFile {\n    path = "/seatunnel/json"\n    bucket = "oss://tyrantlucifer-image-bed"\n    access_key = "xxxxxxxxxxxxxxxxx"\n    access_secret = "xxxxxxxxxxxxxxxxxxxxxx"\n    endpoint = "oss-cn-beijing.aliyuncs.com"\n    file_format_type = "json"\n    schema {\n      fields {\n        id = int \n        name = string\n      }\n    }\n  }\n}\n\n# Console printing of the read Oss data\nsink {\n  Console {\n  }\n}\n')),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add OSS File Source Connector")),(0,r.kt)("h3",{id:"230-beta-2022-10-20"},"2.3.0-beta 2022-10-20"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[BugFix]"," Fix the bug of incorrect path in windows environment (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/2980"},"2980"),")"),(0,r.kt)("li",{parentName:"ul"},"[Improve]"," Support extract partition from SeaTunnelRow fields (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3085"},"3085"),")"),(0,r.kt)("li",{parentName:"ul"},"[Improve]"," Support parse field from file path (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/2985"},"2985"),")")),(0,r.kt)("h3",{id:"tips"},"Tips"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"1.",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/start-v2/locally/deployment"},"SeaTunnel Deployment Document"),".")))}k.isMDXComponent=!0}}]);
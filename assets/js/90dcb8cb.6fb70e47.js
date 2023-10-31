"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[38517],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),c=l,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||r;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},42292:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},assets:function(){return p},toc:function(){return m},default:function(){return c}});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),i=["components"],o={},s="HdfsFile",d={unversionedId:"connector-v2/source/HdfsFile",id:"connector-v2/source/HdfsFile",title:"HdfsFile",description:"Hdfs File Source Connector",source:"@site/docs/connector-v2/source/HdfsFile.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/HdfsFile",permalink:"/docs/connector-v2/source/HdfsFile",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/source/HdfsFile.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Greenplum",permalink:"/docs/connector-v2/source/Greenplum"},next:{title:"Hive",permalink:"/docs/connector-v2/source/Hive"}},p={},m=[{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Description",id:"description",level:2},{value:"Supported DataSource Info",id:"supported-datasource-info",level:2},{value:"Source Options",id:"source-options",level:2},{value:"delimiter/field_delimiter string",id:"delimiterfield_delimiter-string",level:3},{value:"compress_codec string",id:"compress_codec-string",level:3},{value:"Tips",id:"tips",level:3},{value:"Task Example",id:"task-example",level:2},{value:"Simple:",id:"simple",level:3}],u={toc:m};function c(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"hdfsfile"},"HdfsFile"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Hdfs File Source Connector")),(0,r.kt)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Spark",(0,r.kt)("br",null),"\nFlink",(0,r.kt)("br",null),"\nSeaTunnel Zeta",(0,r.kt)("br",null))),(0,r.kt)("h2",{id:"key-features"},"Key Features"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"batch")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"stream")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once"))),(0,r.kt)("p",null,"Read all the data in a split in a pollNext call. What splits are read will be saved in snapshot."),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"column projection")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"parallelism")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"support user-defined split")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","file format file",(0,r.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","text"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","csv"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","parquet"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","orc"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","json"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","excel")))),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Read data from hdfs file system."),(0,r.kt)("h2",{id:"supported-datasource-info"},"Supported DataSource Info"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Datasource"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported Versions"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HdfsFile"),(0,r.kt)("td",{parentName:"tr",align:null},"hadoop 2.x and 3.x")))),(0,r.kt)("h2",{id:"source-options"},"Source Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"The source file path.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"file_format_type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"We supported as the following file types:",(0,r.kt)("inlineCode",{parentName:"td"},"text")," ",(0,r.kt)("inlineCode",{parentName:"td"},"json")," ",(0,r.kt)("inlineCode",{parentName:"td"},"csv")," ",(0,r.kt)("inlineCode",{parentName:"td"},"orc")," ",(0,r.kt)("inlineCode",{parentName:"td"},"parquet")," ",(0,r.kt)("inlineCode",{parentName:"td"},"excel"),".Please note that, The final file name will end with the file_format's suffix, the suffix of the text file is ",(0,r.kt)("inlineCode",{parentName:"td"},"txt"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fs.defaultFS"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"The hadoop cluster address that start with ",(0,r.kt)("inlineCode",{parentName:"td"},"hdfs://"),", for example: ",(0,r.kt)("inlineCode",{parentName:"td"},"hdfs://hadoopcluster"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"read_columns"),(0,r.kt)("td",{parentName:"tr",align:null},"list"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"The read column list of the data source, user can use it to implement field projection.The file type supported column projection as the following shown:","[text,json,csv,orc,parquet,excel]",".Tips: If the user wants to use this feature when reading ",(0,r.kt)("inlineCode",{parentName:"td"},"text")," ",(0,r.kt)("inlineCode",{parentName:"td"},"json")," ",(0,r.kt)("inlineCode",{parentName:"td"},"csv")," files, the schema option must be configured.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hdfs_site_path"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"The path of ",(0,r.kt)("inlineCode",{parentName:"td"},"hdfs-site.xml"),", used to load ha configuration of namenodes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"delimiter/field_delimiter"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"\\001"),(0,r.kt)("td",{parentName:"tr",align:null},"Field delimiter, used to tell connector how to slice and dice fields when reading text files. default ",(0,r.kt)("inlineCode",{parentName:"td"},"\\001"),", the same as hive's default delimiter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"parse_partition_from_path"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Control whether parse the partition keys and values from file path. For example if you read a file from path ",(0,r.kt)("inlineCode",{parentName:"td"},"hdfs://hadoop-cluster/tmp/seatunnel/parquet/name=tyrantlucifer/age=26"),". Every record data from file will be added these two fields:","[name:tyrantlucifer,age:26]",".Tips:Do not define partition fields in schema option.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"date_format"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"yyyy-MM-dd"),(0,r.kt)("td",{parentName:"tr",align:null},"Date type format, used to tell connector how to convert string to date, supported as the following formats:",(0,r.kt)("inlineCode",{parentName:"td"},"yyyy-MM-dd")," ",(0,r.kt)("inlineCode",{parentName:"td"},"yyyy.MM.dd")," ",(0,r.kt)("inlineCode",{parentName:"td"},"yyyy/MM/dd")," default ",(0,r.kt)("inlineCode",{parentName:"td"},"yyyy-MM-dd"),".Date type format, used to tell connector how to convert string to date, supported as the following formats:",(0,r.kt)("inlineCode",{parentName:"td"},"yyyy-MM-dd")," ",(0,r.kt)("inlineCode",{parentName:"td"},"yyyy.MM.dd")," ",(0,r.kt)("inlineCode",{parentName:"td"},"yyyy/MM/dd")," default ",(0,r.kt)("inlineCode",{parentName:"td"},"yyyy-MM-dd"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"datetime_format"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"yyyy-MM-dd HH:mm:ss"),(0,r.kt)("td",{parentName:"tr",align:null},"Datetime type format, used to tell connector how to convert string to datetime, supported as the following formats:",(0,r.kt)("inlineCode",{parentName:"td"},"yyyy-MM-dd HH:mm:ss")," ",(0,r.kt)("inlineCode",{parentName:"td"},"yyyy.MM.dd HH:mm:ss")," ",(0,r.kt)("inlineCode",{parentName:"td"},"yyyy/MM/dd HH:mm:ss")," ",(0,r.kt)("inlineCode",{parentName:"td"},"yyyyMMddHHmmss")," .default ",(0,r.kt)("inlineCode",{parentName:"td"},"yyyy-MM-dd HH:mm:ss"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"time_format"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"HH:mm:ss"),(0,r.kt)("td",{parentName:"tr",align:null},"Time type format, used to tell connector how to convert string to time, supported as the following formats:",(0,r.kt)("inlineCode",{parentName:"td"},"HH:mm:ss")," ",(0,r.kt)("inlineCode",{parentName:"td"},"HH:mm:ss.SSS"),".default ",(0,r.kt)("inlineCode",{parentName:"td"},"HH:mm:ss"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"kerberos_principal"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"The principal of kerberos")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"kerberos_keytab_path"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"The keytab path of kerberos")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"skip_header_row_number"),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"Skip the first few lines, but only for the txt and csv.For example, set like following:",(0,r.kt)("inlineCode",{parentName:"td"},"skip_header_row_number = 2"),".then Seatunnel will skip the first 2 lines from source files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"schema"),(0,r.kt)("td",{parentName:"tr",align:null},"config"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"the schema fields of upstream data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sheet_name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Reader the sheet of the workbook,Only used when file_format is excel.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"compress_codec"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"The compress codec of files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"common-options"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Source plugin common parameters, please refer to ",(0,r.kt)("a",{parentName:"td",href:"/docs/connector-v2/source/common-options"},"Source Common Options")," for details.")))),(0,r.kt)("h3",{id:"delimiterfield_delimiter-string"},"delimiter/field_delimiter ","[string]"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"delimiter")," parameter will deprecate after version 2.3.5, please use ",(0,r.kt)("strong",{parentName:"p"},"field_delimiter")," instead."),(0,r.kt)("h3",{id:"compress_codec-string"},"compress_codec ","[string]"),(0,r.kt)("p",null,"The compress codec of files and the details that supported as the following shown:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"txt: ",(0,r.kt)("inlineCode",{parentName:"li"},"lzo")," ",(0,r.kt)("inlineCode",{parentName:"li"},"none")),(0,r.kt)("li",{parentName:"ul"},"json: ",(0,r.kt)("inlineCode",{parentName:"li"},"lzo")," ",(0,r.kt)("inlineCode",{parentName:"li"},"none")),(0,r.kt)("li",{parentName:"ul"},"csv: ",(0,r.kt)("inlineCode",{parentName:"li"},"lzo")," ",(0,r.kt)("inlineCode",{parentName:"li"},"none")),(0,r.kt)("li",{parentName:"ul"},"orc/parquet:",(0,r.kt)("br",{parentName:"li"}),"automatically recognizes the compression type, no additional settings required.")),(0,r.kt)("h3",{id:"tips"},"Tips"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you use spark/flink, In order to use this connector, You must ensure your spark/flink cluster already integrated hadoop. The tested hadoop version is 2.x. If you use SeaTunnel Engine, It automatically integrated the hadoop jar when you download and install SeaTunnel Engine. You can check the jar package under ${SEATUNNEL_HOME}/lib to confirm this.")),(0,r.kt)("h2",{id:"task-example"},"Task Example"),(0,r.kt)("h3",{id:"simple"},"Simple:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This example defines a SeaTunnel synchronization task that  read data from Hdfs and sends it to Hdfs.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# Defining the runtime environment\nenv {\n  # You can set flink configuration here\n  execution.parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  HdfsFile {\n  schema {\n    fields {\n      name = string\n      age = int\n    }\n  }\n  path = "/apps/hive/demo/student"\n  type = "json"\n  fs.defaultFS = "hdfs://namenode001"\n  }\n  # If you would like to get more information about how to configure seatunnel and see full list of source plugins,\n  # please go to https://seatunnel.apache.org/docs/category/source-v2\n}\n\ntransform {\n  # If you would like to get more information about how to configure seatunnel and see full list of transform plugins,\n    # please go to https://seatunnel.apache.org/docs/category/transform-v2\n}\n\nsink {\n    HdfsFile {\n      fs.defaultFS = "hdfs://hadoopcluster"\n      path = "/tmp/hive/warehouse/test2"\n      file_format = "orc"\n    }\n  # If you would like to get more information about how to configure seatunnel and see full list of sink plugins,\n  # please go to https://seatunnel.apache.org/docs/category/sink-v2\n}\n')))}c.isMDXComponent=!0}}]);
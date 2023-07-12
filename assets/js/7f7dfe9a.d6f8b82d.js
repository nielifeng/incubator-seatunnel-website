"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[67059],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return k}});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var u=a.createContext({}),p=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,u=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=p(n),k=l,c=m["".concat(u,".").concat(k)]||m[k]||s[k]||r;return n?a.createElement(c,i(i({ref:e},d),{},{components:n})):a.createElement(c,i({ref:e},d))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44966:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},assets:function(){return d},toc:function(){return s},default:function(){return k}});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),i=["components"],o={},u="OceanBase",p={unversionedId:"connector-v2/sink/OceanBase",id:"connector-v2/sink/OceanBase",title:"OceanBase",description:"JDBC OceanBase Sink Connector",source:"@site/docs/connector-v2/sink/OceanBase.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/OceanBase",permalink:"/docs/connector-v2/sink/OceanBase",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/OceanBase.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Neo4j",permalink:"/docs/connector-v2/sink/Neo4j"},next:{title:"OssFile",permalink:"/docs/connector-v2/sink/OssFile"}},d={},s=[{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Description",id:"description",level:2},{value:"Supported DataSource Info",id:"supported-datasource-info",level:2},{value:"Database Dependency",id:"database-dependency",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2},{value:"Mysql Mode",id:"mysql-mode",level:3},{value:"Oracle Mode",id:"oracle-mode",level:3},{value:"Sink Options",id:"sink-options",level:2},{value:"Tips",id:"tips",level:3},{value:"Task Example",id:"task-example",level:2},{value:"Simple:",id:"simple",level:3},{value:"Generate Sink SQL",id:"generate-sink-sql",level:3},{value:"CDC(Change Data Capture) Event",id:"cdcchange-data-capture-event",level:3}],m={toc:s};function k(t){var e=t.components,n=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"oceanbase"},"OceanBase"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"JDBC OceanBase Sink Connector")),(0,r.kt)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Spark",(0,r.kt)("br",null),"\nFlink",(0,r.kt)("br",null),"\nSeaTunnel Zeta",(0,r.kt)("br",null))),(0,r.kt)("h2",{id:"key-features"},"Key Features"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"cdc"))),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Write data through jdbc. Support Batch mode and Streaming mode, support concurrent writing, support exactly-once semantics."),(0,r.kt)("h2",{id:"supported-datasource-info"},"Supported DataSource Info"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Datasource"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported versions"),(0,r.kt)("th",{parentName:"tr",align:null},"Driver"),(0,r.kt)("th",{parentName:"tr",align:null},"Url"),(0,r.kt)("th",{parentName:"tr",align:null},"Maven"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OceanBase"),(0,r.kt)("td",{parentName:"tr",align:null},"All OceanBase server versions."),(0,r.kt)("td",{parentName:"tr",align:null},"com.oceanbase.jdbc.Driver"),(0,r.kt)("td",{parentName:"tr",align:null},"jdbc:oceanbase://localhost:2883/test"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.oceanbase/oceanbase-client"},"Download"))))),(0,r.kt)("h2",{id:"database-dependency"},"Database Dependency"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Please download the support list corresponding to 'Maven' and copy it to the '$SEATNUNNEL_HOME/plugins/jdbc/lib/' working directory",(0,r.kt)("br",null),"\nFor example: cp oceanbase-client-xxx.jar $SEATNUNNEL_HOME/plugins/jdbc/lib/")),(0,r.kt)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,r.kt)("h3",{id:"mysql-mode"},"Mysql Mode"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Mysql Data type"),(0,r.kt)("th",{parentName:"tr",align:null},"SeaTunnel Data type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BIT(1)",(0,r.kt)("br",null),"INT UNSIGNED"),(0,r.kt)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TINYINT",(0,r.kt)("br",null),"TINYINT UNSIGNED",(0,r.kt)("br",null),"SMALLINT",(0,r.kt)("br",null),"SMALLINT UNSIGNED",(0,r.kt)("br",null),"MEDIUMINT",(0,r.kt)("br",null),"MEDIUMINT UNSIGNED",(0,r.kt)("br",null),"INT",(0,r.kt)("br",null),"INTEGER",(0,r.kt)("br",null),"YEAR"),(0,r.kt)("td",{parentName:"tr",align:null},"INT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INT UNSIGNED",(0,r.kt)("br",null),"INTEGER UNSIGNED",(0,r.kt)("br",null),"BIGINT"),(0,r.kt)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BIGINT UNSIGNED"),(0,r.kt)("td",{parentName:"tr",align:null},"DECIMAL(20,0)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DECIMAL(x,y)(Get the designated column's specified column size.<38)"),(0,r.kt)("td",{parentName:"tr",align:null},"DECIMAL(x,y)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DECIMAL(x,y)(Get the designated column's specified column size.>38)"),(0,r.kt)("td",{parentName:"tr",align:null},"DECIMAL(38,18)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DECIMAL UNSIGNED"),(0,r.kt)("td",{parentName:"tr",align:null},"DECIMAL((Get the designated column's specified column size)+1,",(0,r.kt)("br",null),"(Gets the designated column's number of digits to right of the decimal point.)))")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FLOAT",(0,r.kt)("br",null),"FLOAT UNSIGNED"),(0,r.kt)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DOUBLE",(0,r.kt)("br",null),"DOUBLE UNSIGNED"),(0,r.kt)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CHAR",(0,r.kt)("br",null),"VARCHAR",(0,r.kt)("br",null),"TINYTEXT",(0,r.kt)("br",null),"MEDIUMTEXT",(0,r.kt)("br",null),"TEXT",(0,r.kt)("br",null),"LONGTEXT",(0,r.kt)("br",null),"JSON"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATE"),(0,r.kt)("td",{parentName:"tr",align:null},"DATE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TIME"),(0,r.kt)("td",{parentName:"tr",align:null},"TIME")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATETIME",(0,r.kt)("br",null),"TIMESTAMP"),(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TINYBLOB",(0,r.kt)("br",null),"MEDIUMBLOB",(0,r.kt)("br",null),"BLOB",(0,r.kt)("br",null),"LONGBLOB",(0,r.kt)("br",null),"BINARY",(0,r.kt)("br",null),"VARBINAR",(0,r.kt)("br",null),"BIT(n)"),(0,r.kt)("td",{parentName:"tr",align:null},"BYTES")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GEOMETRY",(0,r.kt)("br",null),"UNKNOWN"),(0,r.kt)("td",{parentName:"tr",align:null},"Not supported yet")))),(0,r.kt)("h3",{id:"oracle-mode"},"Oracle Mode"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Oracle Data type"),(0,r.kt)("th",{parentName:"tr",align:null},"SeaTunnel Data type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Number(p), p <= 9"),(0,r.kt)("td",{parentName:"tr",align:null},"INT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Number(p), p <= 18"),(0,r.kt)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Number(p), p > 18"),(0,r.kt)("td",{parentName:"tr",align:null},"DECIMAL(38,18)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"REAL",(0,r.kt)("br",null)," BINARY_FLOAT"),(0,r.kt)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BINARY_DOUBLE"),(0,r.kt)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CHAR",(0,r.kt)("br",null),"NCHAR",(0,r.kt)("br",null),"NVARCHAR2",(0,r.kt)("br",null),"NCLOB",(0,r.kt)("br",null),"CLOB",(0,r.kt)("br",null),"ROWID"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATE"),(0,r.kt)("td",{parentName:"tr",align:null},"DATE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP",(0,r.kt)("br",null),"TIMESTAMP WITH LOCAL TIME ZONE"),(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BLOB",(0,r.kt)("br",null),"RAW",(0,r.kt)("br",null),"LONG RAW",(0,r.kt)("br",null),"BFILE"),(0,r.kt)("td",{parentName:"tr",align:null},"BYTES")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UNKNOWN"),(0,r.kt)("td",{parentName:"tr",align:null},"Not supported yet")))),(0,r.kt)("h2",{id:"sink-options"},"Sink Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"url"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"The URL of the JDBC connection. Refer to a case: jdbc:oceanbase://localhost:2883/test")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"driver"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"The jdbc class name used to connect to the remote data source, should be ",(0,r.kt)("inlineCode",{parentName:"td"},"com.oceanbase.jdbc.Driver"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Connection instance user name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Connection instance password")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Use this sql write upstream input datas to database. e.g ",(0,r.kt)("inlineCode",{parentName:"td"},"INSERT ..."),",",(0,r.kt)("inlineCode",{parentName:"td"},"query")," have the higher priority")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"compatible_mode"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"The compatible mode of OceanBase, can be 'mysql' or 'oracle'.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"database"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Use this ",(0,r.kt)("inlineCode",{parentName:"td"},"database")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"table-name")," auto-generate sql and receive upstream input datas write to database.",(0,r.kt)("br",null),"This option is mutually exclusive with ",(0,r.kt)("inlineCode",{parentName:"td"},"query")," and has a higher priority.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"table"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Use database and this table-name auto-generate sql and receive upstream input datas write to database.",(0,r.kt)("br",null),"This option is mutually exclusive with ",(0,r.kt)("inlineCode",{parentName:"td"},"query")," and has a higher priority.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"primary_keys"),(0,r.kt)("td",{parentName:"tr",align:null},"Array"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"This option is used to support operations such as ",(0,r.kt)("inlineCode",{parentName:"td"},"insert"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"delete"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"update")," when automatically generate sql.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"support_upsert_by_query_primary_key_exist"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Choose to use INSERT sql, UPDATE sql to process update events(INSERT, UPDATE_AFTER) based on query primary key exists. This configuration is only used when database unsupport upsert syntax. ",(0,r.kt)("strong",{parentName:"td"},"Note"),": that this method has low performance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connection_check_timeout_sec"),(0,r.kt)("td",{parentName:"tr",align:null},"Int"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"30"),(0,r.kt)("td",{parentName:"tr",align:null},"The time in seconds to wait for the database operation used to validate the connection to complete.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max_retries"),(0,r.kt)("td",{parentName:"tr",align:null},"Int"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of retries to submit failed (executeBatch)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"batch_size"),(0,r.kt)("td",{parentName:"tr",align:null},"Int"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"1000"),(0,r.kt)("td",{parentName:"tr",align:null},"For batch writing, when the number of buffered records reaches the number of ",(0,r.kt)("inlineCode",{parentName:"td"},"batch_size")," or the time reaches ",(0,r.kt)("inlineCode",{parentName:"td"},"batch_interval_ms"),(0,r.kt)("br",null),", the data will be flushed into the database")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"batch_interval_ms"),(0,r.kt)("td",{parentName:"tr",align:null},"Int"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"1000"),(0,r.kt)("td",{parentName:"tr",align:null},"For batch writing, when the number of buffers reaches the number of ",(0,r.kt)("inlineCode",{parentName:"td"},"batch_size")," or the time reaches ",(0,r.kt)("inlineCode",{parentName:"td"},"batch_interval_ms"),", the data will be flushed into the database")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"generate_sink_sql"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Generate sql statements based on the database table you want to write to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max_commit_attempts"),(0,r.kt)("td",{parentName:"tr",align:null},"Int"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of retries for transaction commit failures")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"transaction_timeout_sec"),(0,r.kt)("td",{parentName:"tr",align:null},"Int"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"-1"),(0,r.kt)("td",{parentName:"tr",align:null},"The timeout after the transaction is opened, the default is -1 (never timeout). Note that setting the timeout may affect",(0,r.kt)("br",null),"exactly-once semantics")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"auto_commit"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Automatic transaction commit is enabled by default")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"common-options"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Sink plugin common parameters, please refer to ",(0,r.kt)("a",{parentName:"td",href:"/docs/connector-v2/sink/common-options"},"Sink Common Options")," for details")))),(0,r.kt)("h3",{id:"tips"},"Tips"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If partition_column is not set, it will run in single concurrency, and if partition_column is set, it will be executed  in parallel according to the concurrency of tasks.")),(0,r.kt)("h2",{id:"task-example"},"Task Example"),(0,r.kt)("h3",{id:"simple"},"Simple:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This example defines a SeaTunnel synchronization task that automatically generates data through FakeSource and sends it to JDBC Sink. FakeSource generates a total of 16 rows of data (row.num=16), with each row having two fields, name (string type) and age (int type). The final target table is test_table will also be 16 rows of data in the table. Before run this job, you need create database test and table test_table in your mysql. And if you have not yet installed and deployed SeaTunnel, you need to follow the instructions in ",(0,r.kt)("a",{parentName:"p",href:"/docs/start-v2/locally/deployment"},"Install SeaTunnel")," to install and deploy SeaTunnel. And then follow the instructions in ",(0,r.kt)("a",{parentName:"p",href:"/docs/start-v2/locally/quick-start-seatunnel-engine"},"Quick Start With SeaTunnel Engine")," to run this job.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# Defining the runtime environment\nenv {\n  # You can set flink configuration here\n  execution.parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  # This is a example source plugin **only for test and demonstrate the feature source plugin**\n  FakeSource {\n    parallelism = 1\n    result_table_name = "fake"\n    row.num = 16\n    schema = {\n      fields {\n        name = "string"\n        age = "int"\n      }\n    }\n  }\n  # If you would like to get more information about how to configure seatunnel and see full list of source plugins,\n  # please go to https://seatunnel.apache.org/docs/category/source-v2\n}\n\ntransform {\n  # If you would like to get more information about how to configure seatunnel and see full list of transform plugins,\n    # please go to https://seatunnel.apache.org/docs/category/transform-v2\n}\n\nsink {\n    jdbc {\n        url = "jdbc:oceanbase://localhost:2883/test"\n        driver = "com.oceanbase.jdbc.Driver"\n        user = "root"\n        password = "123456"\n        compatible_mode = "mysql"\n        query = "insert into test_table(name,age) values(?,?)"\n    }\n  # If you would like to get more information about how to configure seatunnel and see full list of sink plugins,\n  # please go to https://seatunnel.apache.org/docs/category/sink-v2\n}\n')),(0,r.kt)("h3",{id:"generate-sink-sql"},"Generate Sink SQL"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This example  not need to write complex sql statements, you can configure the database name table name to automatically generate add statements for you")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'sink {\n    jdbc {\n        url = "jdbc:oceanbase://localhost:2883/test"\n        driver = "com.oceanbase.jdbc.Driver"\n        user = "root"\n        password = "123456"\n        compatible_mode = "mysql"\n        # Automatically generate sql statements based on database table names\n        generate_sink_sql = true\n        database = test\n        table = test_table\n    }\n}\n')),(0,r.kt)("h3",{id:"cdcchange-data-capture-event"},"CDC(Change Data Capture) Event"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"CDC change data is also supported by us In this case, you need config database, table and primary_keys.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'sink {\n    jdbc {\n        url = "jdbc:oceanbase://localhost:3306/test"\n        driver = "com.oceanbase.jdbc.Driver"\n        user = "root"\n        password = "123456"\n        compatible_mode = "mysql"\n        generate_sink_sql = true\n        # You need to configure both database and table\n        database = test\n        table = sink_table\n        primary_keys = ["id","name"]\n    }\n}\n')))}k.isMDXComponent=!0}}]);
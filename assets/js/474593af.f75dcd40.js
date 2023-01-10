"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[23976],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=p(n),c=r,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||l;return n?a.createElement(k,i(i({ref:e},u),{},{components:n})):a.createElement(k,i({ref:e},u))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42228:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return m},default:function(){return c}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={},s="MySQL CDC",p={unversionedId:"connector-v2/source/MySQL-CDC",id:"version-2.3.0/connector-v2/source/MySQL-CDC",title:"MySQL CDC",description:"MySQL CDC source connector",source:"@site/versioned_docs/version-2.3.0/connector-v2/source/MySQL-CDC.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/MySQL-CDC",permalink:"/docs/2.3.0/connector-v2/source/MySQL-CDC",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.0/connector-v2/source/MySQL-CDC.md",tags:[],version:"2.3.0",frontMatter:{},sidebar:"docs",previous:{title:"My Hours",permalink:"/docs/2.3.0/connector-v2/source/MyHours"},next:{title:"Neo4j",permalink:"/docs/2.3.0/connector-v2/source/Neo4j"}},u={},m=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"hostname String",id:"hostname-string",level:3},{value:"port Integer",id:"port-integer",level:3},{value:"username String",id:"username-string",level:3},{value:"password String",id:"password-string",level:3},{value:"database-name String",id:"database-name-string",level:3},{value:"table-name String",id:"table-name-string",level:3},{value:"base-url String",id:"base-url-string",level:3},{value:"startup.mode Enum",id:"startupmode-enum",level:3},{value:"startup.timestamp Long",id:"startuptimestamp-long",level:3},{value:"startup.specific-offset.file String",id:"startupspecific-offsetfile-string",level:3},{value:"startup.specific-offset.pos Long",id:"startupspecific-offsetpos-long",level:3},{value:"stop.mode Enum",id:"stopmode-enum",level:3},{value:"stop.timestamp Long",id:"stoptimestamp-long",level:3},{value:"stop.specific-offset.file String",id:"stopspecific-offsetfile-string",level:3},{value:"stop.specific-offset.pos Long",id:"stopspecific-offsetpos-long",level:3},{value:"incremental.parallelism Integer",id:"incrementalparallelism-integer",level:3},{value:"snapshot.split.size Integer",id:"snapshotsplitsize-integer",level:3},{value:"snapshot.fetch.size Integer",id:"snapshotfetchsize-integer",level:3},{value:"server-id String",id:"server-id-string",level:3},{value:"server-time-zone String",id:"server-time-zone-string",level:3},{value:"connect.timeout Duration",id:"connecttimeout-duration",level:3},{value:"connect.max-retries Integer",id:"connectmax-retries-integer",level:3},{value:"connection.pool.size Integer",id:"connectionpoolsize-integer",level:3},{value:"debezium Config",id:"debezium-config",level:3},{value:"example",id:"example",level:4},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example-1",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.3.0 2022-12-30",id:"230-2022-12-30",level:3}],d={toc:m};function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"mysql-cdc"},"MySQL CDC"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"MySQL CDC source connector")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"The MySQL CDC connector allows for reading snapshot data and incremental data from MySQL database. This document\ndescribes how to setup the MySQL CDC connector to run SQL queries against MySQL databases."),(0,l.kt)("h2",{id:"key-features"},"Key features"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/2.3.0/concept/connector-v2-features"},"batch")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/2.3.0/concept/connector-v2-features"},"stream")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/2.3.0/concept/connector-v2-features"},"exactly-once")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/2.3.0/concept/connector-v2-features"},"schema projection")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/2.3.0/concept/connector-v2-features"},"parallelism")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/2.3.0/concept/connector-v2-features"},"support user-defined split"))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hostname"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"port"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"3306")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"database-name"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table-name"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"base-url"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"startup.mode"),(0,l.kt)("td",{parentName:"tr",align:null},"Enum"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"INITIAL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"startup.timestamp"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"startup.specific-offset.file"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"startup.specific-offset.pos"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stop.mode"),(0,l.kt)("td",{parentName:"tr",align:null},"Enum"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"NEVER")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stop.timestamp"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stop.specific-offset.file"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stop.specific-offset.pos"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"incremental.parallelism"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"snapshot.split.size"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"8096")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"snapshot.fetch.size"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"1024")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"server-id"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"server-time-zone"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"UTC")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connect.timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"Duration"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"30s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connect.max-retries"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connection.pool.size"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"20")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"chunk-key.even-distribution.factor.upper-bound"),(0,l.kt)("td",{parentName:"tr",align:null},"Double"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"1000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"chunk-key.even-distribution.factor.lower-bound"),(0,l.kt)("td",{parentName:"tr",align:null},"Double"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"0.05")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"debezium.*"),(0,l.kt)("td",{parentName:"tr",align:null},"config"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common-options"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"hostname-string"},"hostname ","[String]"),(0,l.kt)("p",null,"IP address or hostname of the database server."),(0,l.kt)("h3",{id:"port-integer"},"port ","[Integer]"),(0,l.kt)("p",null,"Integer port number of the database server."),(0,l.kt)("h3",{id:"username-string"},"username ","[String]"),(0,l.kt)("p",null,"Name of the database to use when connecting to the database server."),(0,l.kt)("h3",{id:"password-string"},"password ","[String]"),(0,l.kt)("p",null,"Password to use when connecting to the database server."),(0,l.kt)("h3",{id:"database-name-string"},"database-name ","[String]"),(0,l.kt)("p",null,"Database name of the database to monitor."),(0,l.kt)("h3",{id:"table-name-string"},"table-name ","[String]"),(0,l.kt)("p",null,"Table name of the database to monitor."),(0,l.kt)("h3",{id:"base-url-string"},"base-url ","[String]"),(0,l.kt)("p",null,'URL has to be without database, like "jdbc:mysql://localhost:5432/" or "jdbc:mariadb://localhost:5432" rather than "\njdbc:polardb://localhost:5432/db"'),(0,l.kt)("h3",{id:"startupmode-enum"},"startup.mode ","[Enum]"),(0,l.kt)("p",null,'Optional startup mode for MySQL CDC consumer, valid enumerations are "initial", "earliest", "latest" and "specific".'),(0,l.kt)("h3",{id:"startuptimestamp-long"},"startup.timestamp ","[Long]"),(0,l.kt)("p",null,"Start from the specified epoch timestamp (in milliseconds)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},'Note, This option is required when the "startup.mode" option used ',(0,l.kt)("inlineCode",{parentName:"strong"},"'timestamp'"),".")),(0,l.kt)("h3",{id:"startupspecific-offsetfile-string"},"startup.specific-offset.file ","[String]"),(0,l.kt)("p",null,"Start from the specified binlog file name."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},'Note, This option is required when the "startup.mode" option used ',(0,l.kt)("inlineCode",{parentName:"strong"},"'specific'"),".")),(0,l.kt)("h3",{id:"startupspecific-offsetpos-long"},"startup.specific-offset.pos ","[Long]"),(0,l.kt)("p",null,"Start from the specified binlog file position."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},'Note, This option is required when the "startup.mode" option used ',(0,l.kt)("inlineCode",{parentName:"strong"},"'specific'"),".")),(0,l.kt)("h3",{id:"stopmode-enum"},"stop.mode ","[Enum]"),(0,l.kt)("p",null,'Optional stop mode for MySQL CDC consumer, valid enumerations are "never".'),(0,l.kt)("h3",{id:"stoptimestamp-long"},"stop.timestamp ","[Long]"),(0,l.kt)("p",null,"Stop from the specified epoch timestamp (in milliseconds)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},'Note, This option is required when the "stop.mode" option used ',(0,l.kt)("inlineCode",{parentName:"strong"},"'timestamp'"),".")),(0,l.kt)("h3",{id:"stopspecific-offsetfile-string"},"stop.specific-offset.file ","[String]"),(0,l.kt)("p",null,"Stop from the specified binlog file name."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},'Note, This option is required when the "stop.mode" option used ',(0,l.kt)("inlineCode",{parentName:"strong"},"'specific'"),".")),(0,l.kt)("h3",{id:"stopspecific-offsetpos-long"},"stop.specific-offset.pos ","[Long]"),(0,l.kt)("p",null,"Stop from the specified binlog file position."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},'Note, This option is required when the "stop.mode" option used ',(0,l.kt)("inlineCode",{parentName:"strong"},"'specific'"),".")),(0,l.kt)("h3",{id:"incrementalparallelism-integer"},"incremental.parallelism ","[Integer]"),(0,l.kt)("p",null,"The number of parallel readers in the incremental phase."),(0,l.kt)("h3",{id:"snapshotsplitsize-integer"},"snapshot.split.size ","[Integer]"),(0,l.kt)("p",null,"The split size (number of rows) of table snapshot, captured tables are split into multiple splits when read the snapshot\nof table."),(0,l.kt)("h3",{id:"snapshotfetchsize-integer"},"snapshot.fetch.size ","[Integer]"),(0,l.kt)("p",null,"The maximum fetch size for per poll when read table snapshot."),(0,l.kt)("h3",{id:"server-id-string"},"server-id ","[String]"),(0,l.kt)("p",null,"A numeric ID or a numeric ID range of this database client, The numeric ID syntax is like '5400', the numeric ID range\nsyntax is like '5400-5408'."),(0,l.kt)("p",null,"Every ID must be unique across all currently-running database processes in the MySQL cluster. This connector joins the\nMySQL cluster as another server (with this unique ID) so it can read the binlog."),(0,l.kt)("p",null,"By default, a random number is generated between 5400 and 6400, though we recommend setting an explicit value."),(0,l.kt)("h3",{id:"server-time-zone-string"},"server-time-zone ","[String]"),(0,l.kt)("p",null,"The session time zone in database server."),(0,l.kt)("h3",{id:"connecttimeout-duration"},"connect.timeout ","[Duration]"),(0,l.kt)("p",null,"The maximum time that the connector should wait after trying to connect to the database server before timing out."),(0,l.kt)("h3",{id:"connectmax-retries-integer"},"connect.max-retries ","[Integer]"),(0,l.kt)("p",null,"The max retry times that the connector should retry to build database server connection."),(0,l.kt)("h3",{id:"connectionpoolsize-integer"},"connection.pool.size ","[Integer]"),(0,l.kt)("p",null,"The connection pool size."),(0,l.kt)("h3",{id:"debezium-config"},"debezium ","[Config]"),(0,l.kt)("p",null,"Pass-through Debezium's properties to Debezium Embedded Engine which is used to capture data changes from MySQL server."),(0,l.kt)("p",null,"See more about\nthe ",(0,l.kt)("a",{parentName:"p",href:"https://debezium.io/documentation/reference/1.6/connectors/mysql.html#mysql-connector-properties"},"Debezium's MySQL Connector properties")),(0,l.kt)("h4",{id:"example"},"example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-conf"},'source {\n  MySQL-CDC {\n    debezium {\n        snapshot.mode = "never"\n        decimal.handling.mode = "double"\n    }\n  }\n}\n')),(0,l.kt)("h3",{id:"common-options"},"common options"),(0,l.kt)("p",null,"Source plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.3.0/connector-v2/source/common-options"},"Source Common Options")," for details."),(0,l.kt)("h2",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Jdbc",metastring:"{","{":!0},'source {\n  MySQL-CDC {\n    result_table_name = "fake"\n    parallelism = 1\n    server-id = 5656\n    port = 56725\n    hostname = "127.0.0.1"\n    username = "mysqluser"\n    password = "mysqlpw"\n    database-name = "inventory_vwyw0n"\n    table-name = "products"\n    base-url = "jdbc:mysql://localhost:56725"\n  }\n}\n')),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)("h3",{id:"230-2022-12-30"},"2.3.0 2022-12-30"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add MySQL CDC Source Connector")))}c.isMDXComponent=!0}}]);